import { profile } from '../data/portfolio'
const channels = [
  ['GitHub', profile.github], ['LinkedIn', profile.linkedin], ['LeetCode', profile.leetcode], ['Email', profile.email.startsWith('[') ? profile.email : `mailto:${profile.email}`],
]
export default function Contact() {
  return <section className="section" id="contact"><div className="container"><h2>Liên hệ</h2><p>Tôi luôn sẵn sàng trao đổi về cơ hội thực tập, dự án và công nghệ.</p><ul className="contact-list">{channels.map(([label, url]) => <li key={label}><a href={url} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer">{label} <span aria-hidden="true">↗</span></a></li>)}</ul></div></section>
}
