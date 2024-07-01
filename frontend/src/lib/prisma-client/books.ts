import { PrismaClient } from "@prisma/client";

export class Books {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  getBookAndAuthor(id: number, userId: number = -1) {
    return this.client.book.findUnique({
      where: { id },
      include: {
        author: true,
        Favourite: {
          where: { user_id: userId },
          take: 1,
        },
      },
    });
  }

  getAll() {
    return this.client.book.findMany();
  }

  getAllByAuthor(authorId: number, userId: number = -1) {
    return this.client.book.findMany({
      where: {
        author_id: authorId,
      },
      include: {
        author: { select: { name: true } },
        Favourite: {
          where: { user_id: userId },
          take: 1,
        },
      },
    });
  }

  getAllWithAuthorNameAndFavorite(query: string = "", userId: number = -1) {
    const searchQuery = query.split(" ").length > 1 ? `'${query}'` : query;
    return this.client.book.findMany({
      where: {
        OR: [
          {
            title: { contains: query, mode: "insensitive" },
          },
          {
            title: { search: searchQuery, mode: "insensitive" },
          },
          {
            description: { search: searchQuery, mode: "insensitive" },
          },
        ],
      },
      include: {
        author: { select: { name: true } },
        Favourite: {
          where: { user_id: userId },
          take: 1,
        },
      },
    });
  }

  getWithAuthorName(id: number) {
    return this.client.book.findUnique({
      where: { id },
      include: { author: { select: { name: true } } },
    });
  }

  quickSearch(query: string) {
    return this.client.book.findMany({
      where: {
        OR: [
          {
            title: { contains: query, mode: "insensitive" },
          },
          {
            title: { search: query, mode: "insensitive" },
          },
          {
            description: { search: query, mode: "insensitive" },
          },
        ],
      },
      include: { author: { select: { name: true } } },
      take: 5,
    });
  }
}
