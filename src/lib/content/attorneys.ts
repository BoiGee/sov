// Placeholder demo content — swap for real attorney bios when available.
// Mirrors the eventual `Attorney` table (M2).
export const attorneys = [
  {
    slug: "eleanor-sterling",
    name: "Eleanor Sterling",
    title: "Founding Partner",
    practiceAreas: ["business-corporate", "estate-planning"],
    bio: "Eleanor co-founded the firm on the idea that clients deserve a straight answer, not a runaround.",
  },
  {
    slug: "marcus-vance",
    name: "Marcus Vance",
    title: "Founding Partner",
    practiceAreas: ["personal-injury", "criminal-defense"],
    bio: "Marcus has spent two decades in courtrooms fighting for clients who feel outmatched.",
  },
  {
    slug: "priya-nandakumar",
    name: "Priya Nandakumar",
    title: "Associate Attorney",
    practiceAreas: ["family-law", "real-estate"],
    bio: "Priya focuses on guiding families and homeowners through high-stakes transitions.",
  },
] as const;

export type AttorneySlug = (typeof attorneys)[number]["slug"];
