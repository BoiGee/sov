import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { attorneys } from "@/lib/content/attorneys";
import { practiceAreas } from "@/lib/content/practice-areas";

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
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-4xl">{attorney.name}</h1>
      <p className="mt-2 text-primary">{attorney.title}</p>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        {attorney.bio}
      </p>

      <div className="mt-10">
        <h2 className="font-display text-xl">Practice Areas</h2>
        <ul className="mt-4 flex flex-wrap gap-4">
          {attorney.practiceAreas.map((slug) => {
            const area = practiceAreas.find((a) => a.slug === slug);
            if (!area) return null;
            return (
              <li key={slug}>
                <Link
                  href={`/practice-areas/${slug}`}
                  className="text-primary underline underline-offset-4 hover:no-underline"
                >
                  {area.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Bar admissions, jurisdictions, and a full bio land in Milestone 4 once
        real attorney details are provided.
      </p>
    </div>
  );
}
