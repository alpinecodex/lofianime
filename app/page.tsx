import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container divide-y">
      <section className="mt-6 py-4">
        <div className="space-y-1">
          <h1 className="text-xl font-bold">NextJS Replicate Template</h1>
          <p className="text-slate-400">
            Quickly get your AI application off the ground with replicate and
            NextJS.
          </p>
        </div>
      </section>
      <section className="mt-6 py-4">
        <div className="space-y-1">
          <h2 className="font-bold uppercase">How it works</h2>
          <p className="text-slate-400 max-w-[600px]">
            This is a template for a simple AI-focused web app that uses a
            Replicate model, Next-Auth Google authentication, Upstash Rate
            Limiting, PlanetScale MySQL Database, and ShadcnUI.
          </p>
        </div>
        <Button asChild className="mt-6">
          <Link href="/create">Try it out</Link>
        </Button>
      </section>
    </main>
  );
}
