import { useEffect, useState } from 'react'

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'motion', label: 'Motion' },
  { key: 'post', label: 'Posts' },
  { key: 'banner', label: 'Banners' },
  { key: 'website', label: 'Web' },
]

function Showcase() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState('all')
  const [loading, setLoading] = useState(true)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const query = active === 'all' ? '' : `?type=${active}`
        const res = await fetch(`${baseUrl}/api/works${query}`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error('Failed to load works', e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [active])

  return (
    <section id="work" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
            <p className="text-slate-300/80 mt-2">From posts to motion videos to web banners</p>
          </div>

          <div className="flex gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-full p-1">
            {TABS.map(t => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${active===t.key ? 'bg-white text-slate-900' : 'text-white/80 hover:text-white'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-slate-400">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <a key={item.id} href={item.link || item.videoUrl || item.imageUrl || '#'} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                {item.thumbnail || item.imageUrl ? (
                  <img src={item.thumbnail || item.imageUrl} alt={item.title} className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
                ) : (
                  <div className="h-64 w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide bg-white/10 text-white/80">{item.type}</span>
                  </div>
                  <h3 className="mt-2 text-white font-semibold text-lg">{item.title}</h3>
                  {item.description && <p className="text-slate-300/80 text-sm line-clamp-2">{item.description}</p>}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Showcase
