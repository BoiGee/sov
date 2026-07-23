// Placeholder demo content — swap for real attorney bios when available.
// Mirrors the eventual `Attorney` table (M2).
export const attorneys = [
  {
    slug: "eleanor-whitmore",
    name: "Eleanor Whitmore",
    title: "Founding Partner",
    // Placeholder stock photo (Unsplash) — replace with a real headshot before launch.
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    practiceAreas: ["business-corporate", "estate-planning"],
    bio: "Eleanor co-founded the firm on the idea that clients deserve a straight answer, not a runaround.",
    longBio:
      "Eleanor has spent over two decades advising founders, family businesses, and individuals on the legal decisions that shape the rest of their lives, from a first LLC filing to a multi-generational estate plan. She's known for translating dense legal language into a decision clients can actually make.",
    email: "eleanor.whitmore@sovereignapexlegal.example",
    phone: "020 7946 0142",
    education: [
      { school: "University of Oxford", degree: "LLB", year: "1999" },
      { school: "University of Bristol", degree: "B.A., Economics", year: "1996" },
    ],
    barAdmissions: ["England and Wales", "Republic of Ireland"],
    notableMatters: [
      "Advised a founding team through a £12M Series A financing",
      "Structured a multi-entity succession plan for a third-generation family business",
      "Negotiated the sale of a regional logistics company to a national acquirer",
    ],
  },
  {
    slug: "marcus-calloway",
    name: "Marcus Calloway",
    title: "Founding Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    practiceAreas: ["personal-injury", "criminal-defense"],
    bio: "Marcus has spent two decades in courtrooms fighting for clients who feel outmatched.",
    longBio:
      "Marcus built his career trying cases other firms settled early. He believes the threat of trial, backed by genuine preparation to go there, is what gets clients a fair outcome, whether they're up against an insurance carrier or the prosecution.",
    email: "marcus.calloway@sovereignapexlegal.example",
    phone: "020 7946 0187",
    education: [
      { school: "University College London", degree: "LLB", year: "2001" },
      { school: "Durham University", degree: "B.A., Politics", year: "1998" },
    ],
    barAdmissions: ["England and Wales", "Scotland"],
    notableMatters: [
      "Obtained a seven-figure settlement for a client injured in a multi-vehicle collision",
      "Secured dismissal of criminal charges after successfully challenging an unlawful search",
      "Represented claimants in a product liability matter involving defective safety equipment",
    ],
  },
  {
    slug: "priya-nandakumar",
    name: "Priya Nandakumar",
    title: "Associate Attorney",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    practiceAreas: ["family-law", "real-estate"],
    bio: "Priya focuses on guiding families and homeowners through high-stakes transitions.",
    longBio:
      "Priya joined the firm after clerking for a family court judge, which shaped how she practices today: she prepares every custody case with the same rigor as a trial, even when she expects it to settle. She also maintains an active real estate practice, closing residential and small commercial transactions.",
    email: "priya.nandakumar@sovereignapexlegal.example",
    phone: "020 7946 0163",
    education: [
      { school: "King's College London", degree: "LLB", year: "2016" },
      { school: "University of Warwick", degree: "B.A., Sociology", year: "2012" },
    ],
    barAdmissions: ["England and Wales"],
    notableMatters: [
      "Negotiated a parenting plan preserving joint custody across a cross-border relocation",
      "Closed over 60 residential purchase and sale transactions",
      "Represented a tenant association in a commercial lease dispute",
    ],
  },
] as const;

export type AttorneySlug = (typeof attorneys)[number]["slug"];
