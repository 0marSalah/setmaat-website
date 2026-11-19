export type Program = {
  title: string
  description: string
}

export const PROGRAMS: Program[] = [
  {
    title: 'Open-source tools',
    description:
      'Wallets, storage servers and libraries for digital identity, verifiable credentials and secure sharing. Free for anyone to use, study and build on.',
  },
  {
    title: 'Open standards',
    description:
      'We take part in the standards these tools rest on, like Portable Web Spaces at the W3C Credentials Community Group, so wallets and storage from different makers work together.',
  },
  {
    title: 'Learning circles',
    description:
      'Free study groups, online and in person, where members teach each other identity, credentials and secure storage, from first key pair to production.',
  },
]
