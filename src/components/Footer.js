import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = ({ social, name }) => (
  <footer className="px-6 pt-12 pb-8 border-t border-white/5">
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
      {/* Availability badge */}
      <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        <span className="text-gray-300">Open to new opportunities in Canada</span>
      </div>

      {/* Social icons */}
      <div className="flex gap-6">
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-500 hover:text-white transition-colors duration-200 text-xl"
        >
          <FaGithub />
        </a>
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-500 hover:text-blue-400 transition-colors duration-200 text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href={`mailto:${social.email}`}
          aria-label="Email"
          className="text-gray-500 hover:text-teal-400 transition-colors duration-200 text-xl"
        >
          <FiMail />
        </a>
      </div>

      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} {name} · Built with React &amp; Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;
