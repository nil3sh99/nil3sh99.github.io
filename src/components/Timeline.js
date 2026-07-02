import React from "react";

const TimelineEntry = ({ job, isLast }) => (
  <div className="relative pl-14 pb-10">
    {/* Vertical connector line */}
    {!isLast && (
      <div className="absolute left-[22px] top-12 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 to-transparent" />
    )}

    {/* Circular icon */}
    <div
      className={`absolute left-0 top-0 w-11 h-11 rounded-full bg-gradient-to-br ${job.color} flex items-center justify-center text-lg shadow-lg flex-shrink-0`}
    >
      {job.icon}
    </div>

    {/* Card */}
    <div className="glass-card rounded-2xl p-5 hover:bg-white/10 transition-colors duration-200">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-1 sm:gap-3 mb-4">
        <div>
          <h3 className="text-base font-bold text-white leading-snug">{job.role}</h3>
          <p className="text-indigo-300 text-sm font-medium">{job.company}</p>
          <p className="text-gray-500 text-xs mt-0.5">{job.location}</p>
        </div>
        <div className="sm:text-right flex-shrink-0">
          <span className="text-xs text-gray-400 block">{job.period}</span>
          <span
            className={`text-xs px-2 py-0.5 mt-1.5 rounded-full inline-block font-medium ${
              job.type === "Full Time"
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-amber-500/15 text-amber-400"
            }`}
          >
            {job.type}
          </span>
        </div>
      </div>

      <ul className="space-y-2">
        {job.highlights.map((point, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-gray-400 leading-snug">
            <span className="text-indigo-400 mt-0.5 flex-shrink-0 font-bold">▸</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Timeline = ({ experience }) => (
  <section className="px-4 sm:px-6 py-12 sm:py-16">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">
          Work History
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">My Journey</h2>
      </div>

      <div>
        {experience.map((job, i) => (
          <TimelineEntry
            key={i}
            job={job}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
