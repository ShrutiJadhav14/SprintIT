import { motion } from "framer-motion";

const stats = [
  { value: "12K+", label: "Students Trained" },
  { value: "30+", label: "IT Courses" },
  { value: "60+", label: "Expert Mentors" },
  { value: "100%", label: "Placement Support" },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.04 }} //y means moves up 8 pixels(if it is not negative moves down 8 pixels)
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center
                       hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition"
          >
            <h2 className="text-4xl font-extrabold text-cyan-400">
              {s.value}
            </h2>
            <p className="mt-3 text-slate-400">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
