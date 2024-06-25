import { PrismaClient } from "@prisma/client";

class Books {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  getBookAndAuthor(id: number) {
    return this.client.book.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  getAll() {
    return this.client.book.findMany();
  }

  getAllWithAuthorName() {
    return this.client.book.findMany({
      include: { author: { select: { name: true } } },
    });
  }

  getWithAuthorName(id: number) {
    return this.client.book.findUnique({
      where: { id },
      include: { author: { select: { name: true } } },
    });
  }
}

export default Books;
