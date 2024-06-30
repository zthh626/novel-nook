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

  getAllWithAuthorNameAndFavorite(userId: number = -1) {
    return this.client.book.findMany({
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
}
