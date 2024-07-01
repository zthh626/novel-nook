"use client";

import { useFormState } from "react-dom";
import { Button } from "./button";
import { login, signup } from "@/lib/auth/actions";
import { useEffect } from "react";
import { Input } from "./input";

const fields = [
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
];

const initialState = {
  message: "",
};

export function AuthForm({
  actionType,
  submitLabel,
}: {
  actionType: "login" | "signup";
  submitLabel: string;
}) {
  const action = actionType === "login" ? login : signup;
  const [state, formAction] = useFormState(action, initialState);

  useEffect(() => {
    if (state.message === "success") {
      window.location.href = "/favorites";
    }
  }, [state.message]);

  return (
    <form className="flex flex-col space-y-5" action={formAction}>
      {fields.map((field) => {
        return (
          <div className="flex flex-col" key={field.type}>
            <label htmlFor={field.type}>{field.label}</label>
            <Input
              type={field.type}
              id={field.type}
              name={field.type}
              required
            />
          </div>
        );
      })}
      <p className="self-end font-bold text-red-500" aria-live="polite">
        {state?.message === "success" ? "" : state?.message}
      </p>
      <Button text={submitLabel} />
    </form>
  );
}
