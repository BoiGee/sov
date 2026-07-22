import Link from "next/link";
import { Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LoginForm } from "./login-form";

export const metadata = { title: "Client Portal Login" };

type Props = {
  searchParams: Promise<{ error?: string; callbackUrl?: string }>;
};

export default async function LoginPage({ searchParams }: Props) {
  const params = await searchParams;
  const callbackUrl = params.callbackUrl?.startsWith("/")
    ? params.callbackUrl
    : "/dashboard";

  return (
    <div className="theme-portal flex min-h-screen items-center justify-center bg-background px-6 py-12 text-foreground">
      <Card className="w-full max-w-sm">
        <Link href="/" className="flex items-center gap-2 font-display text-lg">
          <Scale className="h-4 w-4 text-primary" aria-hidden />
          Sterling Vance <span className="text-primary">LLP</span>
        </Link>
        <h1 className="mt-6 font-display text-2xl">Sign In</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Demo login — pick an account below or type its credentials. Real
          accounts land in Milestone 3.
        </p>
        {params.error && (
          <p
            role="alert"
            className="mt-4 rounded-sm border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive"
          >
            Invalid email or password.
          </p>
        )}
        <LoginForm callbackUrl={callbackUrl} />
      </Card>
    </div>
  );
}
