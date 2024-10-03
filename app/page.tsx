import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";

const images = [
  {
    link: "/images/pic1.png",
    alt: "Landscape Image in the style of Hiroshi Nagai",
  },
  {
    link: "/images/pic2.png",
    alt: "Landscape Image in the style of Hiroshi Nagai",
  },
  {
    link: "/images/pic3.png",
    alt: "Landscape Image in the style of Hiroshi Nagai",
  },
  {
    link: "/images/pic4.png",
    alt: "Landscape Image in the style of Hiroshi Nagai",
  },
  {
    link: "/images/pic5.png",
    alt: "Landscape Image in the style of Hiroshi Nagai",
  },
  {
    link: "/images/pic6.png",
    alt: "Landscape Image in the style of Hiroshi Nagai",
  },
  {
    link: "/images/pic7.png",
    alt: "Landscape Image in the style of Hiroshi Nagai",
  },
  {
    link: "/images/pic8.png",
    alt: "Landscape Image in the style of Hiroshi Nagai",
  },
  {
    link: "/images/pic9.png",
    alt: "Landscape Image in the style of Hiroshi Nagai",
  },
];

export default async function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col container">
        <section className="py-8 border-b">
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-center">
              Lofi Anime is archived
            </h1>
          </div>
        </section>
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {images.map((image, index) => (
            <Image
              key={index}
              alt={image?.alt}
              src={image?.link}
              width={500}
              height={500}
            />
          ))}
        </section>
      </main>
    </>
  );
}
