import PromptForm from "@/components/prompt-form";
import SoundcloudHeader from "@/components/soundcloud-header";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignIn from "@/components/sign-in";

export default async function Create() {
  const session = (await getServerSession(authOptions)) as Session;
  return (
    <>
      <SoundcloudHeader />
      <main className="flex min-h-screen flex-col container items-center">
        {!session ? (
          <section className="py-8 flex flex-col items-center">
            <div className="space-y-1">
              <h2 className="font-bold text-center">Sign up now, it's free!</h2>
            </div>
            <div className="mt-6">
              <SignIn />
            </div>
          </section>
        ) : (
          <PromptForm />
        )}
      </main>
    </>
  );
}
