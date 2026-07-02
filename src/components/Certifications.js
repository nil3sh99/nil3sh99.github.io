import React from "react";

const CertCard = ({ cert }) => (
  <div className="glass-card rounded-2xl p-5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
    <div className="text-3xl mb-3">{cert.icon}</div>
    <h4 className="text-sm font-semibold text-white mb-1 leading-snug flex-1">
      {cert.name}
    </h4>
    <p className="text-xs text-gray-500 mb-3">{cert.issuer}</p>
    <span
      className={`text-xs px-2.5 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white font-medium w-fit`}
    >
      {cert.date}
    </span>
  </div>
);

const Certifications = ({ certifications }) => (
  <section className="px-6 py-16">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">
          Validated Expertise
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Certifications &amp; Awards
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {certifications.map((cert, i) => (
          <CertCard key={i} cert={cert} />
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
