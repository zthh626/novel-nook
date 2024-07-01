"use client";

import { useState } from "react";
import { Input } from "./input";
import { bookSearch } from "@/lib/search/actions";
import { Button } from "./button";
import { Book } from "@prisma/client";
import { redirect, usePathname } from "next/navigation";

export function SearchInput({ searchType }: { searchType: "book" | "author" }) {
  const path = usePathname();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    (Book & { author: { name: string } })[]
  >([]);
  const placeholder = `Find a ${searchType}...`;

  return (
    <form
      action={() => {
        redirect(
          `${path === "/" ? "/books/" : path}?search=${encodeURIComponent(query)}`,
        );
      }}
      className="flex flex-row space-x-3 w-full"
    >
      <Input
        onChange={(e) => {
          setQuery(e.currentTarget.value);
          // bookSearch(query).then((val) => {
          //   setSearchResults(val);
          // });
        }}
        value={query}
        placeholder={placeholder}
        type="search"
      />
      <Button text="Search" />
    </form>
  );
}
