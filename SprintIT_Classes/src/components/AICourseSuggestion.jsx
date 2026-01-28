import { useState } from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: "sql-plsql",
    name: "SQL / PLSQL Developer",
    tags: ["database", "sql", "backend", "it"],
    level: "beginner",
  },
  {
    id: "dotnet-fullstack",
    name: ".NET Full Stack Developer",
    tags: ["dotnet", "backend", "enterprise", "it"],
    level: "advanced",
  },
  {
    id: "java-fullstack",
    name: "Java Full Stack Developer",
    tags: ["java", "backend", "web", "it"],
    level: "advanced",
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    tags: ["data", "bigdata", "backend", "it"],
    level: "advanced",
  },
  {
    id: "frontend",
    name: "Frontend Developer",
    tags: ["frontend", "web", "ui", "coding"],
    level: "beginner",
  },
  {
    id: "etl-developer",
    name: "ETL Developer",
    tags: ["data", "etl", "backend", "it"],
    level: "intermediate",
  },
  {
    id: "microsoft-tech",
    name: "Microsoft Technologies",
    tags: ["dotnet", "backend", "it"],
    level: "beginner",
  },
  {
    id: "salesforce",
    name: "Salesforce Engineer",
    tags: ["crm", "cloud", "enterprise", "it"],
    level: "beginner",
  },
  {
    id: "python-fullstack",
    name: "Python Full Stack Developer",
    tags: ["python", "web", "backend", "coding"],
    level: "advanced",
  },
];

export default function AICourseSuggestion() {
  const navigate = useNavigate();

  const [interest, setInterest] = useState("");
  const [background, setBackground] = useState("");
  const [experience, setExperience] = useState("");
  const [results, setResults] = useState([]);

  const suggestCourse = () => {
    const scoredCourses = courses.map((course) => {
      let score = 0;

      if (course.tags.includes(interest)) score += 3;
      if (course.tags.includes(background)) score += 1;

      if (experience === course.level) score += 2;
      if (experience === "beginner" && course.level === "beginner") score += 1;

      return { ...course, score };
    });

    const topTwo = scoredCourses
      .sort((a, b) => b.score - a.score)
      .slice(0, 2);

    setResults(topTwo);
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          🤖 AI Course Recommendation
        </h2>
        <p className="text-center text-slate-400 mb-10">
          Get the top 2 courses best suited for your profile
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <select
            onChange={(e) => setInterest(e.target.value)}
            className="bg-black border border-white/10 p-3 rounded"
          >
            <option value="">Primary Interest</option>
            <option value="web">Web Development</option>
            <option value="frontend">Frontend / UI</option>
            <option value="backend">Backend</option>
            <option value="data">Data / Analytics</option>
            <option value="sql">Databases</option>
            <option value="cloud">Cloud / CRM</option>
          </select>

          <select
            onChange={(e) => setBackground(e.target.value)}
            className="bg-black border border-white/10 p-3 rounded"
          >
            <option value="">Educational Background</option>
            <option value="it">IT / CS</option>
            <option value="non-it">Non-IT</option>
          </select>

          <select
            onChange={(e) => setExperience(e.target.value)}
            className="bg-black border border-white/10 p-3 rounded"
          >
            <option value="">Experience Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={suggestCourse}
            className="px-10 py-3 bg-cyan-500 text-black rounded-md font-semibold"
          >
            Suggest Courses
          </button>
        </div>

     {results.length > 0 && (
  <div className="mt-14 grid md:grid-cols-2 gap-6">
    {results.map((course, i) => {
      const isBest = i === 0;

      return (
        <div
          key={course.id}
          className={`relative p-8 rounded-xl text-center border
            ${isBest
              ? "bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border-cyan-400 shadow-lg shadow-cyan-500/20"
              : "bg-white/5 border-white/10"
            }`}
        >
          {/* BEST CHOICE BADGE */}
          {isBest && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2
              bg-cyan-500 text-black text-xs font-bold px-4 py-1 rounded-full">
              ⭐ Best Choice
            </span>
          )}

          <span className="text-sm text-slate-400">
            Rank #{i + 1}
          </span>

          <h3
            className={`text-xl font-bold mt-3 mb-5
              ${isBest ? "text-cyan-300" : "text-white"}
            `}
          >
            {course.name}
          </h3>

          <button
            onClick={() => navigate(`/courses/${course.id}`)}
            className={`px-6 py-2 rounded-md font-semibold transition
              ${isBest
                ? "bg-cyan-500 text-black hover:bg-cyan-400"
                : "bg-violet-500 hover:bg-violet-400"
              }`}
          >
            View Course Details
          </button>
        </div>
      );
    })}
  </div>
)}

      </div>
    </section>
  );
}
