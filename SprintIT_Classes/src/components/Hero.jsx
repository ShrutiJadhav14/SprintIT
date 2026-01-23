import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">

      {/* Ambient Glow Orbs */}
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-[28rem] h-[28rem] bg-violet-500/20 rounded-full blur-3xl"
      />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1e293b_1px,transparent_0)] bg-[size:40px_40px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full
                       bg-slate-900/70 backdrop-blur border border-slate-800
                       text-slate-300 text-sm"
          >
            🚀 Industry-Oriented IT Training
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-100">
            Shape Your
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent animate-gradient">
              Tech Career
            </span>
            With Confidence
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-lg text-slate-400 max-w-xl leading-relaxed">
            Learn from industry mentors. Build real-world projects.
            Get placement-ready with Sprint IT Academy’s
            elite training ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500
                         text-black font-semibold shadow-xl shadow-cyan-500/40"
            >
              Explore Courses
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-xl border border-slate-700
                         text-slate-200 hover:border-cyan-400 hover:text-cyan-400
                         transition"
            >
              Book Free Demo
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex gap-10 text-sm text-slate-400">
            <div>
              <span className="text-cyan-400 font-bold text-xl">12K+</span>
              <br /> Learners
            </div>
            <div>
              <span className="text-cyan-400 font-bold text-xl">30+</span>
              <br /> Courses
            </div>
            <div>
              <span className="text-cyan-400 font-bold text-xl">100%</span>
              <br /> Placement Support
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-xl" />

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="IT Training"
            className="relative rounded-3xl shadow-2xl shadow-black/50"
          />
        </motion.div>

      </div>
    </section>
  );
}
