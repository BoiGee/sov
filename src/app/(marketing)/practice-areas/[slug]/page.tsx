import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { practiceAreas } from "@/lib/content/practice-areas";
import { attorneys } from "@/lib/content/attorneys";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { PracticeAreaIcon } from "@/components/marketing/practice-area-icon";
import { AttorneyAvatar } from "@/components/marketing/attorney-avatar";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  return { title: area?.name ?? "Practice Area" };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const relatedAttorneys = attorneys.filter((attorney) =>
    (attorney.practiceAreas as readonly string[]).includes(area.slug)
  );

  const otherAreas = practiceAreas.filter((a) => a.slug !== area.slug);

  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <PracticeAreaIcon slug={area.slug} className="h-10 w-10 text-primary" />
        <p className="mt-4 font-mono text-sm text-primary">{area.code}</p>
        <h1 className="mt-2 font-display text-4xl">{area.name}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {area.blurb}
        </p>
        <Link href="/contact" className="mt-8 inline-block">
          <Button variant="primary">Discuss a {area.name} Matter</Button>
        </Link>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-display text-2xl">Services</h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {area.services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1 text-primary" aria-hidden>
                  •
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-display text-2xl">Our Approach</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {area.processSteps.map((step, i) => (
            <div key={step.title}>
              <p className="font-mono text-sm text-primary">0{i + 1}</p>
              <h3 className="mt-2 font-display text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {relatedAttorneys.length > 0 && (
        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="font-display text-2xl">Attorneys in this Area</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {relatedAttorneys.map((attorney) => (
                <Link key={attorney.slug} href={`/attorneys/${attorney.slug}`}>
                  <Card className="flex h-full items-center gap-4 transition-colors hover:border-primary">
                    <AttorneyAvatar name={attorney.name} size="sm" />
                    <div>
                      <h3 className="font-display text-lg">{attorney.name}</h3>
                      <p className="mt-1 text-sm text-primary">{attorney.title}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-display text-2xl">Frequently Asked Questions</h2>
        <div className="mt-8">
          <Accordion
            items={area.faqs.map((faq, i) => ({
              id: `${area.slug}-faq-${i}`,
              question: faq.q,
              answer: faq.a,
            }))}
          />
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-display text-2xl">Other Practice Areas</h2>
          <ul className="mt-6 flex flex-wrap gap-4">
            {otherAreas.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/practice-areas/${other.slug}`}
                  className="rounded-sm border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
                >
                  {other.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
