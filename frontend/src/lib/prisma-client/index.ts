import { PrismaClient } from "@prisma/client";
import Books from "./books";

const prisma = new PrismaClient();

export const books = new Books(prisma);
