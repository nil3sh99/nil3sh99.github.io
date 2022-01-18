import React from "react";
import { FaJava, FaCode, FaAws, FaDocker } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Nilesh Aggarwal",
  title: "Developer/Software Engineer",
  social: {
    github: "https://github.com/BraydenTW",
    linkedin: "https://www.linkedin.com/in/nilesh-dev/",
    email: "agnilesh8199@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "I am a technology enthusiast who enjoys working on a variety of technologies from Development through Deployment 🚀 \n I am currently pursuing Masters in Applied Computer Science (COOP) from Concorida University, Montreal, CA \n \n Always open to connect on Linkedin and discuss any suitable role for me in your team",
  },
  skills: [
    {
      skillName: "Java",
      skillIcon: <FaJava className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Web Dev",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Cloud",
      skillIcon: <FaAws className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Dev Ops",
      skillIcon: <FaDocker className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "Movie Search Application",
      description: "🎬 An open-source movie search app built with React and OMDB API, hosted on Netlify.",
      tags: [
        "reactjs",
        "netlify",
        "html",
        "css",
        "js",
        "omdb api"
      ],
      link: "https://jovial-noyce-a00687.netlify.app/"
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: [
        "website",
        "portfolio",
        "nextjs",
        "tailwindcss"
      ],
      link: "https://github.com/nil3sh99/port-react"
    },
    {
      title: "Non-Contact Heart Rate Detection",
      description: "📟 Application built to help users check their heart rate without using wearable tech.",
      tags: [
        "photoplethysmography",
        "js",
        "image processing",
        "python"
      ],
    },
    {
      title: "Blog App",
      description: "📖 A simple Blog App inspired from the Dojo Blog Application - NetNinja, Youtube",
      tags: [
        "learning",
        "reactjs",
        "react hooks",
        "props",
        "react router"
      ],
    }
  ]
};
export default data;
