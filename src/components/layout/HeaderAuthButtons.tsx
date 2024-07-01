"use client";

import { verifyJWT } from "@/lib/auth";
import { signout } from "@/lib/auth/actions";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../base/Button";

export function HeaderAuthButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const session = getCookie("session");
      if (!session) return;
      const payload = await verifyJWT(session);

      setIsLoggedIn(payload !== undefined);
    };
    checkSession();
  }, [setIsLoggedIn]);

  return (
    <div className="flex flex-row justify-end w-full">
      {isLoggedIn ? (
        <Button
          onClick={() => {
            signout().then(() => {
              window.location.href = "/";
            });
          }}
          text="Signout"
          theme="secondary"
        />
      ) : (
        <div className="flex flex-row justify-end space-x-3 w-full">
          <Link href="/auth/login">
            <Button text="Login" theme="secondary" />
          </Link>
          <Link href="/auth/signup">
            <Button text="Signup" theme="primary" />
          </Link>
        </div>
      )}
    </div>
  );
}
