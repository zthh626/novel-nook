"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyJWT } from "../auth";
import { favorites } from "../prisma-client";
import { revalidatePath } from "next/cache";

export async function getFavorite(bookId: number) {
  const session = cookies().get("session");

  if (!session) {
    redirect("/auth/login");
  }

  const { userId } = await verifyJWT(session.value);

  if (!userId) {
    redirect("/auth/login");
  }

  const favorite = await favorites.get(bookId, userId);

  return favorite;
}

export async function toggleFavorite(
  bookId: number,
  updatePaths: string[] = [],
) {
  const session = cookies().get("session");

  if (!session) {
    redirect("/auth/login");
  }

  const { userId } = await verifyJWT(session.value);

  if (!userId) {
    redirect("/auth/login");
  }

  const favorite = await favorites.get(bookId, userId);

  if (favorite) {
    await favorites.delete(favorite.id);
  } else {
    await favorites.create(bookId, userId);
  }

  for (let i = 0; i < updatePaths?.length ?? 0; i++) {
    const updatePath = updatePaths[i];
    revalidatePath(updatePath);
  }

  return favorite !== null ? false : true;
}
