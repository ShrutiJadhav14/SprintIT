import { motion } from "framer-motion";

export default function AboutJourney() {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">

      <div className="absolute -top-40 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-100 mb-10"
        >
          Our <span className="text-violet-400">Training Philosophy</span>
        </motion.h2>

        <p className="max-w-3xl mx-auto text-slate-400 leading-relaxed">
          We believe learning should be immersive, practical, and career-driven.
          Every program is crafted to bridge the gap between education and
          industry expectations.
        </p>
      </div>
    </section>
  );
}
