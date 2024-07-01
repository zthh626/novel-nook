import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "NovelNook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="text-gray-700" lang="en">
      <body className="flex overflow-x-hidden flex-col w-screen h-screen">
        <Header />
        <div className="w-full h-fit">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
