import { PrismaClient } from "@prisma/client";

export class Favorites {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  create(bookId: number, userId: number) {
    return this.client.favourite.create({
      data: { book_id: bookId, user_id: userId },
    });
  }

  async getAllBooks(userId: number) {
    const favorites = await this.client.favourite.findMany({
      where: { user_id: userId },
      select: { id: true, book_id: true },
    });

    return this.client.book.findMany({
      where: { id: { in: favorites.map((fav) => fav.book_id) } },
      include: {
        author: { select: { name: true } },
        Favourite: {
          where: { user_id: userId },
          take: 1,
        },
      },
    });
  }

  get(bookId: number, userId: number) {
    return this.client.favourite.findFirst({
      where: { book_id: bookId, user_id: userId },
    });
  }

  delete(id: number) {
    return this.client.favourite.delete({
      where: { id },
    });
  }
}
