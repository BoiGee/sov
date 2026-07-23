import Link from "next/link";
import { Scale } from "lucide-react";
import { auth } from "@/lib/auth";
import { signOutAction } from "@/lib/auth-actions";
import { WorkspaceNav } from "@/components/portal/workspace-nav";
import { UserBadge } from "@/components/portal/user-badge";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/settings", label: "Settings" },
];

export default async function PortalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  return (
    <div className="theme-portal flex min-h-screen flex-col bg-background text-foreground">
      <div className="accent-rule" aria-hidden />
      <header className="border-b border-border bg-card/60 shadow-(--shadow-card) backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/dashboard" className="flex items-center gap-2.5 font-display text-lg tracking-wide">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
              <Scale className="h-4 w-4 text-primary" aria-hidden />
            </span>
            Sovereign Apex <span className="text-primary">Legal</span>
          </Link>
          <div className="flex items-center gap-6">
            <WorkspaceNav links={navLinks} />
            {session?.user?.name && (
              <UserBadge name={session.user.name} role="client" />
            )}
            <form action={signOutAction}>
              <Button type="submit" variant="secondary">
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {children}
      </main>
    </div>
  );
}
