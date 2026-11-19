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
    lead: 'A free, open-source wallet for your digital identity, credentials and keys.',
    description:
      'Freewallet runs in your browser and keeps your keys on your side. There is no login server holding your account: you unlock it with a passkey or a passphrase, and you decide exactly who gets access to what, including AI agents.',
    points: [
      'Hold your DIDs, verifiable credentials and keys yourself, not on a platform',
      'Unlock with a passkey, checked on your device rather than by a server',
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
  {
    kicker: 'Personal storage',
    title: 'PWS Spaces',
    lead: 'Portable Web Spaces: your data in spaces you control and can take with you.',
    description:
      'PWS is storage built on the Portable Web Spaces specification from the W3C Credentials Community Group. Each space belongs to its owner, and apps only get the access you grant them.',
    points: [
      'Organise your data into Spaces and Collections, each with its own permissions',
      'Share access with capabilities you can delegate and revoke at any time',
      "Encrypt collections so the server storing them can't read them",
      'Export a space and import it elsewhere, or sync it across servers you choose',
    ],
    tags: ['Open standard', 'W3C CCG', 'Capability-based access', 'Self-hostable'],
    links: [
      { label: 'Read the spec', href: 'https://w3c-ccg.github.io/portable-web-spaces-spec/', variant: 'primary' },
      { label: 'View the server code', href: 'https://github.com/interop-alliance/web-spaces-server', variant: 'ghost' },
    ],
    art: 'spaces',
    tone: 'faience',
  },
]
