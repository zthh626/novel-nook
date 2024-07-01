import { AuthForm } from "@/components/AuthForm";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex flex-col space-y-2 h-full">
      <h2 className="text-2xl font-bold">Signup</h2>
      <AuthForm actionType={"signup"} submitLabel="Signup" />
      <Link
        className="self-end p-5 text-blue-500 hover:underline hover:blue-600"
        href="/auth/login"
      >
        <p>Already have an account?</p>
      </Link>
    </div>
  );
}
