import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { generalFaqs } from "@/lib/content/faqs";

export const metadata = { title: "Frequently Asked Questions" };

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-display text-4xl">Frequently Asked Questions</h1>
      <p className="mt-4 text-muted-foreground">
        General questions about working with us. Practice-area-specific
        questions live on each{" "}
        <Link href="/#practice-areas" className="text-primary underline underline-offset-4 hover:no-underline">
          practice area page
        </Link>
        .
      </p>
      <div className="mt-10">
        <Accordion
          items={generalFaqs.map((faq) => ({
            id: faq.id,
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      </div>
    </div>
  );
}
