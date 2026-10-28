import { projects } from '../data/portfolio'
export default function Projects() {
  return <section className="section" id="projects"><div className="container"><h2>Dự án</h2><div className="project-grid">{projects.map(project => <article className="project-card" key={project.name}><h3>{project.name}</h3><p>{project.description}</p><ul className="tags">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul><div className="card-actions"><a href={project.github} target="_blank" rel="noreferrer">GitHub</a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>}</div></article>)}</div></div></section>
}
