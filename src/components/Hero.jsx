import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure text legibility; pointer-events-none to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="py-24 md:py-36">
          <p className="text-blue-300/90 uppercase tracking-[0.35em] text-xs md:text-sm mb-4">Portfolio • Motion • Creative</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            Roshen Thalagala
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-200/90 max-w-2xl">
            Creative and motion designer crafting expressive visuals, immersive micro-interactions, and brand-first stories.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-white/90 hover:bg-white text-slate-900 px-5 py-2.5 font-medium transition">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white px-5 py-2.5 font-medium transition border border-white/10">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
