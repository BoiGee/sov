import Link from "next/link";
import { Scale } from "lucide-react";
import { auth } from "@/lib/auth";
import { signOutAction } from "@/lib/auth-actions";

const navLinks = [
  { href: "/firm/matters", label: "Matters" },
  { href: "/firm/leads", label: "Leads" },
  { href: "/firm/admin", label: "Admin" },
];

export default async function FirmWorkspaceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  return (
    <div className="theme-portal flex min-h-screen flex-col bg-background text-foreground">
      <div className="bg-warning/15 px-6 py-2 text-center text-xs text-warning">
        Demo login — ownership checks on real matters land in Milestone 3.
      </div>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/firm/matters" className="flex items-center gap-2 font-display text-lg">
            <Scale className="h-4 w-4 text-primary" aria-hidden />
            Sterling Vance <span className="text-primary">LLP</span>{" "}
            <span className="text-xs text-muted-foreground">Workspace</span>
          </Link>
          <nav aria-label="Firm workspace" className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            {session?.user?.name && (
              <span className="text-xs text-muted-foreground">
                Signed in as {session.user.name} ({session.user.role})
              </span>
            )}
            <form action={signOutAction}>
              <button
                type="submit"
                className="rounded-sm border border-border px-4 py-2 hover:bg-card"
              >
                Sign Out
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {children}
      </main>
    </div>
  );
}
