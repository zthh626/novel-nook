import { BookWithAuthor } from "@/lib/interfaces";
import { generateBookSlug } from "@/util";
import Link from "next/link";
import { ImageLoader } from "../base/ImageLoader";
import { FavoriteToggleButton } from "../FavoriteToggleButton";

export function BookRow({
  book,
  updatePaths,
}: {
  book: BookWithAuthor;
  updatePaths?: string[];
}) {
  return (
    <Link href={`/books/${generateBookSlug(book)}`}>
      <div className="flex flex-row py-5 px-10 space-x-5 w-full bg-gray-100 rounded-xl hover:bg-gray-200 group">
        {book.image_url && (
          <ImageLoader
            src={book.image_url}
            alt={`${book.title} - Cover`}
            classes="h-24 w-14"
          />
        )}
        <div className="flex flex-col flex-grow justify-center space-y-2">
          <div>
            <h2 className="text-lg group-hover:font-semibold group-hover:underline">
              {book.title}
            </h2>
            <h3 className="text-md">{book.author.name}</h3>
          </div>
          <p className="max-w-xs text-sm md:max-w-xl line-clamp-2 text-ellipsis">
            {book?.description}
          </p>
        </div>
        <FavoriteToggleButton
          bookId={book.id}
          favorite={book.Favourite}
          updatePaths={updatePaths}
        />
      </div>
    </Link>
  );
}
