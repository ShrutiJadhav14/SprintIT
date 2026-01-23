import { motion } from "framer-motion";

const steps = [
  {
    title: "Foundation Skills",
    desc: "Strong basics with industry-aligned curriculum",
  },
  {
    title: "Hands-on Projects",
    desc: "Real-world projects guided by mentors",
  },
  {
    title: "Career Mentorship",
    desc: "Resume, mock interviews & personal guidance",
  },
  {
    title: "Placement Support",
    desc: "Interview opportunities & career launch",
  },
];

export default function CareerRoadmap() {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-violet-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-100 mb-20">
          Your <span className="text-cyan-400">Career Roadmap</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-slate-900/70 backdrop-blur
                         border border-slate-800 rounded-2xl p-8
                         hover:border-cyan-500 hover:shadow-lg
                         hover:shadow-cyan-500/20 transition"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full
                              bg-gradient-to-r from-cyan-500 to-violet-500
                              text-black font-bold flex items-center justify-center">
                {i + 1}
              </div>

              <h3 className="text-xl font-semibold text-slate-100 mt-6 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
