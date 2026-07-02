import React from "react";

const TechStack = ({ techStack }) => {
  // Derive unique ordered categories from the data array
  const categories = [...new Set(techStack.map((t) => t.category))];

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">
            Tools &amp; Technologies
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Tech Stack</h2>
        </div>

        <div className="space-y-5">
          {categories.map((cat) => (
            <div key={cat} className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start gap-2 sm:gap-3">
              {/* Category label */}
              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest w-full sm:w-24 flex-shrink-0 sm:mt-2">
                {cat}
              </span>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {techStack
                  .filter((t) => t.category === cat)
                  .map((tech, i) => (
                    <span
                      key={i}
                      className="glass-card px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default flex items-center gap-1.5"
                    >
                      <span className="text-base leading-none">{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
