import { PrismaClient } from "@prisma/client";

export class Users {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  getUser(email: string) {
    return this.client.user.findUnique({
      where: { email },
    });
  }
}
