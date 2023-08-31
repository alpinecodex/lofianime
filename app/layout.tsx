import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "NextJS | Replicate",
  description: "Template by Alpine Codex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-10">
        <Header />
        {children}
      </body>
    </html>
  );
}
