import { NextResponse } from "next/server";
import Replicate from "replicate";
import { Ratelimit } from "@upstash/ratelimit";
import redis from "@/lib/redis";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const ratelimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.fixedWindow(5, "1440 m"),
      analytics: true,
    })
  : undefined;

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || "",
});

export async function POST(request: Request, response: NextResponse) {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session || !session.user) {
    return NextResponse.json("Not authenticated", { status: 500 });
  }

  let result;
  // Rate Limiting by user email
  if (ratelimit) {
    const identifier = session.user.email;
    result = await ratelimit.limit(identifier!);
    // res.setHeader("X-RateLimit-Limit", result.limit);
    // res.setHeader("X-RateLimit-Remaining", result.remaining);

    // Calcualte the remaining time until generations are reset
    const diff = Math.abs(
      new Date(result.reset).getTime() - new Date().getTime()
    );
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor(diff / 1000 / 60) - hours * 60;

    if (!result.success) {
      return NextResponse.json(
        `Your generations will renew in ${hours} hours and ${minutes} minutes. Email cameron@9d8.dev if you have any questions.`,
        {
          status: 429,
        }
      );
    }
  }

  const { prompt } = await request.json();

  /* -----------------------------------------------------------------------------
    Output schema: 
    {
    "type": "array",
    "items": {
        "type": "string",
        "format": "uri"
    },
    "title": "Output"
    }
  ----------------------------------------------------------------------------- */
  try {
    const output = await replicate.run(
      // This is the ID of the replicate model you are running
      "doriandarko/sdxl-hiroshinagai:563a66acc0b39e5308e8372bed42504731b7fec3bc21f2fcbea413398690f3ec",
      {
        // change all these options to affect the input parameters
        input: {
          prompt: "In the style of HISGH. " + prompt,
          negative_prompt:
            "Gothic, Medieval, Abstract, Futuristic, Rustic, Victorian, Graffiti, Fantasy, Horror, Industrial, Cubism, Impressionism, Surrealism, Baroque, Renaissance, Expressionism, Pop-art, Dystopian, Steampunk, Cyberpunk, Ugly, Bad proportion, Distorted, Cluttered, Chaotic, Mismatched, Overcrowded, Imbalanced, Inharmonious, Disproportionate, Unpleasant, Grungy, Messy, Unrefined, Crude, Grotesque, Disarray, Jumbled, Haphazard, Unsymmetrical",
          width: 1024,
          height: 1024,
          num_outputs: 1,
          scheduler: "K_EULER",
          num_inference_steps: 50,
          guidance_scale: 7.5,
          prompt_strength: 0.8,
          refine: "no_refiner",
          high_noise_frac: 0.8,
          apply_watermark: true,
          lora_scale: 0.6,
        },
      }
    );

    return NextResponse.json(output, {
      // @ts-ignore
      headers: {
        "X-RateLimit-Limit": result?.limit,
        "X-RateLimit-Remaining": result?.remaining,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      "An error occurred. Check server logs for more info.",
      { status: 500 }
    );
  }
}
