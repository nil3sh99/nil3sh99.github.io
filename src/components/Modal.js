import React, { useEffect, useState } from "react";

/** A single project card rendered inside the modal. */
const ProjectCard = ({ project }) => (
  <div className="glass-card rounded-xl p-4 sm:p-5 hover:bg-white/10 transition-colors duration-200">
    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
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

    <p className="text-sm text-gray-400 leading-relaxed mb-3">
      {project.description}
    </p>

    {/* Impact callout */}
    <div className="mb-3 px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
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

const Modal = ({ category, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 220);
  };

  // Escape key + lock body scroll (preserve scroll position so page doesn't jump)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);

    // Freeze the page at its current scroll position without jumping to top
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll"; // prevent layout shift from scrollbar disappearing

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      // Restore the scroll position the user was at
      window.scrollTo(0, scrollY);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 ${
        isExiting ? "overlay-exit" : "overlay-enter"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      onClick={handleClose}
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Modal panel
          - w-full + max-w-2xl: fills narrow screens, capped on wide ones
          - max-h-[90vh]: never taller than 90% of the viewport
          - flex flex-col + overflow-hidden: lets header/footer stay fixed, list scrolls
      */}
      <div
        className={`relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col glass-card rounded-2xl overflow-hidden ${
          isExiting ? "modal-exit" : "modal-enter"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Coloured header — flex-shrink-0 keeps it always visible */}
        <div
          className={`flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-gradient-to-r ${category.color} flex-shrink-0`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-2xl sm:text-3xl flex-shrink-0">{category.icon}</span>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight truncate">
                {category.title}
              </h2>
              <p className="text-white/70 text-xs mt-0.5 truncate">{category.subtitle}</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white text-sm font-bold transition-colors duration-200 flex-shrink-0 ml-3"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Scrollable project list
            - flex-1 + min-h-0: critical combo — without min-h-0, a flex child won't
              shrink below its content size, so overflow-y has no effect
            - WebkitOverflowScrolling: enables momentum scrolling on iOS Safari
        */}
        <div
          className="flex-1 min-h-0 p-4 sm:p-5 space-y-4"
          style={{ overflowY: "auto", WebkitOverflowScrolling: "touch" }}
        >
          {category.projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* Footer — flex-shrink-0 keeps it always visible at the bottom */}
        <div className="px-5 py-3 border-t border-white/5 text-center flex-shrink-0">
          <p className="text-xs text-gray-600">
            {category.projects.length} featured project
            {category.projects.length !== 1 ? "s" : ""} · Click outside or press Esc to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
