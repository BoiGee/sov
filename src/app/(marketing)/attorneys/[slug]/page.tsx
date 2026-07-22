import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { attorneys } from "@/lib/content/attorneys";
import { practiceAreas } from "@/lib/content/practice-areas";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function generateStaticParams() {
  return attorneys.map((attorney) => ({ slug: attorney.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const attorney = attorneys.find((a) => a.slug === slug);
  return { title: attorney?.name ?? "Attorney" };
}

export default async function AttorneyPage({ params }: Props) {
  const { slug } = await params;
  const attorney = attorneys.find((a) => a.slug === slug);
  if (!attorney) notFound();

  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[2fr_1fr]">
          <div>
            <h1 className="font-display text-4xl">{attorney.name}</h1>
            <p className="mt-2 text-primary">{attorney.title}</p>
            <p className="mt-6 text-lg text-muted-foreground">{attorney.bio}</p>
            <p className="mt-4 text-muted-foreground">{attorney.longBio}</p>

            <div className="mt-8">
              <h2 className="font-display text-xl">Practice Areas</h2>
              <ul className="mt-4 flex flex-wrap gap-4">
                {attorney.practiceAreas.map((slug) => {
                  const area = practiceAreas.find((a) => a.slug === slug);
                  if (!area) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/practice-areas/${slug}`}
                        className="rounded-sm border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
                      >
                        {area.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-xl">Representative Experience</h2>
              <ul className="mt-4 space-y-3">
                {attorney.notableMatters.map((matter) => (
                  <li
                    key={matter}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 text-primary" aria-hidden>•</span>
                    {matter}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Prior results do not guarantee a similar outcome in your matter.
              </p>
            </div>
          </div>

          <Card className="h-fit">
            <h2 className="font-display text-lg">Contact</h2>
            <p className="mt-3 text-sm text-muted-foreground">{attorney.email}</p>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              {attorney.phone}
            </p>
            <Link href="/contact" className="mt-6 block">
              <Button variant="primary" className="w-full">
                Schedule a Consultation
              </Button>
            </Link>

            <div className="mt-8 border-t border-border pt-6">
              <h3 className="font-display text-sm">Education</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {attorney.education.map((edu) => (
                  <li key={edu.school}>
                    <p>{edu.school}</p>
                    <p className="text-xs">{edu.degree}, {edu.year}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <h3 className="font-display text-sm">Bar Admissions</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {attorney.barAdmissions.map((state) => (
                  <li key={state}>{state}</li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
