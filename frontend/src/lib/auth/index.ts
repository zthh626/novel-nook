"use server";

import { jwtVerify, SignJWT } from "jose";

const secretKey = process.env.SECRET_KEY ?? "";
const key = new TextEncoder().encode(secretKey);

if (!secretKey) {
  throw Error("Secret key not found.");
}

export async function createJWT(payload: { userId: number }) {
  const expires = new Date();
  expires.setHours(expires.getHours() + 1);

  return {
    token: await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1 hour from now")
      .sign(key),
    expires,
  };
}

export async function verifyJWT(token: string) {
  const { payload } = await jwtVerify(token, key, {
    algorithms: ["HS256"],
  });
  return payload;
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
  const [_hash, salt] = hash.split(".");
  const hashedPassword = await hashPasswordWithSalt(password, salt);
  return hashedPassword === _hash;
}
