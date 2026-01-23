import { useEffect, useState } from "react";

/* Images */
import p1 from "../assets/images/placement1.jpg";
import p2 from "../assets/images/placement2.jpg";
import p3 from "../assets/images/placement3.jpg";
import p4 from "../assets/images/placement4.jpg";
import p5 from "../assets/images/placement5.jpg";

/* Gallery Images */
const galleryImages = [p1, p2, p3, p4, p5];

/* Placement Stats */
const placementData = [
  { company: "TCS", count: "120+" },
  { company: "Infosys", count: "95+" },
  { company: "Capgemini", count: "80+" },
  { company: "Accenture", count: "70+" },
  { company: "Wipro", count: "60+" },
  { company: "Cognizant", count: "55+" },
];

/* Student Reviews */
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

const Placement = () => {
  /* Gallery Slider */
  const [current, setCurrent] = useState(0);
  const [pauseGallery, setPauseGallery] = useState(false);

  /* Auto slide gallery */
  useEffect(() => {
    if (pauseGallery) return;

    const timer = setTimeout(() => {
      setCurrent((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [current, pauseGallery]);

  return (
    <section className="min-h-screen px-6 py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold">
          Our <span className="text-[var(--accent)]">Placements</span>
        </h1>
        <p className="mt-4 text-gray-400">
          We help our students get placed in top IT companies with industry-ready skills.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {placementData.map((item, index) => (
          <div
            key={index}
            className="group bg-[#0f172a] border border-white/10 rounded-xl p-8
            hover:border-[var(--accent)] transition-all duration-300
            hover:-translate-y-2 hover:shadow-lg hover:shadow-black/50"
          >
            <h2 className="text-3xl font-extrabold text-[var(--accent)]">
              {item.count}
            </h2>
            <p className="mt-2 text-lg font-semibold group-hover:text-white transition">
              Students Placed
            </p>
            <p className="mt-1 text-sm text-gray-400">
              in {item.company}
            </p>
          </div>
        ))}
      </div>

      {/* Placement Gallery */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-10">
          Placement <span className="text-[var(--accent)]">Gallery</span>
        </h2>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPauseGallery(true)}
          onMouseLeave={() => setPauseGallery(false)}
        >
          <div className="relative h-[260px] sm:h-[360px] rounded-xl overflow-hidden border border-white/10">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Placement"
                className={`absolute inset-0 w-full h-full object-cover
                transition-all duration-700 ease-in-out
                ${
                  index === current
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-110 z-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20" />
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-4 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-[var(--accent)] scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Student Reviews */}
      <ReviewSlider />

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Start Your <span className="text-[var(--accent)]">Placement Journey</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Join our IT training programs and get placement assistance till you succeed.
        </p>

        <button
          className="mt-8 px-10 py-3 rounded-md font-semibold
          bg-[var(--accent)] text-black
          hover:bg-[var(--accent-glow)] transition"
        >
          Enroll Now
        </button>
      </div>
    </section>

  );
};

/* ⭐ Review Slider Component */
const ReviewSlider = () => {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const timer = setTimeout(() => {
      setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearTimeout(timer);
  }, [index, pause]);

  return (
    <div
      className="mt-28 max-w-4xl mx-auto px-4"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Student <span className="text-[var(--accent)]">Reviews</span>
      </h2>

      <div className="relative overflow-hidden">
        {reviews.map((item, i) => (
          <div
            key={i}
            className={`transition-all duration-700 ease-in-out
            ${
              i === index
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10 absolute inset-0"
            }`}
          >
            <div
                className="group bg-white/5 backdrop-blur-md border border-white/10
                rounded-2xl p-8 text-center
                shadow-lg shadow-black/40
                transition-all duration-300
                hover:-translate-y-2 hover:scale-[1.02]
                hover:border-[var(--accent)]
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
            >

              <div className="text-yellow-400 mb-4 transition group-hover:scale-110">★★★★★</div>
              <p className="text-gray-300 text-lg">“{item.review}”</p>
              <div className="mt-6">
                <h4 className="font-bold text-white">{item.name}</h4>
                <p className="text-sm text-gray-400">
                  {item.role} · {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i
                ? "bg-[var(--accent)] scale-125"
                : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Placement;
