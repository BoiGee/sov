import Link from "next/link";
import { Scale } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/case-results", label: "Case Results" },
  { href: "/faq", label: "FAQ" },
  { href: "/locations", label: "Locations" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/attorney-advertising", label: "Attorney Advertising Disclaimer" },
];

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="theme-marketing flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 font-display text-xl tracking-wide">
            <Scale className="h-5 w-5 text-primary" aria-hidden />
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
          <p className="mb-6 max-w-2xl">
            Attorney Advertising. Prior results do not guarantee a similar
            outcome. This site is for general information only and does not
            constitute legal advice.
          </p>
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-6 text-xs">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            ))}
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
