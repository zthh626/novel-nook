import { PrismaClient } from "@prisma/client";
import { Books } from "./books";
import { Users } from "./users";
import { Favorites } from "./favorites";
import { Authors } from "./authors";

const prisma = new PrismaClient();

export const authors = new Authors(prisma);
export const books = new Books(prisma);
export const users = new Users(prisma);
export const favorites = new Favorites(prisma);
