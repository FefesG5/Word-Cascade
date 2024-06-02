// components/AuthForm.tsx
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

interface AuthFormProps {
  mode: "signIn" | "signUp";
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const { signUp, signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "signUp" && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      if (mode === "signUp") {
        await signUp(email, password);
        alert("Sign up successful");
      } else {
        await signIn(email, password);
        console.log("You are successfully signed in");
      }

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError("An unknown error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === "signIn" ? "Sign In" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {mode === "signUp" && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {mode === "signIn" ? "Sign In" : "Sign Up"}
            </button>
          </div>
          {error && (
            <p className="mt-2 text-center text-sm text-red-600">{error}</p>
          )}
        </form>
        {mode === "signIn" ? (
          <p className="mt-2 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" passHref>
              <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">Sign up for free</span>
            </Link>
          </p>
        ) : (
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" passHref>
              <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">Sign in</span>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
