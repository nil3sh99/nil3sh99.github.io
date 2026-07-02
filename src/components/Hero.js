import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiDownload } from "react-icons/fi";
import profile from "../images/pp_nilesh.jpg";

const Hero = ({ name, title, tagline, social, resumeUrl }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background: dot grid + radial gradient */}
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Profile photo */}
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-indigo-500/40 shadow-2xl shadow-indigo-500/20">
            <img
              src={profile}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Green "available" dot */}
          <span
            className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0a0a14] animate-pulse"
            title="Open to new opportunities"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 leading-none">
          <span className="gradient-text">{name}</span>
        </h1>

        {/* Role chip row */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="glass-card px-3 py-1 rounded-full text-sm font-medium text-indigo-300">
            ☁️ GCP Admin @ ATCO
          </span>
          <span className="glass-card px-3 py-1 rounded-full text-sm font-medium text-violet-300">
            🤖 AI Platform Engineer
          </span>
          <span className="glass-card px-3 py-1 rounded-full text-sm font-medium text-teal-300">
            🔧 IaC &amp; Cloud Automation
          </span>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
          {tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 glass-card text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/10 rounded-xl transition-all duration-200 text-sm font-medium"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 glass-card text-gray-300 hover:text-blue-300 hover:border-blue-400/30 hover:bg-blue-500/10 rounded-xl transition-all duration-200 text-sm font-medium"
          >
            <FaLinkedin className="text-lg text-blue-400" />
            LinkedIn
          </a>
          <a
            href={`mailto:${social.email}`}
            className="flex items-center gap-2 px-5 py-2.5 glass-card text-gray-300 hover:text-teal-300 hover:border-teal-400/30 hover:bg-teal-500/10 rounded-xl transition-all duration-200 text-sm font-medium"
          >
            <FiMail className="text-lg text-teal-400" />
            Email Me
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors duration-200 text-sm font-semibold shadow-lg shadow-indigo-600/30"
          >
            <FiDownload className="text-lg" />
            Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-gray-500 tracking-widest uppercase font-medium">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2">
          <div className="w-0.5 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
