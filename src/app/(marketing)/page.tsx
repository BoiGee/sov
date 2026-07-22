import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { practiceAreas } from "@/lib/content/practice-areas";
import { attorneys } from "@/lib/content/attorneys";
import { testimonials } from "@/lib/content/testimonials";
import { caseResults } from "@/lib/content/case-results";
import { offices } from "@/lib/content/offices";
import { generalFaqs } from "@/lib/content/faqs";

const stats = [
  { label: "Years serving clients", value: "30+" },
  { label: "Matters opened", value: "4,200+" },
  { label: "Practice areas", value: "6" },
  { label: "Client portal uptime", value: "99.9%" },
];

const barAdmissions = ["New York", "New Jersey", "Connecticut"];

const values = [
  {
    title: "Responsive Communication",
    body: "You will never wonder if your call was received. Every attorney and staff member commits to a same-business-day response.",
  },
  {
    title: "Transparent Billing",
    body: "Fee arrangements are agreed to in writing before work begins, whether that's hourly, flat-fee, or contingency.",
  },
  {
    title: "Real Trial Experience",
    body: "Our attorneys prepare every matter as though it could go to trial, which tends to produce better settlements too.",
  },
  {
    title: "A Portal That Keeps You Informed",
    body: "Status changes, documents, and messages all land in one secure place — not scattered across email and voicemail.",
  },
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
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8 text-xs uppercase tracking-wide text-muted-foreground">
          <span>Licensed in:</span>
          {barAdmissions.map((state) => (
            <span key={state} className="font-mono">{state}</span>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
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
          <h2 className="font-display text-3xl">Why Sterling Vance</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="font-display text-lg">{value.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
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
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl">Recent Case Results</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Prior results do not guarantee a similar outcome in your matter —
            every case depends on its own facts.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {caseResults.map((result) => (
              <Card key={result.summary}>
                <p className="font-mono text-xs uppercase tracking-wide text-primary">
                  {result.practiceArea}
                </p>
                <p className="mt-3 text-foreground">{result.summary}</p>
              </Card>
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
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl">What Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.quote}>
                <p className="text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  — {testimonial.context}
                </p>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Testimonials reflect individual experiences and do not guarantee
            a similar outcome for your matter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-display text-3xl">Frequently Asked Questions</h2>
        <div className="mt-10">
          <Accordion
            items={generalFaqs.map((faq) => ({
              id: faq.id,
              question: faq.question,
              answer: faq.answer,
            }))}
          />
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl">Our Offices</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {offices.map((office) => (
              <div key={office.name}>
                <h3 className="font-display text-xl">{office.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{office.address}</p>
                <p className="mt-1 font-mono text-sm text-muted-foreground">{office.phone}</p>
                <p className="mt-1 text-sm text-muted-foreground">{office.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
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

        <div className="mx-auto mt-16 max-w-md border-t border-border pt-10">
          <h3 className="font-display text-lg">Legal Insights, Occasionally</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            No spam, just the occasional note when the law changes in a way
            that affects our clients.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              disabled
              aria-label="Email address"
              className="w-full rounded-sm border border-border bg-background px-4 py-2.5 disabled:opacity-60"
            />
            <Button type="submit" variant="secondary" disabled>
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
