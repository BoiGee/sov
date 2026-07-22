import { testimonials } from "@/lib/content/testimonials";

export const metadata = { title: "About" };

const stats = [
  { label: "Years serving clients", value: "30+" },
  { label: "Matters opened", value: "4,200+" },
  { label: "Practice areas", value: "6" },
  { label: "Client portal uptime", value: "99.9%" },
];

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

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="font-display text-4xl">About Sterling Vance LLP</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Sterling Vance LLP was founded on a simple premise: clients deserve
          a straight answer and to always know where their matter stands.
          Three decades later, that&apos;s still what sets us apart — steady
          counsel, clearly communicated, backed by a portal that keeps you
          informed without having to ask.
        </p>
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
        <h2 className="font-display text-3xl">Why Sterling Vance</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="font-display text-lg">{value.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl">What Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.quote} className="rounded-sm border border-border bg-background p-6">
                <p className="text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  — {testimonial.context}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Testimonials reflect individual experiences and do not guarantee
            a similar outcome for your matter.
          </p>
        </div>
      </section>
    </div>
  );
}
