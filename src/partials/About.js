import React from "react";

function About({ title, description }) {
  const url = "https://drive.google.com/file/d/1meomFKW9PzFeUHr-lbH-Xjdo7tA8NvcF/view?usp=sharing";
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <p className="text-2xl hover:text-gray-700 md:text-4xl font-bold text-center">{title}</p>
      <p className="text-base text-center md:text-center whitespace-pre-line text-gray-600 leading-relaxed mt-4">
        {description}
      </p>
        <div className="p-6 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><a href = {url}>Resume</a></button>
        </div>
    </div>
  );
}

export default About;
