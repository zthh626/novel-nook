import { ImageLoader } from "@/components/imageLoader";
import { books } from "@/lib/prisma-client";
import {
  generateAuthorSlug,
  generateBookSlug,
  getCurrentDateHumanReadable,
} from "@/util";
import Link from "next/link";

export async function generateStaticParams() {
  const booksData = await books.getAll();

  return booksData.map((book) => ({
    slug: generateBookSlug(book),
  }));
}

export const revalidate = 3600;

export default async function Book({ params }: { params: { id: string } }) {
  let bookId = -1;
  try {
    bookId = parseInt(params.id.split("-")[0]);
  } catch (e: any) {
    throw Error("404 - Book not found.");
  }

  const book = await books.getBookAndAuthor(bookId);

  if (!book) {
    throw Error("404 - Book not found.");
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col space-y-5">
        <div className="self-center py-10 bg-gray-200 border h-fit w-fit">
          <ImageLoader
            alt={`${book.title} - Cover`}
            src={book.image_url}
            classes={"h-[20rem] w-[20rem] bg-gray-200"}
          />
        </div>
        {book.published_date && (
          <p className="hidden lg:block">
            Published on {getCurrentDateHumanReadable(book.published_date)}
          </p>
        )}
      </div>
      <div className="py-5 px-10 space-y-3">
        <h2 className="text-3xl font-bold">{book.title}</h2>
        <Link href={`/authors/${generateAuthorSlug(book.author)}`}>
          <h3 className="text-xl font-semibold hover:underline hover:cursor-pointer">
            {book.author.name}
          </h3>
        </Link>
        {book.published_date && (
          <p className="block pb-5 lg:hidden text-end">
            Published on {getCurrentDateHumanReadable(book.published_date)}
          </p>
        )}
        <p>{book.description}</p>
        <p className="text-end">ISBN: {book.isbn}</p>
      </div>
    </div>
  );
}
