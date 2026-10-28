import { skillGroups } from '../data/portfolio'
export default function Skills() {
  return <section className="section" id="skills"><div className="container"><h2>Kỹ năng</h2><div className="skill-grid">{skillGroups.map(group => <article className="skill-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
}
