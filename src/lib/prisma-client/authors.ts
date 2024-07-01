import { PrismaClient } from "@prisma/client";

export class Authors {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  getAll(query: string = "") {
    const searchQuery = query.split(" ").length > 1 ? `'${query}'` : query;
    return this.client.author.findMany({
      where: {
        OR: [
          {
            name: { contains: query, mode: "insensitive" },
          },
          {
            name: { search: searchQuery, mode: "insensitive" },
          },
          {
            bio: { search: searchQuery, mode: "insensitive" },
          },
        ],
      },
    });
  }

  get(id: number) {
    return this.client.author.findUnique({ where: { id } });
  }
}
