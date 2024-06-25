import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col py-10 px-5 mt-16 w-full bg-gray-100">
      <Link href="/" className="py-2 px-5 text-2xl font-bold">
        NovelNook
      </Link>
    </footer>
  );
}
