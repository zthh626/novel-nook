"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ name, href }: { name: string; href: string }) {
  const pathName = usePathname();
  const isActive = href === "/" ? pathName === href : pathName.includes(href);

  return (
    <Link
      className={classNames(
        isActive ? "underline font-semibold text-gray-900" : "text-gray-500",
        "font-medium hover:text-gray-900",
      )}
      href={href}
    >
      {name}
    </Link>
  );
}
