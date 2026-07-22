// Placeholder demo content — swap for the real firm's practice area copy
// when it's available. Mirrors the eventual `PracticeArea` table (M2).
export const practiceAreas = [
  {
    slug: "family-law",
    name: "Family Law",
    code: "FL",
    blurb:
      "Divorce, custody, and support matters handled with steady, practical counsel.",
  },
  {
    slug: "business-corporate",
    name: "Business & Corporate",
    code: "BC",
    blurb:
      "Formation, contracts, and governance support for growing companies.",
  },
  {
    slug: "personal-injury",
    name: "Personal Injury",
    code: "PI",
    blurb:
      "Representation for clients injured by the negligence of others.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    code: "RE",
    blurb:
      "Residential and commercial transactions, leases, and disputes.",
  },
  {
    slug: "estate-planning",
    name: "Estate Planning",
    code: "EP",
    blurb:
      "Wills, trusts, and probate guidance for individuals and families.",
  },
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    code: "CD",
    blurb: "Defense counsel across misdemeanor and felony matters.",
  },
] as const;

export type PracticeAreaSlug = (typeof practiceAreas)[number]["slug"];
