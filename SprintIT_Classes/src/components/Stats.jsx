const stats = [
  { value: "12K+", label: "Students Trained" },
  { value: "30+", label: "IT Courses" },
  { value: "60+", label: "Expert Mentors" },
  { value: "100%", label: "Placement Support" },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center
                       hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <h2 className="text-3xl font-bold text-cyan-400">{s.value}</h2>
            <p className="mt-2 text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
