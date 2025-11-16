import { motion } from 'framer-motion'
import { Feather, Grid, Square } from 'lucide-react'

const items = [
  {
    icon: Feather,
    title: 'Weightless UI',
    text: 'Thin lines, soft shadows, and balanced whitespace for calm clarity.'
  },
  {
    icon: Grid,
    title: 'Grid Harmony',
    text: 'Symmetric spacing and a refined grid that aligns every detail.'
  },
  {
    icon: Square,
    title: 'Subtle Motion',
    text: 'Micro-animations that feel natural and unobtrusive.'
  },
]

export default function Features() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm">
              <it.icon size={18} />
            </div>
            <h3 className="text-lg font-medium text-gray-900">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
