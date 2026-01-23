const courses = [
  "Full Stack Development",
  "Data Science & AI",
  "AWS & Cloud",
  "Cyber Security",
  "UI/UX Design",
  "Software Testing",
];

export default function Courses() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-slate-100">
          Popular <span className="text-cyan-400">Courses</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-8
                         hover:-translate-y-3 hover:border-cyan-500
                         hover:shadow-xl hover:shadow-cyan-500/20 transition"
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                {course}
              </h3>
              <p className="text-slate-400 text-sm">
                Hands-on training with real-world projects and certification.
              </p>

              <button className="mt-6 text-cyan-400 font-medium hover:underline">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
