import PromptForm from "@/components/prompt-form";
import SoundcloudHeader from "@/components/soundcloud-header";

export default function Create() {
  return (
    <>
      <SoundcloudHeader />
      <main className="flex min-h-screen flex-col container divide-y">
        <PromptForm />
      </main>
    </>
  );
}
