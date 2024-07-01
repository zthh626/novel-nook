import { Book, Favourite } from "@prisma/client";

export interface BookWithAuthor extends Book {
  author: { name: string };
  Favourite: Favourite[];
}
