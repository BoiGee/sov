// Placeholder demo content — swap for real attorney bios when available.
// Mirrors the eventual `Attorney` table (M2).
export const attorneys = [
  {
    slug: "eleanor-sterling",
    name: "Eleanor Sterling",
    title: "Founding Partner",
    practiceAreas: ["business-corporate", "estate-planning"],
    bio: "Eleanor co-founded the firm on the idea that clients deserve a straight answer, not a runaround.",
    longBio:
      "Eleanor has spent over two decades advising founders, family businesses, and individuals on the legal decisions that shape the rest of their lives — from a first LLC filing to a multi-generational estate plan. She's known for translating dense legal language into a decision clients can actually make.",
    email: "eleanor.sterling@sterlingvance.example",
    phone: "(555) 010-0142",
    education: [
      { school: "Columbia Law School", degree: "J.D.", year: "1999" },
      { school: "University of Michigan", degree: "B.A., Economics", year: "1996" },
    ],
    barAdmissions: ["New York", "New Jersey"],
    notableMatters: [
      "Advised a founding team through a $12M Series A financing",
      "Structured a multi-entity succession plan for a third-generation family business",
      "Negotiated the sale of a regional logistics company to a national acquirer",
    ],
  },
  {
    slug: "marcus-vance",
    name: "Marcus Vance",
    title: "Founding Partner",
    practiceAreas: ["personal-injury", "criminal-defense"],
    bio: "Marcus has spent two decades in courtrooms fighting for clients who feel outmatched.",
    longBio:
      "Marcus built his career trying cases other firms settled early. He believes the threat of trial — backed by genuine preparation to go there — is what gets clients a fair outcome, whether they're up against an insurance carrier or the state.",
    email: "marcus.vance@sterlingvance.example",
    phone: "(555) 010-0187",
    education: [
      { school: "Georgetown University Law Center", degree: "J.D.", year: "2001" },
      { school: "Boston College", degree: "B.A., Political Science", year: "1998" },
    ],
    barAdmissions: ["New York", "Connecticut"],
    notableMatters: [
      "Obtained a seven-figure settlement for a client injured in a multi-vehicle collision",
      "Secured dismissal of felony charges after successfully challenging an unlawful search",
      "Represented plaintiffs in a product liability matter involving defective safety equipment",
    ],
  },
  {
    slug: "priya-nandakumar",
    name: "Priya Nandakumar",
    title: "Associate Attorney",
    practiceAreas: ["family-law", "real-estate"],
    bio: "Priya focuses on guiding families and homeowners through high-stakes transitions.",
    longBio:
      "Priya joined the firm after clerking for a family court judge, which shaped how she practices today: she prepares every custody case with the same rigor as a trial, even when she expects it to settle. She also maintains an active real estate practice, closing residential and small commercial transactions.",
    email: "priya.nandakumar@sterlingvance.example",
    phone: "(555) 010-0163",
    education: [
      { school: "Fordham University School of Law", degree: "J.D.", year: "2016" },
      { school: "University of Virginia", degree: "B.A., Sociology", year: "2012" },
    ],
    barAdmissions: ["New York"],
    notableMatters: [
      "Negotiated a parenting plan preserving joint custody across a cross-state relocation",
      "Closed over 60 residential purchase and sale transactions",
      "Represented a tenant association in a commercial lease dispute",
    ],
  },
] as const;

export type AttorneySlug = (typeof attorneys)[number]["slug"];
