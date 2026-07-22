import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = { title: "Client Portal Login" };

export default function LoginPage() {
  return (
    <div className="theme-portal flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <Card className="w-full max-w-sm">
        <Link href="/" className="font-display text-lg">
          Sterling Vance <span className="text-primary">LLP</span>
        </Link>
        <h1 className="mt-6 font-display text-2xl">Client Portal Sign In</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Authentication (email/password and magic link) is wired up in
          Milestone 3.
        </p>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              disabled
              className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2.5 disabled:opacity-60"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              disabled
              className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-2.5 disabled:opacity-60"
            />
          </div>
          <Button type="submit" variant="primary" disabled className="w-full">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}
