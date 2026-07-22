// Placeholder demo content — swap for the real firm's practice area copy
// when it's available. Mirrors the eventual `PracticeArea` table (M2).
export const practiceAreas = [
  {
    slug: "family-law",
    name: "Family Law",
    code: "FL",
    blurb:
      "Divorce, custody, and support matters handled with steady, practical counsel.",
    services: [
      "Divorce & dissolution",
      "Child custody & parenting plans",
      "Child & spousal support",
      "Prenuptial & postnuptial agreements",
      "Adoption",
      "Domestic violence protective orders",
    ],
    processSteps: [
      {
        title: "Initial Consultation",
        body: "We review your situation, goals, and any immediate safety or financial concerns.",
      },
      {
        title: "Filing & Response",
        body: "We prepare and file the necessary petitions, or respond to a filing against you.",
      },
      {
        title: "Discovery & Negotiation",
        body: "We gather financial and custody information and pursue a fair settlement where possible.",
      },
      {
        title: "Resolution",
        body: "Through settlement or trial, we bring the matter to a conclusion and help you plan for what's next.",
      },
    ],
    faqs: [
      {
        q: "How is child custody decided?",
        a: "Courts weigh the best interests of the child, including stability, each parent's involvement, and the child's own preferences depending on age. We help you build a parenting plan that reflects your family's real schedule, not a generic template.",
      },
      {
        q: "Do I have to go to court to get divorced?",
        a: "Not always. Many cases resolve through negotiation or mediation. We prepare every case as if it will be tried, which tends to produce better settlements.",
      },
      {
        q: "How long does a divorce take?",
        a: "Uncontested matters can resolve in a few months; contested matters involving custody or complex assets can take a year or more. We'll give you a realistic estimate after an initial review.",
      },
    ],
  },
  {
    slug: "business-corporate",
    name: "Business & Corporate",
    code: "BC",
    blurb:
      "Formation, contracts, and governance support for growing companies.",
    services: [
      "Entity formation & structuring",
      "Contract drafting & negotiation",
      "Founder & shareholder agreements",
      "Mergers & acquisitions",
      "Employment agreements & policies",
      "General outside counsel",
    ],
    processSteps: [
      {
        title: "Discovery Call",
        body: "We learn about your business, structure, and immediate legal needs.",
      },
      {
        title: "Documentation",
        body: "We draft or review the governing documents and contracts specific to your situation.",
      },
      {
        title: "Negotiation",
        body: "We represent your interests directly with counterparties, investors, or partners.",
      },
      {
        title: "Ongoing Support",
        body: "Many clients keep us on for periodic review as the business grows.",
      },
    ],
    faqs: [
      {
        q: "What entity type should I form?",
        a: "It depends on your liability exposure, tax situation, and plans for investment. We walk founders through LLC, S-corp, and C-corp tradeoffs before you file anything.",
      },
      {
        q: "Can you serve as our ongoing outside counsel?",
        a: "Yes — many of our business clients retain us for recurring contract review, employment questions, and general legal checkups rather than calling only when there's a crisis.",
      },
      {
        q: "Do you handle disputes between business partners?",
        a: "We do, starting with your governing documents. Most partner disputes are resolved faster and cheaper by enforcing what's already in your operating agreement than by going straight to litigation.",
      },
    ],
  },
  {
    slug: "personal-injury",
    name: "Personal Injury",
    code: "PI",
    blurb:
      "Representation for clients injured by the negligence of others.",
    services: [
      "Auto & motorcycle accidents",
      "Slip and fall claims",
      "Product liability",
      "Wrongful death",
      "Insurance claim disputes",
      "Medical malpractice referrals",
    ],
    processSteps: [
      {
        title: "Free Case Review",
        body: "We assess what happened, your injuries, and whether you have a viable claim.",
      },
      {
        title: "Investigation",
        body: "We gather records, accident reports, and speak with witnesses.",
      },
      {
        title: "Negotiation with Insurers",
        body: "We handle all communication with insurance companies on your behalf.",
      },
      {
        title: "Trial if Necessary",
        body: "If a fair settlement isn't offered, we're prepared to take your case to trial.",
      },
    ],
    faqs: [
      {
        q: "Do I pay anything up front?",
        a: "No. Personal injury matters are handled on contingency — we only get paid if you recover.",
      },
      {
        q: "How much is my case worth?",
        a: "It depends on medical costs, lost income, and the severity of your injury. We give a realistic range after reviewing your records, not before.",
      },
      {
        q: "How long do I have to file a claim?",
        a: "Statutes of limitations vary by state and claim type, and some deadlines are much shorter than people expect. Contact us as soon as possible after an injury.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    code: "RE",
    blurb:
      "Residential and commercial transactions, leases, and disputes.",
    services: [
      "Residential purchase & sale agreements",
      "Commercial leasing",
      "Title review & disputes",
      "Landlord-tenant matters",
      "Zoning & land use",
      "1031 exchanges",
    ],
    processSteps: [
      {
        title: "Contract Review",
        body: "We review or draft your purchase agreement or lease before you sign.",
      },
      {
        title: "Due Diligence",
        body: "We examine title, survey, and any zoning or use restrictions.",
      },
      {
        title: "Closing",
        body: "We coordinate with the other side and title company to get to a clean closing.",
      },
      {
        title: "Post-Closing Support",
        body: "We're available if disputes or issues surface after the transaction.",
      },
    ],
    faqs: [
      {
        q: "Do I need a lawyer to buy a house?",
        a: "It's not always required, but a review of your purchase agreement and title before closing catches problems most buyers never see until it's too late.",
      },
      {
        q: "Can you help with a lease dispute?",
        a: "Yes, on both the landlord and tenant side — commercial and residential.",
      },
      {
        q: "What's involved in a title dispute?",
        a: "We investigate the chain of title, resolve competing claims, and can pursue or defend a quiet title action if necessary.",
      },
    ],
  },
  {
    slug: "estate-planning",
    name: "Estate Planning",
    code: "EP",
    blurb:
      "Wills, trusts, and probate guidance for individuals and families.",
    services: [
      "Wills",
      "Revocable & irrevocable trusts",
      "Powers of attorney & healthcare directives",
      "Probate & trust administration",
      "Estate tax planning",
      "Business succession planning",
    ],
    processSteps: [
      {
        title: "Planning Session",
        body: "We discuss your family, assets, and goals for your estate.",
      },
      {
        title: "Document Drafting",
        body: "We prepare the wills, trusts, and directives that fit your situation.",
      },
      {
        title: "Execution",
        body: "We guide you through signing everything correctly under state law.",
      },
      {
        title: "Administration Support",
        body: "When the time comes, we guide your executor or trustee through probate or trust administration.",
      },
    ],
    faqs: [
      {
        q: "Do I need a trust if I already have a will?",
        a: "Not everyone does — it depends on your assets, family situation, and whether you want to avoid probate. We'll tell you honestly if a will alone is enough.",
      },
      {
        q: "What happens if I die without a will?",
        a: "State intestacy law decides who inherits, which rarely matches what people actually want. We can usually put a basic plan in place quickly.",
      },
      {
        q: "How often should I update my estate plan?",
        a: "After any major life event — marriage, divorce, a new child, a significant change in assets — and at minimum every few years.",
      },
    ],
  },
  {
    slug: "criminal-defense",
    name: "Criminal Defense",
    code: "CD",
    blurb: "Defense counsel across misdemeanor and felony matters.",
    services: [
      "Misdemeanor & felony defense",
      "DUI/DWI defense",
      "Drug charges",
      "Expungement & record sealing",
      "Juvenile defense",
      "Post-conviction relief",
    ],
    processSteps: [
      {
        title: "Immediate Consultation",
        body: "We move quickly to understand the charges and any deadlines.",
      },
      {
        title: "Investigation",
        body: "We review evidence, police conduct, and any procedural issues.",
      },
      {
        title: "Negotiation",
        body: "We pursue reduced charges or dismissal where the facts support it.",
      },
      {
        title: "Trial",
        body: "If a fair resolution isn't offered, we're prepared to defend you at trial.",
      },
    ],
    faqs: [
      {
        q: "Should I talk to the police without a lawyer?",
        a: "Generally, no. Politely decline to answer questions beyond identifying yourself and ask for an attorney immediately.",
      },
      {
        q: "Can my record be expunged?",
        a: "It depends on the charge, the outcome, and your state's rules. We can review your record and tell you what's realistically possible.",
      },
      {
        q: "What happens at an arraignment?",
        a: "You'll hear the charges against you and enter a plea. We prepare you for exactly what to expect beforehand so there are no surprises.",
      },
    ],
  },
] as const;

export type PracticeAreaSlug = (typeof practiceAreas)[number]["slug"];
