import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Spline background cover */}
      <div className="relative h-[60vh] w-full md:h-[70vh]">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient overlay to calm the scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white/80" />
      </div>

      {/* Headline card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-3xl px-6"
        >
          <div className="rounded-2xl border border-gray-200/70 bg-white/70 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md">
            <h1 className="text-center text-4xl font-medium leading-tight tracking-tight text-gray-900 md:text-6xl">
              Quiet design for clear minds
            </h1>
            <p className="mt-4 text-center text-base text-gray-600 md:text-lg">
              A soft, modern aesthetic with space to breathe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
