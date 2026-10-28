import { profile } from '../data/portfolio'
const info = () => [['Họ tên', profile.fullName], ['Nghề nghiệp', profile.role], ['Địa điểm', profile.location], ['Email', profile.email], ['Số điện thoại', profile.phone], ['Link CV', profile.cvUrl || '[ĐIỀN SAU, có thể bỏ]']]
export default function About() {
  return <section className="section" id="about"><div className="container"><h2>Giới thiệu</h2><div className="about-grid"><div className="copy"><p>Đam mê viết code sạch và hiệu quả.</p><p>Luôn học hỏi và tìm hiểu công nghệ mới để cải thiện bản thân.</p><p>Hiện đang tập trung vào React.js (frontend) và .NET (backend).</p><p>Quan tâm đến thiết kế thuật toán và phát triển full-stack.</p></div><dl className="info-list">{info().map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></div></div></section>
}
