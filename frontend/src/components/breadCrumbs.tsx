"use client";

import { capitalizeFirstChar } from "@/util";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BreadCrumbs() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const separator = (
    <Image
      height={9}
      width={9}
      alt="Chevron Right"
      src="/icons/chevron-right.svg"
    />
  );

  return (
    // NOTE: put px-10 here so it could be in the base layout as well as hiding on splash
    <ul
      className={`${paths === "/" ? "hidden" : "flex"} flex-row px-10 items-center space-x-3 text-xl`}
    >
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      {pathNames.length > 0 && separator}
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const linkParts = link.split("-");
        if (linkParts.length > 1) {
          linkParts.splice(0, 1);
        }
        let title = decodeURIComponent(
          capitalizeFirstChar(linkParts.join(" ")),
        );

        return (
          <div key={index} className="flex overflow-hidden flex-row space-x-3">
            <li className={`${paths === href && "underline"}`}>
              <Link
                href={href}
                className="sm:max-w-7xl max-w-24 text-clip line-clamp-1"
              >
                {title}
              </Link>
            </li>
            {pathNames.length !== index + 1 && separator}
          </div>
        );
      })}
    </ul>
  );
}
