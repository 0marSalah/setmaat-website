import type { ComponentType } from 'react'
import { PROJECTS, type Project } from '../data/projects.ts'
import { SectionHead } from './SectionHead.tsx'
import { SpacesArt, WalletArt } from './WorkArt.tsx'
import './Work.css'

const ART = {
  wallet: WalletArt,
  spaces: SpacesArt,
} satisfies Record<Project['art'], ComponentType>

function ProjectCard({ project }: { project: Project }) {
  const Art = ART[project.art]
  return (
    <article className="work">
      <div className={`work-art ${project.tone}`} aria-hidden="true">
        <div className="stars" />
        <Art />
      </div>
      <div className="work-body">
        <span className="kicker">{project.kicker}</span>
        <h3>{project.title}</h3>
        <p className="lead">{project.lead}</p>
        <p>{project.description}</p>
        <ul className="points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="work-links">
          {project.links.map((link) => (
            <a key={link.label} className={`btn btn-${link.variant}`} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead eyebrow="Our work" title="What we're building">
          Open tools that put people in charge of their own data and identity. Built on open standards, so nothing
          locks you in.
        </SectionHead>
        <div className="work-list">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
