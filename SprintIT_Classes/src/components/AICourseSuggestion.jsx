import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const courses = [
  {
    id: "full-stack",
    name: "Full Stack Web Development",
    tags: ["coding", "web", "frontend", "backend", "it"],
  },
  {
    id: "java-stack",
    name: "Java Full Stack Development",
    tags: ["java", "backend", "enterprise", "it"],
  },
  {
    id: "data-science",
    name: "Python with Data Science",
    tags: ["python", "data", "analytics", "ml", "it"],
  },
];

export default function AICourseSuggestion() {
  const navigate = useNavigate();
  const [interest, setInterest] = useState("");
  const [background, setBackground] = useState("");
  const [result, setResult] = useState(null);

  const suggestCourse = () => {
    let scores = {};

    courses.forEach((course) => {
      scores[course.id] = 0;
      if (course.tags.includes(interest)) scores[course.id] += 2;
      if (course.tags.includes(background)) scores[course.id] += 1;
    });

    const bestMatch = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    setResult(courses.find((c) => c.id === bestMatch));
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          🤖 AI Course Recommendation
        </motion.h2>

        <p className="text-center text-slate-400 mb-12">
          Answer a few questions and let AI guide your career path
        </p>

        {/* Inputs */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <select
            onChange={(e) => setInterest(e.target.value)}
            className="bg-black border border-white/10 p-4 rounded-lg focus:outline-none
                       focus:border-cyan-400 transition"
          >
            <option value="">Select Your Interest</option>
            <option value="coding">Coding</option>
            <option value="web">Web Development</option>
            <option value="java">Java Backend</option>
            <option value="data">Data / Analytics</option>
          </select>

          <select
            onChange={(e) => setBackground(e.target.value)}
            className="bg-black border border-white/10 p-4 rounded-lg focus:outline-none
                       focus:border-cyan-400 transition"
          >
            <option value="">Your Background</option>
            <option value="it">IT / CS</option>
            <option value="non-it">Non-IT</option>
          </select>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            disabled={!interest || !background}
            onClick={suggestCourse}
            className={`px-10 py-4 rounded-xl font-semibold transition
              ${
                interest && background
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-black shadow-lg"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }`}
          >
            Suggest Best Course 🚀
          </motion.button>
        </div>

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-14 bg-white/5 border border-white/10 rounded-2xl p-8 text-center
                       hover:border-cyan-400/60 transition relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 blur-2xl rounded-2xl" />

            <div className="relative">
              <h3 className="text-xl font-bold mb-2">🎯 Best Match for You</h3>
              <p className="text-2xl font-extrabold text-cyan-400 mb-6">
                {result.name}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(`/courses/${result.id}`)}
                className="px-8 py-3 bg-violet-500 rounded-lg font-semibold"
              >
                View Course Details →
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
