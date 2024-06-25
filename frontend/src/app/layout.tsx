import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "NovelNook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-screen h-screen">
        <Header />
        <div className="w-full h-full">{children}</div>
      </body>
    </html>
  );
}
