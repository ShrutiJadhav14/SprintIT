import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const courseDetailsData = {
  "sql-plsql": {
    title: "SQL / PLSQL Developer",
    tagline: "Master database programming & optimization",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    mode: "Offline / Online",
    stack: ["SQL", "PLSQL", "Oracle", "Joins", "Indexes"],
    overview:
      "This course focuses on database concepts, advanced SQL queries, stored procedures, functions and performance tuning used in real enterprise projects.",
    modules: [
      "Database Fundamentals",
      "Advanced SQL Queries",
      "PLSQL Programming",
      "Procedures & Functions",
      "Triggers & Cursors",
      "Performance Tuning",
    ],
    careers: ["SQL Developer", "PLSQL Developer", "Database Analyst"],
  },

  "dotnet-fullstack": {
    title: ".NET Full Stack Developer",
    tagline: "Build powerful enterprise applications",
    duration: "5 Months",
    level: "Intermediate",
    mode: "Offline",
    stack: ["C#", "ASP.NET Core", "SQL Server", "React"],
    overview:
      "Learn Microsoft’s full stack development using modern frameworks and enterprise architecture.",
    modules: [
      "C# & OOPs",
      "ASP.NET Core MVC",
      "Web APIs",
      "Frontend with React",
      "SQL Server",
      "Live Project",
    ],
    careers: [".NET Developer", "Full Stack Developer", "Software Engineer"],
  },

  "java-fullstack": {
    title: "Java Full Stack Developer",
    tagline: "Enterprise-grade Java development",
    duration: "5 Months",
    level: "Beginner to Advanced",
    mode: "Offline / Online",
    stack: ["Java", "Spring Boot", "Hibernate", "React", "MySQL"],
    overview:
      "Become a job-ready Java Full Stack Developer with hands-on enterprise projects.",
    modules: [
      "Core Java",
      "Advanced Java",
      "Spring Boot & REST APIs",
      "Frontend with React",
      "Database Integration",
      "Capstone Project",
    ],
    careers: ["Java Developer", "Backend Engineer", "Full Stack Developer"],
  },

  "data-engineering": {
    title: "Data Engineering",
    tagline: "Build scalable data pipelines",
    duration: "6 Months",
    level: "Intermediate",
    mode: "Offline / Online",
    stack: ["Python", "Spark", "Hadoop", "SQL", "Cloud"],
    overview:
      "Learn to design, build and manage big data systems used by modern enterprises.",
    modules: [
      "Python for Data",
      "SQL & Data Warehousing",
      "ETL Pipelines",
      "Big Data (Hadoop & Spark)",
      "Cloud Data Platforms",
    ],
    careers: ["Data Engineer", "Big Data Engineer", "ETL Engineer"],
  },

  "frontend": {
    title: "Frontend Developer",
    tagline: "Create modern, responsive web interfaces",
    duration: "3 Months",
    level: "Beginner",
    mode: "Offline / Online",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    overview:
      "Learn to build beautiful, fast and responsive user interfaces using modern frontend tools.",
    modules: [
      "HTML & CSS",
      "JavaScript Fundamentals",
      "Responsive Design",
      "React Basics",
      "Mini Projects",
    ],
    careers: ["Frontend Developer", "UI Developer", "Web Designer"],
  },

  "etl-developer": {
    title: "ETL Developer",
    tagline: "Enterprise data integration specialist",
    duration: "4 Months",
    level: "Intermediate",
    mode: "Offline",
    stack: ["Informatica", "SQL", "Data Warehousing"],
    overview:
      "Learn ETL concepts, data integration, transformation logic and real-time data workflows.",
    modules: [
      "Data Warehousing Concepts",
      "ETL Architecture",
      "Informatica PowerCenter",
      "SQL for ETL",
      "Real-Time ETL Scenarios",
    ],
    careers: ["ETL Developer", "Data Engineer", "BI Developer"],
  },

  "microsoft-tech": {
    title: "Microsoft Technologies",
    tagline: "Enterprise development with Microsoft stack",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    mode: "Offline",
    stack: ["C#", ".NET", "SQL Server", "Azure"],
    overview:
      "Master core Microsoft technologies used in enterprise software development.",
    modules: [
      "C# Fundamentals",
      ".NET Framework",
      "SQL Server",
      "Azure Basics",
      "Mini Project",
    ],
    careers: ["Software Developer", ".NET Engineer"],
  },

  "salesforce": {
    title: "Salesforce Engineer",
    tagline: "Build & customize cloud CRM solutions",
    duration: "4 Months",
    level: "Beginner",
    mode: "Offline / Online",
    stack: ["Salesforce", "Apex", "LWC", "CRM"],
    overview:
      "Learn Salesforce administration, development and automation with real business use cases.",
    modules: [
      "Salesforce Basics",
      "Admin & Configuration",
      "Apex Programming",
      "Lightning Web Components",
      "Real-Time Projects",
    ],
    careers: ["Salesforce Developer", "CRM Consultant"],
  },

  "python-fullstack": {
    title: "Python Full Stack Developer",
    tagline: "End-to-end development with Python",
    duration: "5 Months",
    level: "Beginner to Advanced",
    mode: "Offline / Online",
    stack: ["Python", "Django", "React", "PostgreSQL"],
    overview:
      "Become a full stack developer using Python frameworks and modern frontend tools.",
    modules: [
      "Python Fundamentals",
      "Django Framework",
      "REST APIs",
      "Frontend with React",
      "Deployment & Project",
    ],
    careers: ["Python Developer", "Full Stack Developer"],
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
