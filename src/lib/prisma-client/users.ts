import { PrismaClient } from "@prisma/client";

export class Users {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  createUser(email: string, passwordHash: string) {
    return this.client.user.create({
      data: { email: email, password_hash: passwordHash },
    });
  }

  getUser(email: string) {
    return this.client.user.findUnique({
      where: { email },
    });
  }
}
