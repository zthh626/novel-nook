"use server";

import { books } from "../prisma-client";

export async function bookSearch(query: string) {
  return books.quickSearch(query);
}
