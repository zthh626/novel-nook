import { BookRow } from "@/components/bookRow";
import { useUserId } from "@/hooks/useUserId";
import { books } from "@/lib/prisma-client";

export default async function Books() {
  const userId = await useUserId();
  const booksData = await books.getAllWithAuthorNameAndFavorite(userId);

  return (
    <div className="flex flex-col space-y-2">
      {booksData.map((book) => (
        <BookRow book={book} key={book.id} updatePaths={["/favorites"]} />
      ))}
    </div>
  );
}
