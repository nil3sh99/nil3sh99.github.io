import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/** A single project card rendered inside the drawer */
const ProjectCard = ({ project }) => (
  <div className="glass-card rounded-xl p-4 hover:bg-white/10 transition-colors duration-200">
    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
      <div className="min-w-0">
        <h4 className="text-sm font-semibold text-white leading-snug">
          {project.title}
        </h4>
        <span className="text-xs text-indigo-300 font-medium mt-0.5 block">
          {project.company} · {project.year}
        </span>
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-2 flex-shrink-0 transition-colors duration-200"
        >
          View ↗
        </a>
      )}
    </div>

    <p className="text-sm text-gray-400 leading-relaxed mb-2">
      {project.description}
    </p>

    {/* Impact callout */}
    <div className="mb-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
      <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wide">
        Impact:{" "}
      </span>
      <span className="text-xs text-gray-300">{project.impact}</span>
    </div>

    {/* Tech tags */}
    <div className="flex flex-wrap gap-1.5">
      {project.tags.map((tag, i) => (
        <span
          key={i}
          className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Drawer = ({ category, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const scrollRef = useRef(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  // Escape key — do NOT lock body scroll so main page position is preserved
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset drawer scroll to top whenever a new category opens
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [category]);

  return createPortal(
    <div
      className={`drawer-overlay ${isClosing ? "drawer-overlay-exit" : "drawer-overlay-enter"}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
      aria-label={`${category.title} projects`}
    >
      {/* Backdrop blur layer */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* ── Drawer panel ──
          Desktop: fixed to the right edge, full viewport height
          Mobile:  fixed to the bottom edge, full viewport width, max 85vh tall
      */}
      <div
        className={`drawer-panel ${isClosing ? "drawer-panel-exit" : "drawer-panel-enter"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle hint */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* ── Header ── */}
        <div
          className={`flex items-center justify-between px-5 py-4 border-b border-white/10 bg-gradient-to-r ${category.color} flex-shrink-0`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-2xl flex-shrink-0">{category.icon}</span>
            <div className="min-w-0">
              <h2 className="text-base font-bold text-white leading-tight truncate">
                {category.title}
              </h2>
              <p className="text-white/70 text-xs mt-0.5 truncate">
                {category.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-black/25 hover:bg-black/45 flex items-center justify-center text-white text-sm font-bold transition-colors duration-200 flex-shrink-0 ml-3"
            aria-label="Close drawer"
          >
            ✕
          </button>
        </div>

        {/* ── Scrollable project list ── */}
        <div
          ref={scrollRef}
          className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5 space-y-3"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <p className="text-xs text-gray-500 mb-4">
            {category.projects.length} project{category.projects.length !== 1 ? "s" : ""} · Scroll to explore
          </p>
          {category.projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Drawer;
