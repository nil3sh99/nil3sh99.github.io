import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import ImpactStats from "./components/ImpactStats";
import CategoryGrid from "./components/CategoryGrid";
import Timeline from "./components/Timeline";
import Certifications from "./components/Certifications";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import data from "./assets/data";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white overflow-x-hidden">
      <Hero
        name={data.name}
        title={data.title}
        tagline={data.tagline}
        social={data.social}
        resumeUrl={data.resumeUrl}
      />

      <div data-aos="fade-up">
        <ImpactStats stats={data.impactStats} />
      </div>

      <div data-aos="fade-up">
        <CategoryGrid categories={data.categories} />
      </div>

      <div data-aos="fade-up">
        <Timeline experience={data.experience} />
      </div>

      <div data-aos="fade-up">
        <Certifications certifications={data.certifications} />
      </div>

      <div data-aos="fade-up">
        <TechStack techStack={data.techStack} />
      </div>

      <Footer social={data.social} name={data.name} />
    </div>
  );
}

export default App;
