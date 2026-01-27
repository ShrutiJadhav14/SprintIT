import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Full Stack Web Development",
    desc: "HTML, CSS, JavaScript, React, Node.js with real-world projects.",
    icon: "💻",
  },
  {
    title: "Data Science & AI",
    desc: "Python, ML algorithms, real datasets & industry use-cases.",
    icon: "📊",
  },
  {
    title: "Cyber Security",
    desc: "Ethical hacking, network security & practical labs.",
    icon: "🔐",
  },
];

export default function CoursesPreview() {
  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-slate-100">
            Our <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Industry-focused courses designed to make you job-ready with hands-on experience.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-8 shadow-lg hover:border-cyan-500/40 transition-all"
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-slate-100">
                {course.title}
              </h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                {course.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-violet-500 hover:scale-105 transition-transform"
          >
            View All Courses →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
