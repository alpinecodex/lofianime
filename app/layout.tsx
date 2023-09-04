import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Lofi Anime",
  description: "Generate Lofi Anime-inspired Landscapes with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-10">
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
