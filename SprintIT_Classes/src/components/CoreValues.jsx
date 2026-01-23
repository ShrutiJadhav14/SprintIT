import { motion } from "framer-motion";

const values = [
  "Practical Learning",
  "Industry Relevance",
  "Student Success",
  "Continuous Innovation",
];

export default function CoreValues() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-100 mb-16">
          Our <span className="text-cyan-400">Core Values</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8
                         text-center hover:border-violet-500
                         hover:shadow-lg hover:shadow-violet-500/20 transition"
            >
              <h3 className="text-lg font-semibold text-slate-100">
                {value}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
