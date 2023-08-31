import Image from "next/image";
import { Button } from "./ui/button";
import downloadPhoto from "@/lib/download-photo";

export default function ReplicateImage({
  url,
  setImage,
}: {
  url: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="space-y-4 mt-6">
      <Image
        src={url}
        alt="Generated AI Image"
        width={600}
        height={600}
        className="rounded-lg"
      />
      <p className="text-muted-foreground italic text-sm">
        *We do not store your images, so make sure to click download if you want
        to save it!
      </p>
      <div className="inline-flex gap-4">
        <Button variant="outline" onClick={() => setImage("")}>
          Create new image
        </Button>
        <Button onClick={() => downloadPhoto(url, "generated-image")}>
          Download
        </Button>
      </div>
    </div>
  );
}
