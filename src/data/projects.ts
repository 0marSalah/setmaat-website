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

/** The product the two projects below add up to. Shown as the lead panel of "What we're building". */
export const BACKPACK = {
  title: 'Agentic Digital Backpack Platform',
  lead: 'One place for the data your agents work from, owned by you.',
  description:
    'The backpack is what you get when storage you control meets keys you hold. It is made of two open-source tools that work today, and it runs wherever you choose to keep it.',
  points: [
    {
      title: 'What goes in',
      text: 'Assistant context and memory, notes and markdown files, sensitive records, a backup of the family photo archive.',
    },
    {
      title: 'Who can reach in',
      text: 'Each app, model or agent gets only the access you grant it, scoped to what it needs, and you can take it back at any time.',
    },
    {
      title: 'Take it anywhere',
      text: 'Export it, import it elsewhere, sync it across servers you choose, or host it yourself at home or on-prem.',
    },
  ],
}

export const PROJECTS: Project[] = [
  {
    kicker: 'The storage',
    title: 'PWS Spaces',
    lead: 'Portable Web Spaces: where the contents of the backpack are kept.',
    description:
      'PWS is storage built on the Portable Web Spaces specification from the W3C Credentials Community Group. Each space belongs to its owner, and every app, model or agent only gets the access it was granted.',
    points: [
      'Organise data into Spaces and Collections, each with its own permissions',
      "Encrypt collections so the server storing them can't read them",
      'Export a space and import it elsewhere, or sync it across servers you choose',
    ],
    tags: ['Open source', 'Open standard', 'W3C CCG', 'Capability-based access', 'Self-hostable'],
    links: [
      { label: 'Read the spec', href: 'https://w3c-ccg.github.io/portable-web-spaces-spec/', variant: 'primary' },
      { label: 'View the server code', href: 'https://github.com/interop-alliance/web-spaces-server', variant: 'ghost' },
    ],
    art: 'spaces',
    tone: 'faience',
  },
  {
    kicker: 'The keys',
    title: 'Freewallet',
    lead: 'A free, open-source wallet for the keys and permissions that open the backpack.',
    description:
      'Freewallet runs in your browser and keeps your keys on your side. There is no login server holding your account: you unlock it with a passkey or a passphrase, and from there you hand out exactly the access each app or AI agent needs.',
    points: [
      'Hold your DIDs, verifiable credentials and keys yourself, not on a platform',
      'Give an app or AI agent scoped, revocable access instead of handing over everything',
      'Syncs your wallet to PWS Spaces you choose',
    ],
    tags: ['Open source', 'DIDs', 'Verifiable credentials', 'Passkeys', 'Capabilities (ZCAP)'],
    links: [
      { label: 'Visit freewallet.me', href: 'https://freewallet.me', variant: 'primary' },
      { label: 'View the code', href: 'https://github.com/interop-alliance/freewallet', variant: 'ghost' },
    ],
    art: 'wallet',
    tone: 'lapis',
  },
]
