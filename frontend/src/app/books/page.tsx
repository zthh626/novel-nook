import { BookRow } from "@/components/bookRow";
import { verifyJWT } from "@/lib/auth";
import { books } from "@/lib/prisma-client";
import { cookies } from "next/headers";

export default async function Books() {
  const session = cookies().get("session");
  const { userId } = session?.value
    ? await verifyJWT(session.value)
    : { userId: undefined };
  const booksData = await books.getAllWithAuthorNameAndFavorite(userId);

  return (
    <div className="flex flex-col space-y-2">
      {booksData.map((book) => (
        <BookRow book={book} key={book.id} updatePaths={["/favorites"]} />
      ))}
    </div>
  );
}
