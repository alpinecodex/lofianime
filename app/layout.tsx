import "./globals.css";
import type { Metadata } from "next";

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
      <body className="pt-10">{children}</body>
    </html>
  );
}
