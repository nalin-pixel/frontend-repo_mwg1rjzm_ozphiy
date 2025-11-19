function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur p-3">
          <a href="#" className="text-white font-semibold tracking-tight">RT</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/test" className="hover:text-white">System</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-full bg-white/90 hover:bg-white text-slate-900 px-4 py-2 text-sm font-medium">Hire me</a>
        </div>
      </div>
    </header>
  )
}

export default Nav
