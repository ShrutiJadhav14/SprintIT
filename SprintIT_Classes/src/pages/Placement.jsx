import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* Images */
import p1 from "../assets/images/placement1.jpg";
import p2 from "../assets/images/placement2.jpg";
import p3 from "../assets/images/placement3.jpg";
import p4 from "../assets/images/placement4.jpg";
import p5 from "../assets/images/placement5.jpg";
import { useNavigate } from "react-router-dom";

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isInView || hasRun.current) return;

    hasRun.current = true;

    let start = 0;
    const duration = 800;
    const step = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}+</span>;
}

const galleryImages = [p1, p2, p3, p4, p5];

const placementStats = [
  { title: "Total Students Placed", value: 300, animated: true },
  { title: "Hiring Companies", value: "50+" },
  { title: "Placement Success Rate", value: "95%" },
];



const reviews = [
  {
    name: "Amit Patil",
    role: "Full Stack Developer",
    company: "TCS",
    review:
      "The training was completely industry-focused. Mock interviews and projects helped me crack my first IT job.",
  },
  {
    name: "Sneha Kulkarni",
    role: "React Developer",
    company: "Infosys",
    review:
      "Best decision of my career. Trainers explained concepts clearly and placement support was excellent.",
  },
  {
    name: "Rahul Deshmukh",
    role: "Java Developer",
    company: "Capgemini",
    review:
      "Real-time projects and resume guidance made a big difference. Highly recommended for freshers.",
  },
];

export default function Placement() {
  const [current, setCurrent] = useState(0);
  const [pauseGallery, setPauseGallery] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [pauseReview, setPauseReview] = useState(false);
  const placementProcess = [
  {
    step: "01",
    title: "Skill Training",
    desc: "Industry-focused training with real-time projects & mentorship",
  },
  {
    step: "02",
    title: "Mock Interviews",
    desc: "Technical + HR mock interviews with expert feedback",
  },
  {
    step: "03",
    title: "Resume & Profile",
    desc: "ATS-friendly resume & LinkedIn profile optimization",
  },
  {
    step: "04",
    title: "Placement Support",
    desc: "Interview scheduling and company referrals till placement",
  },
];

  /* Auto Gallery */
  useEffect(() => {
    if (pauseGallery) return;
    const timer = setTimeout(
      () => setCurrent((p) => (p + 1) % galleryImages.length),
      2000
    );
    return () => clearTimeout(timer);
  }, [current, pauseGallery]);

  /* Auto Reviews */
  useEffect(() => {
    if (pauseReview) return;
    const timer = setTimeout(
      () => setReviewIndex((p) => (p + 1) % reviews.length),
      2500
    );
    return () => clearTimeout(timer);
  }, [reviewIndex, pauseReview]);

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const navigate = useNavigate();



  return (
    <>
      {/* HERO */}
      <motion.section
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.8 }}
       className="relative min-h-[80vh] bg-slate-950 flex items-center overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-100"
          >
            Our
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Placement Success
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-3xl mx-auto text-lg text-slate-400"
          >
            Industry-ready training with proven placement records across top IT
            companies.
          </motion.p>
        </div>
      </motion.section>
       <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="px-6 py-24 relative"
>
  {/* soft glow */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[200px] bg-[var(--accent)]/10 blur-3xl" />

  <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-10 text-center hover:border-[var(--accent)] transition">
      <h2 className="text-5xl font-extrabold text-[var(--accent)]">
        <Counter value={300} />
      </h2>
      <p className="mt-4 text-gray-300 font-semibold">
        Total Students Placed
      </p>
    </div>

    <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-10 text-center hover:border-[var(--accent)] transition">
      <h2 className="text-5xl font-extrabold text-[var(--accent)]">50+</h2>
      <p className="mt-4 text-gray-300 font-semibold">
        Hiring Companies
      </p>
    </div>

    <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-10 text-center hover:border-[var(--accent)] transition">
      <h2 className="text-5xl font-extrabold text-[var(--accent)]">95%</h2>
      <p className="mt-4 text-gray-300 font-semibold">
        Placement Success Rate
      </p>
    </div>
  </div>
</motion.section>

<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="px-6 py-16"
>
  <div className="max-w-6xl mx-auto bg-[#0b1220] border border-white/10 rounded-2xl p-10 text-center">
    <p className="text-gray-400 mb-8">
      Our students are placed in leading IT companies
    </p>

    <div className="flex flex-wrap justify-center gap-10 text-lg font-semibold text-gray-300">
      <span className="hover:text-[var(--accent)] transition">TCS</span>
      <span className="hover:text-[var(--accent)] transition">Infosys</span>
      <span className="hover:text-[var(--accent)] transition">Capgemini</span>
      <span className="hover:text-[var(--accent)] transition">Accenture</span>
      <span className="hover:text-[var(--accent)] transition">Wipro</span>
      <span className="text-gray-500">+ many more</span>
    </div>
  </div>
</motion.section>


    {/* Placement Gallery */}
    <motion.section
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}  
     className="px-6 py-24">
    <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
    >
        Placement <span className="text-[var(--accent)]">Gallery</span>
    </motion.h2>

    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setPauseGallery(true)}
        onMouseLeave={() => setPauseGallery(false)}
    >
        {/* Image Container */}
        <div className="relative h-[260px] sm:h-[360px] rounded-xl overflow-hidden border border-white/10">
        {galleryImages.map((img, i) => (
            <motion.img
            key={i}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700
            ${i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"}`}
            />
        ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-8">
        {galleryImages.map((_, i) => (
            <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
                current === i
                ? "bg-[var(--accent)] scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
            />
        ))}
        </div>
    </motion.div>
    </motion.section>

    {/* PLACEMENT PROCESS */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="px-6 py-24 bg-white/5"
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mb-16"
  >
    Placement <span className="text-[var(--accent)]">Process</span>
  </motion.h2>

  <div className="max-w-4xl mx-auto space-y-10">
    {placementProcess.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex gap-6 items-start"
      >
        {/* Step Circle */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full
          bg-[var(--accent)] text-black
          flex items-center justify-center font-bold text-lg">
          {item.step}
        </div>

        {/* Content */}
        <div className="bg-[#0f172a] border border-white/10 rounded-xl p-6
          hover:border-[var(--accent)]
          transition-all duration-300 w-full">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-400">{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

      {/* REVIEWS */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      className="px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Student <span className="text-[var(--accent)]">Reviews</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex items-center justify-center gap-6"
          onMouseEnter={() => setPauseReview(true)}
          onMouseLeave={() => setPauseReview(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={prevReview}
            className="text-[var(--accent)] text-3xl px-3 hover:scale-110 transition"
          >
            ‹
          </button>

          <div className="w-full relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8
                  text-center backdrop-blur-md
                  hover:-translate-y-2 hover:scale-[1.02]
                  hover:border-[var(--accent)]
                  transition-all mx-auto max-w-xl"
              >
                <div className="text-yellow-400 mb-4">★★★★★</div>
                <p className="text-gray-300 text-lg">“{reviews[reviewIndex].review}”</p>
                <div className="mt-6">
                  <h4 className="font-bold">{reviews[reviewIndex].name}</h4>
                  <p className="text-sm text-gray-400">
                    {reviews[reviewIndex].role} · {reviews[reviewIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextReview}
            className="text-[var(--accent)] text-3xl px-3 hover:scale-110 transition"
          >
            ›
          </button>
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
       className="mt-24 text-center px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">
          Start Your <span className="text-[var(--accent)]">Placement Journey</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Join our IT training programs and get placement assistance till you succeed.
        </p>

        <button
          onClick={() => navigate("/courses")}
          className="mt-8 px-10 py-3 rounded-md font-semibold
          bg-[var(--accent)] text-black
          hover:bg-[var(--accent-glow)] transition"
        >
          Enroll Now
        </button>
      </motion.section>
    </>
  );
}
