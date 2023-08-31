import redis from "@/lib/redis";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = (await getServerSession(authOptions)) as Session;
  if (!session || !session.user) {
    return NextResponse.json("Not authenticated", { status: 500 });
  }

  const identifier = session?.user?.email as string | undefined;
  const windowDuration = 24 * 60 * 60 * 1000;
  const bucket = Math.floor(Date.now() / windowDuration);

  const usedGenerations =
    (await redis?.get(`@upstash/ratelimit:${identifier!}:${bucket}`)) || 0;

  const resetDate = new Date();
  resetDate.setHours(19, 0, 0, 0);
  const diff = Math.abs(resetDate.getTime() - new Date().getTime());
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor(diff / 1000 / 60) - hours * 60;

  const remainingGenerations = 5 - Number(usedGenerations);

  return NextResponse.json({ remainingGenerations, hours, minutes });
}
