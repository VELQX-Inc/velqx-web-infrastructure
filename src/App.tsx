import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticlesCanvas from './components/ParticlesCanvas'
import Home from './pages/Home'
import About from './pages/About'
import Principles from './pages/Principles'
import Join from './pages/Join'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      <ParticlesCanvas />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
