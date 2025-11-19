import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import Nav from './components/Nav'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Nav />
      <Hero />
      <Showcase />
      <Contact />
      <footer className="py-10 text-center text-xs text-slate-400/80">
        © {new Date().getFullYear()} Roshen Thalagala · All rights reserved
      </footer>
    </div>
  )
}

export default App
