import { routes } from "@/constants/routes";
import Link from "next/link";
import { NavLink } from "./navLink";
import { Button } from "./button";

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
      <div className="flex flex-row justify-end space-x-3 w-full">
        <Link href="/auth/login">
          <Button text="Login" theme="secondary" />
        </Link>
        <Link href="/auth/signup">
          <Button text="Signup" theme="primary" />
        </Link>
      </div>
    </header>
  );
}
