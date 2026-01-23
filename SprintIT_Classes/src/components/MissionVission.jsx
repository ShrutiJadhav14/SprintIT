import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

        {[
          {
            title: "Our Mission",
            text: "To empower students with real-world IT skills, practical exposure, and confidence to succeed in competitive tech careers.",
          },
          {
            title: "Our Vision",
            text: "To become a trusted IT training ecosystem producing skilled, job-ready professionals globally.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-10
                       hover:border-cyan-500 hover:shadow-lg
                       hover:shadow-cyan-500/20 transition"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              {item.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
