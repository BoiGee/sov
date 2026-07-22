import Link from "next/link";

const navLinks = [
  { href: "/firm/matters", label: "Matters" },
  { href: "/firm/leads", label: "Leads" },
  { href: "/firm/admin", label: "Admin" },
];

export default function FirmWorkspaceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="theme-portal flex min-h-screen flex-col bg-background text-foreground">
      <div className="bg-warning/15 px-6 py-2 text-center text-xs text-warning">
        Preview only — route protection and real data land in Milestone 3.
      </div>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/firm/matters" className="font-display text-lg">
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
            <Link
              href="/login"
              className="rounded-sm border border-border px-4 py-2 hover:bg-card"
            >
              Sign Out
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {children}
      </main>
    </div>
  );
}
