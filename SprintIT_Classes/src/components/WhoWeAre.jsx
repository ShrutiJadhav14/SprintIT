import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team"
          className="rounded-3xl shadow-2xl shadow-black/40"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-100 mb-6">
            Who <span className="text-cyan-400">We Are</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Sprint IT Academy is a team of industry professionals, mentors,
            and educators passionate about transforming learners into
            confident IT professionals.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Our training approach combines structured learning, real-time
            project experience, and continuous career guidance.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
