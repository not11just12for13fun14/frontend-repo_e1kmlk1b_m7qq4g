import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Work', href: '#' },
    { name: 'About', href: '#' },
  ]

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-6">
          <a href="#" className="text-xl font-medium tracking-tight text-gray-900">
            Atelier
          </a>
          <nav className="hidden gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {l.name}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-700 shadow-sm hover:bg-white/60 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden rounded-xl border border-gray-200 bg-white/70 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col p-4">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {l.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </header>
  )
}
