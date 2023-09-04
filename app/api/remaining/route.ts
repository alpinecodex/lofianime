import redis from "@/lib/redis";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session || !session.user) {
    return NextResponse.json("Not authenticated", { status: 500 });
  }

  // use identifier to get how many generations the user has left for the 24 hour period
  const identifier = session?.user?.email as string | undefined;
  const windowDuration = 24 * 60 * 60 * 1000;
  const bucket = Math.floor(Date.now() / windowDuration);

  const usedGenerations =
    (await redis?.get(`@upstash/ratelimit:${identifier!}:${bucket}`)) || 0;

  const remainingGenerations = 5 - Number(usedGenerations);

  return NextResponse.json({ remainingGenerations });
}
