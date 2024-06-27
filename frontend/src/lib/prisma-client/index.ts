import { PrismaClient } from "@prisma/client";
import Books from "./books";
import { Users } from "./users";

const prisma = new PrismaClient();

export const books = new Books(prisma);
export const users = new Users(prisma);
