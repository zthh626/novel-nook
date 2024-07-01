import { AuthorRow } from "@/components/authorRow";
import { useSearchParam } from "@/hooks/useSearchParam";
import { authors } from "@/lib/prisma-client";

export default async function Authors({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const authorsData = await authors.getAll(useSearchParam(searchParams));

  return (
    <div className="flex flex-col space-y-2">
      {authorsData.map((author) => (
        <AuthorRow author={author} key={author.id} />
      ))}
    </div>
  );
}
