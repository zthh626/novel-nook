import { PrismaClient } from "@prisma/client";

class Books {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  getAllWithAuthorName() {
    return this.client.book.findMany({
      include: { author: { select: { name: true } } },
    });
  }
}

export default Books;
