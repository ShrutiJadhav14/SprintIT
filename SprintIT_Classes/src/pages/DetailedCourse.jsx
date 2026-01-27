import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const courseDetailsData = {
  "full-stack": {
    title: "Full Stack Web Development",
    tagline: "Become a job-ready full stack developer",
    duration: "6 Months",
    level: "Beginner to Advanced",
    mode: "Offline / Online",
    stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    overview:
      "This course is designed to transform beginners into industry-ready full stack developers through hands-on projects and real-world problem solving.",
    modules: [
      "Web Fundamentals & Git",
      "Advanced JavaScript",
      "React & Frontend Architecture",
      "Backend with Node & Express",
      "Database Design (MongoDB)",
      "Deployment & Live Projects",
    ],
    careers: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Software Engineer",
    ],
  },

  "java-stack": {
    title: "Java Full Stack Development",
    tagline: "Build enterprise-grade applications",
    duration: "5 Months",
    level: "Intermediate",
    mode: "Offline",
    stack: ["Java", "Spring Boot", "Hibernate", "MySQL"],
    overview:
      "Learn Java full stack development with strong backend foundations and enterprise-level project experience.",
    modules: [
      "Core Java & OOPs",
      "Advanced Java",
      "Spring Boot & REST APIs",
      "Database with MySQL",
      "Mini & Major Projects",
    ],
    careers: ["Java Developer", "Backend Engineer", "Software Engineer"],
  },

  "data-science": {
    title: "Python with Data Science",
    tagline: "Turn data into actionable insights",
    duration: "4 Months",
    level: "Beginner",
    mode: "Offline / Online",
    stack: ["Python", "Pandas", "NumPy", "ML Basics"],
    overview:
      "Learn how to analyze data, build ML models and solve real business problems using Python.",
    modules: [
      "Python Fundamentals",
      "Data Analysis",
      "Statistics for Data Science",
      "Machine Learning Basics",
      "Capstone Project",
    ],
    careers: ["Data Analyst", "Junior Data Scientist", "Business Analyst"],
  },
};

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [showDemo, setShowDemo] = useState(false);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const course = courseDetailsData[courseId];

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Course not found
      </div>
    );
  }

  return (
    <>
      <section className="bg-slate-950 text-slate-200">

        {/* HERO */}
        <div className="relative min-h-[70vh] flex items-center">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold"
            >
              {course.title}
            </motion.h1>

            <p className="mt-6 text-lg text-slate-400">{course.tagline}</p>

            <div className="mt-8 flex justify-center gap-6 text-sm">
              <span>⏳ {course.duration}</span>
              <span>🎯 {course.level}</span>
              <span>📍 {course.mode}</span>
            </div>

            <div className="mt-10 flex justify-center gap-4">
              <button
                onClick={() => setShowDemo(true)}
                className="px-6 py-3 bg-cyan-500 text-black rounded-md font-semibold"
              >
                Book Free Demo
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 border border-white rounded-md"
              >
                Talk to Counselor
              </button>
            </div>
          </div>
        </div>

        {/* OVERVIEW */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">
            Course <span className="text-cyan-400">Overview</span>
          </h2>
          <p className="text-slate-400 max-w-3xl">{course.overview}</p>
        </div>

        {/* MODULES */}
        <div className="bg-slate-900 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {course.modules.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="font-semibold">{m}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TECH STACK */}
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Tools & <span className="text-cyan-400">Technologies</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {course.stack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CAREERS */}
        <div className="bg-slate-900 py-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Career <span className="text-cyan-400">Opportunities</span>
          </h2>
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-6">
            {course.careers.map((c, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ STICKY ENROLL BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-white/10 p-4 flex justify-between items-center z-50">
        <p className="text-sm">🚀 Kickstart your career today</p>
        <button
          onClick={() => setShowDemo(true)}
          className="px-5 py-2 bg-cyan-500 text-black rounded-md font-semibold"
        >
          Book Demo
        </button>
      </div>

      {/* ✅ WHATSAPP FLOAT */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-24 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
      >
        💬
      </a>

      {/* ✅ DEMO MODAL */}
        {showDemo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50">
            {!submitted ? (
            <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-slate-900 p-8 rounded-2xl w-[90%] max-w-md border border-white/10"
            >
                <h3 className="text-2xl font-bold mb-6 text-center">
                Book <span className="text-cyan-400">Free Demo</span>
                </h3>

                <input
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-4 p-3 rounded bg-black border border-white/10
                            focus:border-cyan-400 outline-none"
                />

                <input
                value={course.title}
                disabled
                className="w-full mb-6 p-3 rounded bg-black border border-white/10 text-slate-400"
                />

                <div className="flex gap-4">
                <button
                    onClick={() => setShowDemo(false)}
                    className="w-full border border-white/20 py-2 rounded"
                >
                    Cancel
                </button>

                <button
                    onClick={() => {
                    if (!name.trim()) return;
                    setSubmitted(true);

                    setTimeout(() => {
                        const message = `Hi Sprint IT Academy,%0A
        I booked a free demo for ${course.title}.%0A
        My name is ${name}`;

                        window.location.href = `https://wa.me/919999999999?text=${message}`;
                    }, 2000);
                    }}
                    className="w-full bg-cyan-500 text-black py-2 rounded font-semibold"
                >
                    Submit
                </button>
                </div>
            </motion.div>
            ) : (
            /* ✅ SUCCESS STATE */
            <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-slate-900 p-10 rounded-2xl text-center border border-white/10"
            >
                <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mx-auto w-16 h-16 rounded-full bg-cyan-500
                            flex items-center justify-center text-black text-3xl mb-6"
                >
                ✓
                </motion.div>

                <h4 className="text-xl font-bold mb-2">
                Demo Booked Successfully!
                </h4>
                <p className="text-slate-400">
                Redirecting to WhatsApp...
                </p>
            </motion.div>
            )}
        </div>
        )}

    </>
  );
}
