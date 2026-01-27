import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const recommended = courses.find((c) => c.id === bestMatch);
    setResult(recommended);
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          🤖 AI Course Recommendation
        </h2>
        <p className="text-center text-slate-400 mb-10">
          Answer a few questions and let AI suggest the best course for you
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <select
            onChange={(e) => setInterest(e.target.value)}
            className="bg-black border border-white/10 p-3 rounded"
          >
            <option value="">Your Interest</option>
            <option value="coding">Coding</option>
            <option value="data">Data / Analytics</option>
            <option value="java">Java Backend</option>
            <option value="web">Web Development</option>
          </select>

          <select
            onChange={(e) => setBackground(e.target.value)}
            className="bg-black border border-white/10 p-3 rounded"
          >
            <option value="">Your Background</option>
            <option value="it">IT / CS</option>
            <option value="non-it">Non-IT</option>
          </select>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={suggestCourse}
            className="px-8 py-3 bg-cyan-500 text-black rounded-md font-semibold"
          >
            Suggest Course
          </button>
        </div>

        {result && (
          <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">
              🎯 Best Match for You
            </h3>
            <p className="text-cyan-400 text-lg mb-4">
              {result.name}
            </p>

            <button
              onClick={() => navigate(`/courses/${result.id}`)}
              className="px-6 py-2 bg-violet-500 rounded-md"
            >
              View Course Details
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
