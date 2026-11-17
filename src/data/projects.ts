export type ProjectLink = {
  label: string
  href: string
  variant: 'primary' | 'ghost'
}

export type Project = {
  kicker: string
  title: string
  lead: string
  description: string
  points: string[]
  tags: string[]
  links: ProjectLink[]
  /** Which illustration to show, and the panel colour behind it. See components/WorkArt.tsx. */
  art: 'wallet' | 'spaces'
  tone: 'lapis' | 'faience'
}

export const PROJECTS: Project[] = [
  {
    kicker: 'Digital wallet',
    title: 'Freewallet',
    lead: 'A free wallet for your digital identity and the data that belongs to you.',
    description:
      'Freewallet lets people hold their own keys and credentials, connect to their own storage, and decide exactly who gets access, including AI agents.',
    points: [
      'Your identity (DIDs) and credentials, held by you, not a platform',
      'Give an AI agent a scoped, revocable permission to your storage instead of handing over everything',
      'Works with PWS Spaces for storing your data',
    ],
    tags: ['Open source', 'DIDs', 'Verifiable credentials', 'Capabilities (ZCAP)'],
    links: [
      { label: 'Visit freewallet.me', href: 'https://freewallet.me', variant: 'primary' },
      { label: 'View the code', href: '#', variant: 'ghost' },
    ],
    art: 'wallet',
    tone: 'lapis',
  },
  {
    kicker: 'Personal storage',
    title: 'PWS Spaces',
    lead: 'Portable Web Spaces: your data in spaces you control and can take with you.',
    description:
      'PWS is storage built on the Portable Web Spaces specification from the W3C Credentials Community Group. Each space belongs to its owner, and apps only get the access you grant them.',
    points: [
      'Organise your data into spaces, each with its own permissions',
      'Export a space and import it somewhere else, with no lock-in',
      'Replicate spaces across servers you choose',
    ],
    tags: ['Open standard', 'W3C CCG', 'Capability-based access', 'Self-hostable'],
    links: [
      { label: 'Read the spec', href: 'https://github.com/w3c-ccg/portable-web-spaces-spec', variant: 'primary' },
      { label: 'Try a Space', href: '#', variant: 'ghost' },
    ],
    art: 'spaces',
    tone: 'faience',
  },
]
