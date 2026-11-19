import type { ReactNode } from 'react'
import { ADVISORS, FOUNDERS, type Member } from '../data/members.ts'
import { SectionHead } from './SectionHead.tsx'
import './Members.css'

function initialsOf(member: Member) {
  return (
    member.initials ||
    member.name
      .split(/\s+/)
      .map((word) => word.charAt(0))
      .join('')
      .slice(0, 2)
  )
}

/** The oval frame ancient Egyptians drew around names. */
function Cartouche({ size, decorative, children }: { size: 'big' | 'small'; decorative?: boolean; children: ReactNode }) {
  return (
    <div className={`cartouche ${size}`} aria-hidden={decorative || undefined}>
      <div className="face">{children}</div>
    </div>
  )
}

/** Resolves a photo path from members.json against the site's base path, so it still works when the
 *  site is served from a subfolder (GitHub Pages serves it from /<repo-name>/). Full URLs pass through. */
function photoUrl(photo: string) {
  if (/^https?:\/\//.test(photo)) return photo
  return import.meta.env.BASE_URL + photo.replace(/^\//, '')
}

function Face({ member }: { member: Member }) {
  return member.photo ? <img src={photoUrl(member.photo)} alt={`Photo of ${member.name}`} /> : initialsOf(member)
}

function FounderCard({ member }: { member: Member }) {
  return (
    <article className="member founder">
      <Cartouche size="big">
        <Face member={member} />
      </Cartouche>
      <span className="role">{member.role}</span>
      <h3>{member.name}</h3>
      <p className="bio">{member.bio}</p>
      {member.links && member.links.length > 0 && (
        <div className="links">
          {member.links.map((link) => (
            <a key={link.label} href={link.url}>
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

function AdvisorCard({ member }: { member: Member }) {
  return (
    <article className="member advisor">
      <Cartouche size="big">
        <Face member={member} />
      </Cartouche>
      <div>
        <span className="role">{member.role}</span>
        <h3>{member.name}</h3>
        <p className="bio">{member.bio}</p>
      </div>
    </article>
  )
}

const memberKey = (member: Member) => `${member.name}|${member.role}`

export function Members() {
  return (
    <section className="section" id="members">
      <div className="wrap">
        <SectionHead
          eyebrow="The people"
          title={
            <>
              Who's behind <span className="nm">SetMaat</span>
            </>
          }
        >
          Three founding members run the co-op, guided by advisors who share their experience.
        </SectionHead>

        <div className="group-label">
          <span>Founding members</span>
        </div>
        <div className="founders">
          {FOUNDERS.map((member) => (
            <FounderCard key={memberKey(member)} member={member} />
          ))}
        </div>

        <div className="group-label">
          <span>{ADVISORS.length === 1 ? 'Advisor' : 'Advisors'}</span>
        </div>
        <div className="advisors">
          {ADVISORS.map((member) => (
            <AdvisorCard key={memberKey(member)} member={member} />
          ))}
        </div>

        <div className="join-strip" id="join-card">
          <Cartouche size="small" decorative>
            +
          </Cartouche>
          <div className="join-text">
            <h3>Your name could be here</h3>
            <p>
              Join the learning circles, contribute to open tools and standards, and help shape what we build,
              wherever you live.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
