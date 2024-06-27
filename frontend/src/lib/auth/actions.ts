"use server";

import { createJWT, verifyPassword } from ".";
import { users } from "../prisma-client";

export async function login(_prevState: any, formData: FormData) {
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  console.log(formData);

  if (!email || !password) {
    return { message: "Email and password are required.", token: null };
  }

  const user = await users.getUser(email);

  if (!user) {
    return { message: "User not found.", token: null };
  }

  if (!(await verifyPassword(password, user.password_hash))) {
    return { message: "Wrong password.", token: null };
  }

  const token = await createJWT({ userId: user.id });

  return { message: "", token };
}

export async function signup(_prevState: any, formData: FormData) {
  return { message: "test", token: "" };
}
