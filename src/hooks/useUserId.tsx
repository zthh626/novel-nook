"use server";

import { verifyJWT } from "@/lib/auth";
import { cookies } from "next/headers";

export async function useUserId() {
  const session = cookies().get("session");
  const { userId } = session?.value
    ? await verifyJWT(session.value)
    : { userId: undefined };

  return userId;
}
