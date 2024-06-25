import { Book } from "@prisma/client";
import Link from "next/link";
import { ImageLoader } from "./imageLoader";
import { generateBookSlug } from "@/util";

interface BookWithAuthor extends Book {
  author: { name: string };
}

export function BookRow({ book }: { book: BookWithAuthor }) {
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
        <div className="flex flex-col justify-center space-y-2">
          <div>
            <h2 className="text-lg group-hover:font-semibold group-hover:underline">
              {book.title}
            </h2>
            <h3 className="text-md">{book.author.name}</h3>
          </div>
          <p className="max-w-xs text-sm md:max-w-md lg:max-w-lg line-clamp-2 text-ellipsis">
            {book?.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
