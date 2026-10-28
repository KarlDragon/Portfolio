import { profile } from '../data/portfolio'
export default function Hero() {
  return <section className="hero section" id="top"><div className="container hero-grid">
    <img className="avatar" src={profile.avatar} alt="Ảnh đại diện GitHub của Phong" />
    <div><p className="eyebrow">Portfolio</p><h1>Xin chào, mình là Phong</h1><p className="subtitle">Software Developer | Problem Solver | Tech Enthusiast</p>
      <div className="button-row"><a className="button primary" href="#projects">Xem dự án</a><a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div>
    </div>
  </div></section>
}
