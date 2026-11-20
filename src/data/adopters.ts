export type Adopter = {
  name: string
  /** One or more sites; each is shown as a link at the foot of the card. */
  hrefs: string[]
  /** One line on who they are. Leave out until there is an accurate line to show. */
  description?: string
}

export const ADOPTERS: Adopter[] = [
  {
    name: 'Interop Alliance',
    hrefs: ['https://interopalliance.org'],
    description:
      'Designs and builds systems on open standards, decentralized identity and bring-your-own-everything architectures.',
  },
  {
    name: 'Digital Credentials Commons',
    hrefs: ['https://dccommons.org/'],
    description:
      'A community of institutions, organizations, vendors and learners advancing privacy-first, portable, verifiable digital credentials.',
  },
  {
    name: 'Companion Intelligence',
    hrefs: ['https://ci.computer/memory'],
    description:
      'A local-first AI system for private digital memory, with records kept on hardware you own so your agents can draw on them.',
  },
  {
    name: 'Club.Pub and Local.Pub',
    hrefs: ['https://club.pub/', 'https://local.pub/'],
    description: 'Meet people, not platforms.',
  },
  {
    name: 'Praxamark',
    hrefs: ['https://praxamark.com/'],
    description:
      'A personal and organizational knowledge hub: capture what you read, watch and listen to, mark and cite it, and keep it in a vault on your own computer.',
  },
  {
    name: 'Civic.Social',
    hrefs: ['https://civic.social'],
  },
]
