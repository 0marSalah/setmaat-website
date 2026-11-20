import type { ComponentType } from 'react'
import { BACKPACK, PROJECTS, type Project } from '../data/projects.ts'
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
          One product for AI that is sized to the people it serves, made of two open tools you can also use on
          their own.
        </SectionHead>
        <article className="backpack">
          <div className="stars" aria-hidden="true" />
          <div className="backpack-head">
            <h3>{BACKPACK.title}</h3>
            <p className="lead">{BACKPACK.lead}</p>
            <p>{BACKPACK.description}</p>
          </div>
          <ul className="backpack-points">
            {BACKPACK.points.map((point) => (
              <li key={point.title}>
                <h4>{point.title}</h4>
                <p>{point.text}</p>
              </li>
            ))}
          </ul>
        </article>
        <p className="eyebrow work-inside">What's inside</p>
        <div className="work-list">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
