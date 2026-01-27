import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookDemoModal({ course = "Full Stack Web Development", onClose }) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    setSubmitted(true);

    // ⏳ Wait for animation, then redirect to WhatsApp
    setTimeout(() => {
      const message = `Hi Sprint IT Academy,%0A
I booked a free demo for ${course}.%0A
My name is ${name}`;

      window.location.href = `https://wa.me/91XXXXXXXXXX?text=${message}`;
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
      <AnimatePresence>
        {!submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-950 border border-white/10 rounded-2xl p-8 w-full max-w-md text-slate-200"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Book <span className="text-cyan-400">Free Demo</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-slate-900 border border-white/10
                focus:border-cyan-400 outline-none"
              />

              <input
                type="text"
                value={course}
                disabled
                className="w-full px-4 py-3 rounded-md bg-slate-900 border border-white/10
                text-slate-400"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-cyan-400 text-black
                font-semibold hover:bg-cyan-300 transition"
              >
                Submit & Book Demo
              </button>
            </form>

            <button
              onClick={onClose}
              className="mt-4 text-sm text-slate-400 hover:text-white block mx-auto"
            >
              Cancel
            </button>
          </motion.div>
        ) : (
          /* ✅ SUCCESS ANIMATION */
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-950 border border-white/10 rounded-2xl p-10 text-center text-slate-200"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mx-auto w-16 h-16 rounded-full bg-cyan-400
              flex items-center justify-center text-black text-3xl mb-6"
            >
              ✓
            </motion.div>

            <h3 className="text-xl font-bold mb-2">
              Demo Booked Successfully!
            </h3>
            <p className="text-slate-400">
              Redirecting you to WhatsApp...
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
