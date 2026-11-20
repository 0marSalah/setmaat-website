export type Program = {
  title: string
  description: string
}

export const PROGRAMS: Program[] = [
  {
    title: 'The Agentic Digital Backpack Platform',
    description:
      'The storage servers, wallets and libraries behind the backpack. They give a small AI project encrypted storage and fine-grained authorization without building them from scratch. Fully open source, self-hostable, free to use, study and build on.',
  },
  {
    title: 'Interop through open standards',
    description:
      'We take part in the standards these tools rest on, like Portable Web Spaces at the W3C Credentials Community Group, so projects from different teams can read and write the same data instead of each inventing a format.',
  },
  {
    title: 'Learning circles',
    description:
      'Study groups, online and in person, where members and teams adopting these tools work through storage, keys and authorization together, from first key pair to production.',
  },
]
