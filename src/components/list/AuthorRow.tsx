import { generateAuthorSlug } from "@/util";
import { Author } from "@prisma/client";
import Link from "next/link";

export function AuthorRow({ author }: { author: Author }) {
  return (
    <Link href={`/authors/${generateAuthorSlug(author)}`}>
      <div className="flex flex-row py-5 px-10 space-x-5 w-full bg-gray-100 rounded-xl hover:bg-gray-200 group">
        <div className="flex flex-col flex-grow justify-center space-y-2">
          <div>
            <h2 className="text-lg group-hover:font-semibold group-hover:underline">
              {author.name}
            </h2>
          </div>
          <p className="text-sm line-clamp-2 text-ellipsis">{author.bio}</p>
        </div>
      </div>
    </Link>
  );
}
