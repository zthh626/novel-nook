"use server";

import { cookies } from "next/headers";
import { createJWT, hashPassword, verifyPassword } from ".";
import { users } from "../prisma-client";

export async function login(_prevState: any, formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  if (!email || !password) {
    return { message: "Email and password are required." };
  }

  const user = await users.getUser(email);

  if (!user) {
    return { message: "User not found." };
  }

  if (!(await verifyPassword(password, user.password_hash))) {
    return { message: "Wrong password." };
  }

  const { token, expires } = await createJWT({ userId: user.id });
  cookies().set("session", token, { expires });

  return { message: "success" };
}

export async function signup(_prevState: any, formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  if (!email || !password) {
    return { message: "Email and password are required." };
  }

  let user = await users.getUser(email);

  if (user) {
    return { message: "User already exists." };
  }

  user = await users.createUser(email, await hashPassword(password));

  const { token, expires } = await createJWT({ userId: user.id });
  cookies().set("session", token, { expires });

  return { message: "success" };
}

export async function signout() {
  return cookies().delete("session");
}
