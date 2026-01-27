import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fields = [
    { name: "name", label: "Your Name", type: "text" },
    { name: "email", label: "Your Email", type: "email" },
    { name: "subject", label: "Subject", type: "text" },
    { name: "message", label: "Your Message", type: "textarea" },
  ];

  return (
    <>

      <section className="relative min-h-screen bg-slate-950 flex items-center justify-center py-24 overflow-hidden">

        {/* 🌊 Animated SVG Waves */}
        <motion.svg
          className="absolute bottom-0 left-0 w-full h-40 opacity-20"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <path
            fill="url(#gradient)"
            d="M0,224L60,224C120,224,240,224,360,197.3C480,171,600,117,720,122.7C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* 🌌 Floating Particles */}
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-16 left-16 w-20 h-20 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="absolute bottom-32 right-32 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl w-full px-6"
        >
          <h1 className="text-5xl font-extrabold text-center text-slate-100 mb-6">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-center text-slate-400 mb-12">
            Have questions or want to join Sprint IT Academy? Fill out the form below and our team will get back to you.
          </p>

          {/* Animated Glass Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-10 shadow-lg shadow-cyan-500/20 flex flex-col gap-6 relative z-10"
          >
            {fields.map((field, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative"
              >
                {field.type !== "textarea" ? (
                  <input
                    type={field.type}
                    required
                    placeholder=" "
                    className="peer p-4 pt-6 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 w-full
                               focus:ring-2 focus:ring-cyan-400 outline-none transition"
                  />
                ) : (
                  <textarea
                    rows="5"
                    required
                    placeholder=" "
                    className="peer p-4 pt-6 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 w-full
                               focus:ring-2 focus:ring-cyan-400 outline-none transition resize-none"
                  />
                )}
                <label className="absolute left-4 top-4 text-slate-400 text-sm transition-all
                                   peer-placeholder-shown:top-6 peer-placeholder-shown:text-slate-400
                                   peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-cyan-400 peer-focus:text-sm">
                  {field.label}
                </label>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black font-semibold py-4 rounded-xl shadow-lg shadow-cyan-500/30 mt-4"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Success Toast */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-10 right-10 bg-cyan-500/90 text-black px-6 py-4 rounded-xl shadow-lg shadow-cyan-500/40"
            >
              Message Sent Successfully!
            </motion.div>
          )}
        </motion.div>
      </section>

    </>
  );
}
