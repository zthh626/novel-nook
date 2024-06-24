import { PrismaClient } from "@prisma/client";

class Books {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  getAll() {
    return this.client.book.findMany({});
  }
}

export default Books;
