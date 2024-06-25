import { routes } from "@/constants/routes";
import Link from "next/link";
import { NavLink } from "./navLink";

export function Header() {
  return (
    <header className="flex flex-row items-center py-5 px-5 space-x-10">
      <Link href="/" className="py-2 px-5 text-2xl font-bold">
        NovelNook
      </Link>
      <div className="flex flex-row space-x-8">
        {routes.map((route, idx) => (
          <NavLink name={route.name} href={route.href} key={idx} />
        ))}
      </div>
    </header>
  );
}
