import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AICourseSuggestion from "../components/AICourseSuggestion";

const courses = [
  {
    id: "full-stack",
    title: "Full Stack Web Development",
    desc: "Learn frontend & backend with real-world projects.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    stack: "React, Node, MongoDB",
  },
  {
    id: "java-stack",
    title: "Java Full Stack",
    desc: "Master Java, Spring Boot & enterprise apps.",
    duration: "5 Months",
    level: "Intermediate",
    stack: "Java, Spring, MySQL",
  },
  {
    id: "data-science",
    title: "Python with Data Science",
    desc: "Data analysis, ML basics & real datasets.",
    duration: "4 Months",
    level: "Beginner",
    stack: "Python, Pandas, ML",
  },
];

const faqs = [
  {
    q: "Is this course suitable for beginners?",
    a: "Yes, we start from basics and gradually move to advanced topics.",
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes, we provide resume building, mock interviews, and placement support.",
  },
  {
    q: "Is online learning available?",
    a: "Yes, we offer online, offline and hybrid modes.",
  },
];

export default function Courses() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="bg-slate-950 text-slate-200">

      {/* HERO SECTION */}
      <div className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold"
          >
            Industry-Ready
            <span className="block bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              IT Courses
            </span>
          </motion.h1>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg">
            Learn job-oriented skills with real projects and placement support.
          </p>
        </div>
      </div>

      {/* COURSE CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-cyan-400">Courses</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((c) => (
            <motion.div
              key={c.id}
              whileHover={{ y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6
              hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-bold text-white">{c.title}</h3>
              <p className="mt-3 text-slate-400">{c.desc}</p>

              <div className="mt-4 text-sm text-slate-300 space-y-1">
                <p>⏱ {c.duration}</p>
                <p>🎯 {c.level}</p>
                <p>🛠 {c.stack}</p>
              </div>

              <button onClick={() => navigate(`/courses/${c.id}`)} className="mt-6 w-full py-2 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LEARNING PROCESS */}
      <div className="bg-slate-900 py-20">
    <h2 className="text-3xl font-bold text-center mb-12">
        Learning <span className="text-cyan-400">Process</span>
    </h2>

    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {[
        { title: "Concepts", icon: "📘" },
        { title: "Assignments", icon: "📝" },
        { title: "Projects", icon: "💻" },
        { title: "Mock Interviews", icon: "🎯" },
        ].map((step, i) => (
        <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden
            bg-white/5 border border-white/10 rounded-xl p-6 text-center
            hover:border-cyan-400 transition-all duration-300"
        >
            {/* Glow Effect */}
            <div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20
            opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"
            />

            {/* Content */}
            <div className="relative z-10">
            <div
                className="text-4xl mb-4 transform transition duration-300
                group-hover:scale-110"
            >
                {step.icon}
            </div>

            <h3
                className="font-bold text-lg mb-2
                group-hover:text-cyan-400 transition"
            >
                {step.title}
            </h3>

            <p className="text-slate-400 text-sm">
                Structured learning with mentor guidance and real-world examples.
            </p>
            </div>

            {/* Bottom Accent Line */}
            <span
            className="absolute bottom-0 left-0 h-[2px] w-0
            bg-gradient-to-r from-cyan-400 to-violet-500
            group-hover:w-full transition-all duration-500"
            />
        </motion.div>
        ))}
    </div>
      </div>

      {/* PLACEMENT SUPPORT */}
      <div className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Placement <span className="text-cyan-400">Support</span>
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Resume building, mock interviews, aptitude training and continuous placement assistance.
        </p>
      </div>

      <AICourseSuggestion />

      {/* TESTIMONIALS */}
      <div className="bg-slate-900 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Student <span className="text-cyan-400">Testimonials</span>
        </h2>

        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {["Amazing training & support!", "Got placed within 2 months"].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <p className="text-slate-300">“{t}”</p>
              <p className="mt-4 text-sm text-slate-400">— Student</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          FAQs
        </h2>

        {faqs.map((f, i) => (
          <div key={i} className="mb-4 border border-white/10 rounded-lg">
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full text-left px-4 py-3 font-semibold"
            >
              {f.q}
            </button>
            {openFaq === i && (
              <p className="px-4 pb-4 text-slate-400">{f.a}</p>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="py-20 text-center bg-gradient-to-r from-cyan-500 to-violet-600">
        <h2 className="text-3xl font-bold text-black">
          Not sure which course to choose?
        </h2>
        <button onClick={() => navigate("/contact")} className="mt-6 px-10 py-3 bg-black text-white rounded-md font-semibold hover:opacity-90">
          Talk to Counselor
        </button>
      </div>

    </section>
  );
}
