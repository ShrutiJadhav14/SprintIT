import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[80vh] bg-slate-950 flex items-center overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-slate-100"
        >
          About
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Sprint IT Academy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-3xl mx-auto text-lg text-slate-400"
        >
          We are shaping future IT professionals through industry-focused
          training, practical learning, and career mentorship.
        </motion.p>
      </div>
    </section>
  );
}
