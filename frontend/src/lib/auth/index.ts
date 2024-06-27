"use server";

import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY ?? "";

if (!secretKey) {
  throw Error("Secret key not found.");
}

export async function createJWT(payload: { userId: number }) {
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
}

export async function verifyJWT(token: string) {
  return jwt.verify(token, secretKey);
}

function generateSalt(length = 16) {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Buffer.from(array).toString("hex");
}

async function hashPasswordWithSalt(password: string, salt: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Buffer.from(hash).toString("hex");
}

export async function hashPassword(password: string) {
  const salt = generateSalt();
  const hash = await hashPasswordWithSalt(password, salt);
  return `${hash}.${salt}`;
}

export async function verifyPassword(password: string, hash: string) {
  const [_, salt] = hash.split(".");
  const hashedPassword = await hashPasswordWithSalt(password, salt);
  return hashedPassword === hash;
}
