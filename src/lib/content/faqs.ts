// General, firm-wide FAQ shown on the home page. Practice-area-specific
// FAQs live alongside each area in practice-areas.ts.
export const generalFaqs = [
  {
    id: "consultation",
    question: "Do you offer a free initial consultation?",
    answer:
      "Yes, for most new matters. Submit the contact form and our intake team will confirm details and schedule a time.",
  },
  {
    id: "areas-served",
    question: "What areas do you serve?",
    answer:
      "Our attorneys are licensed across New York, New Jersey, and Connecticut. If your matter is outside those jurisdictions, we can often refer you to trusted co-counsel.",
  },
  {
    id: "billing",
    question: "How does billing work?",
    answer:
      "It depends on the matter. Personal injury cases are handled on contingency; most other matters are billed hourly or with a flat fee agreed to in advance, in writing, before we start.",
  },
  {
    id: "portal",
    question: "What is the client portal?",
    answer:
      "Once we open your matter, you get secure access to your case's status, key dates, shared documents, and direct messaging with your legal team — no more guessing where things stand.",
  },
  {
    id: "timeline",
    question: "How long will my matter take?",
    answer:
      "It varies enormously by practice area and complexity. We give every client a realistic estimate after reviewing the specifics, and we update it if circumstances change.",
  },
] as const;
