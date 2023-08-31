import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || "",
});

export async function POST(request: Request) {
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

    return NextResponse.json(output);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      "An error occurred. Check server logs for more info.",
      { status: 500 }
    );
  }
}
