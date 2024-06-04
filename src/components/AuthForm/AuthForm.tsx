import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import styles from "./AuthForm.module.css";

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
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          {mode === "signIn" ? "Sign In" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          {mode === "signUp" && (
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={styles.input}
              />
            </div>
          )}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              {mode === "signIn" ? "Sign In" : "Sign Up"}
            </button>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </form>
        {mode === "signIn" ? (
          <p className={styles.link}>
            Don&apos;t have an account?{" "}
            <Link href="/signup" passHref>
              Sign up for free
            </Link>
          </p>
        ) : (
          <p className={styles.link}>
            Already have an account?{" "}
            <Link href="/signin" passHref>
              Sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
