import { BreadCrumbs } from "@/components/breadCrumbs";
import { SearchInput } from "@/components/searchInput";

export default function BooksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col px-10">
      <BreadCrumbs />
      <SearchInput />
      <div>{children}</div>
    </div>
  );
}
