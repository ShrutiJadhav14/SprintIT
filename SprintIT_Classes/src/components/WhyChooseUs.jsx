export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-8 text-slate-100">
            Why <span className="text-violet-400">Sprint IT Academy?</span>
          </h2>

          <ul className="space-y-5 text-slate-300">
            {[
              "Industry-designed curriculum",
              "Live projects & case studies",
              "1-on-1 mentor support",
              "Resume & interview prep",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <img
          className="rounded-2xl shadow-2xl shadow-violet-500/20"
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
          alt=""
        />
      </div>
    </section>
  );
}
