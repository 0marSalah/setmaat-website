export type Program = {
  title: string
  description: string
  cta: string
  href: string
}

export const PROGRAMS: Program[] = [
  {
    title: 'Open-source AI',
    description: 'Models, datasets and tools that anyone can use, study and build on, in any language.',
    cta: 'Browse the code →',
    href: '#',
  },
  {
    title: 'Learning circles',
    description:
      'Free study groups, online and in person, where members teach each other, from first model to production.',
    cta: 'Find a circle →',
    href: '#',
  },
  {
    title: 'AI for the community',
    description: "Pro-bono projects with NGOs, schools and small businesses that can't afford an AI team.",
    cta: 'Request a project →',
    href: '#',
  },
]
