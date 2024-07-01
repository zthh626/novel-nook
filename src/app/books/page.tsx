import { BookRow } from "@/components/list/BookRow";
import { useSearchParam } from "@/hooks/useSearchParam";
import { useUserId } from "@/hooks/useUserId";
import { books } from "@/lib/prisma-client";

export default async function Books({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const userId = await useUserId();
  const booksData = await books.getAllWithAuthorNameAndFavorite(
    useSearchParam(searchParams),
    userId,
  );

  return (
    <div className="flex flex-col space-y-2">
      {booksData.map((book) => (
        <BookRow book={book} key={book.id} updatePaths={["/favorites"]} />
      ))}
    </div>
  );
}
