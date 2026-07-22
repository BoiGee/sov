import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { practiceAreas } from "@/lib/content/practice-areas";
import { attorneys } from "@/lib/content/attorneys";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono text-sm text-primary">{area.code}</p>
      <h1 className="mt-2 font-display text-4xl">{area.name}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        {area.blurb}
      </p>
      <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
        Full practice area copy — services offered, representative matters,
        and process detail — lands in Milestone 4. This page currently
        confirms routing, metadata, and static params work end to end.
      </p>

      {relatedAttorneys.length > 0 && (
        <div className="mt-12">
          <h2 className="font-display text-2xl">Attorneys in this area</h2>
          <ul className="mt-4 flex flex-wrap gap-4">
            {relatedAttorneys.map((attorney) => (
              <li key={attorney.slug}>
                <Link
                  href={`/attorneys/${attorney.slug}`}
                  className="text-primary underline underline-offset-4 hover:no-underline"
                >
                  {attorney.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link href="/contact" className="mt-12 inline-block">
        <Button variant="primary">Discuss a {area.name} Matter</Button>
      </Link>
    </div>
  );
}
