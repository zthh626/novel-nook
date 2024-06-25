import { BookRow } from "@/components/bookRow";
import { books } from "@/lib/prisma-client";

export default async function Books() {
  const booksData = await books.getAllWithAuthorName();

  return (
    <div className="flex flex-col space-y-2">
      {booksData.map((book) => (
        <BookRow book={book} key={book.id} />
      ))}
    </div>
  );
}
