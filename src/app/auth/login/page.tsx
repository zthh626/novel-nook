import { AuthForm } from "@/components/authForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col space-y-2 h-full">
      <h2 className="text-2xl font-bold">Login</h2>
      <AuthForm actionType={"login"} submitLabel="Login" />
      <Link
        className="self-end p-5 text-blue-500 hover:underline hover:blue-600"
        href="/auth/signup"
      >
        <p>Don&apos;t have an account?</p>
      </Link>
    </div>
  );
}
