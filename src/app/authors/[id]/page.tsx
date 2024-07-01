import { BookRow } from "@/components/list/BookRow";
import { useUserId } from "@/hooks/useUserId";
import { authors, books } from "@/lib/prisma-client";
import { generateAuthorSlug, getCurrentDateHumanReadable } from "@/util";

export async function generateStaticParams() {
  const authorData = await authors.getAll();

  return authorData.map((author) => ({
    slug: generateAuthorSlug(author),
  }));
}

export const revalidate = 3600;

export default async function Author({ params }: { params: { id: string } }) {
  let authorId = -1;
  try {
    authorId = parseInt(params.id.split("-")[0]);
  } catch (e: any) {
    throw Error("404 - Author not found.");
  }

  const author = await authors.get(authorId);

  const userId = await useUserId();
  const booksData = await books.getAllByAuthor(authorId, userId);

  if (!author) {
    throw Error("404 - Author not found.");
  }

  return (
    <div className="flex flex-col py-5 px-10 space-y-10">
      <div className="flex flex-col py-2 space-y-3">
        <h2 className="text-3xl font-bold">{author.name}</h2>
        {author.birthdate && (
          <p>Born on {getCurrentDateHumanReadable(author.birthdate)}</p>
        )}
      </div>
      <p>{author.bio}</p>

      <div className="flex flex-col space-y-3">
        <h3 className="text-xl font-bold">Books written:</h3>
        {booksData.map((book) => (
          <BookRow book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}
