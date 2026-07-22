import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="theme-marketing flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-display text-xl tracking-wide">
            Sterling Vance <span className="text-primary">LLP</span>
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
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
              className="rounded-sm border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Client Portal
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
          <p className="mb-4 max-w-2xl">
            Attorney Advertising. Prior results do not guarantee a similar
            outcome. This site is for general information only and does not
            constitute legal advice.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Use
            </Link>
            <Link href="/attorney-advertising" className="hover:text-foreground">
              Attorney Advertising Disclaimer
            </Link>
          </div>
          <p className="mt-6">
            &copy; {new Date().getFullYear()} Sterling Vance LLP. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
