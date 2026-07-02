import React, { useState } from "react";
import Modal from "./Modal";

/** The glow class maps a category id to a CSS class defined in index.css */
const GLOW = {
  ai:       "card-glow-ai",
  cloud:    "card-glow-cloud",
  devops:   "card-glow-devops",
  security: "card-glow-security",
  projects: "card-glow-projects",
};

const CategoryCard = ({ category, onClick }) => (
  <div
    className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/10 hover:border-white/20 ${GLOW[category.id] || ""} flex flex-col h-full`}
    onClick={() => onClick(category)}
    role="button"
    aria-label={`Explore ${category.title}`}
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick(category)}
  >
    {/* Gradient icon badge */}
    <div
      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl mb-5 shadow-lg flex-shrink-0`}
    >
      {category.icon}
    </div>

    <h3 className="text-base font-bold text-white mb-1">{category.title}</h3>
    <p className="text-xs text-gray-400 leading-relaxed mb-4">{category.subtitle}</p>

    {/* Footer row */}
    <div className="mt-auto flex items-center justify-between">
      <span
        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${category.color} text-white`}
      >
        {category.projects.length} Project{category.projects.length !== 1 ? "s" : ""}
      </span>
      <span className="text-gray-500 text-sm">→</span>
    </div>
  </div>
);

const CategoryGrid = ({ categories }) => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">
            Domain Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What I Build
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Click any domain to explore the real-world systems and platforms I've
            engineered across companies.
          </p>
        </div>

        {/* Cards — flex wrap centres the bottom row automatically */}
        <div className="flex flex-wrap justify-center gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] max-w-sm"
            >
              <CategoryCard category={cat} onClick={setSelected} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal portal — rendered outside the grid container */}
      {selected && (
        <Modal category={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default CategoryGrid;
