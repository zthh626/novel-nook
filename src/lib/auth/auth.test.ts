import { createJWT, hashPassword, verifyJWT, verifyPassword } from ".";

describe("JWT Functions", () => {
  it("should create a JWT token", async () => {
    const payload = { userId: 1 };
    const { token, expires } = await createJWT(payload);

    expect(token).toBeDefined();
    expect(expires).toBeInstanceOf(Date);
  });

  it("should verify a JWT token", async () => {
    const payload = { userId: 1 };
    const { token } = await createJWT(payload);
    const verifiedPayload = await verifyJWT(token);

    expect(verifiedPayload).toMatchObject(payload);
  });

  it("should throw error for invalid token", async () => {
    await expect(verifyJWT("invalid.token.here")).rejects.toThrow();
  });
});

describe("Password Functions", () => {
  it("should hash a password", async () => {
    const password = "myStrongPassword";
    const hash = await hashPassword(password);

    expect(hash).toContain(".");
  });

  it("should verify a password", async () => {
    const password = "myStrongPassword";
    const hash = await hashPassword(password);
    const isValid = await verifyPassword(password, hash);

    expect(isValid).toBe(true);
  });

  it("should not verify a wrong password", async () => {
    const password = "myStrongPassword";
    const hash = await hashPassword(password);
    const isValid = await verifyPassword("wrongPassword", hash);

    expect(isValid).toBe(false);
  });
});
