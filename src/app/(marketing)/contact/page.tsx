import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/lib/content/practice-areas";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-4xl">Contact Us</h1>
      <p className="mt-4 text-muted-foreground">
        Tell us about your matter and our intake team will follow up. This
        form does not open a case directly — every submission is reviewed by
        a person first.
      </p>

      <form className="mt-10 space-y-6" aria-describedby="intake-form-note">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-2.5 text-foreground focus-visible:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-2.5 text-foreground focus-visible:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-2.5 text-foreground focus-visible:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="practiceArea" className="block text-sm font-medium">
            Practice area
          </label>
          <select
            id="practiceArea"
            name="practiceArea"
            className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-2.5 text-foreground focus-visible:outline-none"
          >
            {practiceAreas.map((area) => (
              <option key={area.slug} value={area.slug}>
                {area.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            What&apos;s going on?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-sm border border-border bg-card px-4 py-2.5 text-foreground focus-visible:outline-none"
          />
        </div>
        <Button type="submit" variant="primary" disabled>
          Submit Inquiry
        </Button>
        <p id="intake-form-note" className="text-xs text-muted-foreground">
          Submission is wired up to create a Lead record and notify the
          intake team in Milestone 7 — disabled for now.
        </p>
      </form>
    </div>
  );
}
