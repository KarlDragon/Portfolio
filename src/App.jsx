import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NightSky from './components/NightSky'
import './styles.css'

export default function App() {
  return <><NightSky /><Header /><main><Hero /><About /><Skills /><Projects /><Contact /></main><Footer /></>
}
