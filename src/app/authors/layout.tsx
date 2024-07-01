import { SearchInput } from "@/components/SearchInput";
import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";

export default function AuthorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col px-10 space-y-8 h-full">
      <div className="flex flex-col space-y-2">
        <BreadCrumbs />
        <div className="self-end w-full max-w-lg">
          <SearchInput searchType="author" />
        </div>
      </div>
      <div className="flex flex-col m-auto w-full max-w-5xl h-full">
        {children}
      </div>
    </div>
  );
}
