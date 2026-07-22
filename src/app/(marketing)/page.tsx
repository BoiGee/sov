import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { practiceAreas } from "@/lib/content/practice-areas";
import { attorneys } from "@/lib/content/attorneys";

const stats = [
  { label: "Years serving clients", value: "30+" },
  { label: "Matters opened", value: "4,200+" },
  { label: "Practice areas", value: "6" },
];

const portalSteps = [
  {
    title: "We open your matter",
    body: "Once your intake is reviewed and accepted, we create your secure case file and portal access.",
  },
  {
    title: "Track it in real time",
    body: "See your case status, next key date, and stage on your personal Docket Board — no phone tag required.",
  },
  {
    title: "Stay in the loop",
    body: "Documents, messages, and status changes all land in one place, with email notifications you control.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
          Sterling Vance LLP
        </p>
        <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          Steady counsel, clearly communicated.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          A general-practice firm for the moments that matter — with a client
          portal that shows you exactly where your case stands, always.
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/contact">
            <Button variant="primary">Request a Consultation</Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary">Client Portal Login</Button>
          </Link>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl">Practice Areas</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <Link key={area.slug} href={`/practice-areas/${area.slug}`}>
              <Card className="h-full transition-colors hover:border-primary">
                <p className="font-mono text-xs text-primary">{area.code}</p>
                <h3 className="mt-2 font-display text-xl">{area.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {area.blurb}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl">How the Client Portal Works</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {portalSteps.map((step, i) => (
              <div key={step.title}>
                <p className="font-mono text-sm text-primary">0{i + 1}</p>
                <h3 className="mt-2 font-display text-xl">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl">Our Attorneys</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {attorneys.map((attorney) => (
            <Link key={attorney.slug} href={`/attorneys/${attorney.slug}`}>
              <Card className="h-full transition-colors hover:border-primary">
                <h3 className="font-display text-xl">{attorney.name}</h3>
                <p className="mt-1 text-sm text-primary">{attorney.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {attorney.bio}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl">
            Ready to talk about your matter?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us what&apos;s going on and our intake team will follow up to
            schedule a consultation.
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button variant="primary">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
