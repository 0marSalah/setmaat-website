// Members are edited in members.json (see README.md in this folder).
// This file only gives that data a type, so `pnpm build` fails if an entry is missing a required field.
import members from './members.json'

export type MemberLink = {
  label: string
  url: string
}

export type Member = {
  name: string
  /** Shown in the cartouche when there is no photo. Empty means: use the first letters of the name. */
  initials?: string
  role: string
  bio: string
  /** Empty means: show initials. Otherwise a file in public/members/, written as "/members/name.jpg", or a full URL. */
  photo?: string
  links?: MemberLink[]
}

export const FOUNDERS: Member[] = members.founders
export const ADVISORS: Member[] = members.advisors
