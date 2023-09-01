import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SignIn from "@/components/sign-in";
import Header from "@/components/header";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

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
  const session = (await getServerSession(authOptions)) as Session;
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col container">
        <section className="py-8 border-b">
          <div className="space-y-1">
            <h1 className="text-xl font-bold text-center">
              Create Lofi Anime-Inspired Landscapes
            </h1>
          </div>
        </section>
        {!session && (
          <section className="py-8 flex flex-col items-center">
            <div className="space-y-1">
              <h2 className="font-bold text-center">Sign up now, it's free!</h2>
            </div>
            <div className="mt-6">
              <SignIn />
            </div>
          </section>
        )}
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
