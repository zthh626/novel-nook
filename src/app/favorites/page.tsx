import { Button } from "@/components/base/Button";
import { BookRow } from "@/components/list/BookRow";
import { BreadCrumbs } from "@/components/navigation/BreadCrumbs";
import { useUserId } from "@/hooks/useUserId";
import { favorites } from "@/lib/prisma-client";
import Link from "next/link";

export default async function Favorites() {
  const userId = await useUserId();
  const userFavorites = userId ? await favorites.getAllBooks(userId) : [];

  return (
    <div className="flex flex-col px-10 space-y-8 h-full">
      <BreadCrumbs />

      {userFavorites.length > 0 ? (
        <div className="flex flex-col space-y-2">
          {userFavorites.map((book) => (
            <BookRow book={book} key={book.id} updatePaths={["/books"]} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center my-20 mx-10 w-full">
          <Link
            href="/books"
            className="p-5 space-y-8 max-w-xl bg-gray-100 rounded-xl border"
          >
            <div>
              <h2 className="text-xl font-bold text-center">
                You don&apos;t have any favorites.
              </h2>
              <p className="mt-2 text-center">
                Click on a star to add a book to your favorites!
              </p>
            </div>
            <div className="flex flex-row justify-end">
              <Button text="Go to books" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
