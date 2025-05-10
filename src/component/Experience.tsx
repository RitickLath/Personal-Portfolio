import { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

const experienceData = [
  {
    date: "November 2023",
    title: "Bhajanka Global (Freelance)",
    description:
      "Designed and developed responsive business websites using HTML, CSS, JavaScript, React.js, and Next.js. Implemented SEO strategies, boosting Google rankings and increasing organic traffic by 40%. Created user-friendly interfaces with form submissions and product showcases. Achieved a 90% Lighthouse performance rating and improved load times. Boosted revenue by 25% and lead generation by 60%. Deployed on Netlify with custom domain integration via GoDaddy.",
    client: "FREELANCE (Bhajanka Global)",
    link: "https://bhajankaglobal.in/",
  },
  {
    date: "September 2024",
    title: "Offshore Exports (Freelance)",
    description:
      "Developed a responsive and interactive startup website for Offshore Exports using React.js, Framer Motion. Delivered a sleek UI with dynamic particle backgrounds and a custom WhatsApp chat widget. Achieved 85% Lighthouse performance by optimizing frontend code and leveraging dynamic image loading. Deployed on Netlify with custom domain via GoDaddy.",
    client: "FREELANCE (India Exports)",
    link: "https://offshorexports.co.in/",
  },
  {
    date: "January 2025",
    title: "India Exports (Freelance)",
    description:
      "Developed a responsive and interactive startup website for India Exports using React.js, Framer Motion, and Particles.js. Delivered a sleek UI with dynamic particle backgrounds and a custom WhatsApp chat widget. Achieved 85% Lighthouse performance by optimizing frontend code and leveraging dynamic image loading. Deployed on Netlify with custom domain via GoDaddy.",
    client: "FREELANCE (India Exports)",
    link: "https://indiaexports.co.in/",
  },
];

const Experience = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? experienceData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === experienceData.length - 1 ? 0 : prev + 1));
  };

  const currentExp = experienceData[current];

  return (
    <div className="text-gray-300 space-y-6">
      <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md">
        <span className="text-sm px-4 py-1 bg-black text-[#00AAFF] rounded-md">
          {currentExp.date}
        </span>
        <h1 className="text-lg font-semibold mt-2 text-white flex items-center gap-2">
          {currentExp.title}
          {currentExp.link && (
            <a
              href={currentExp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00AAFF] hover:text-white"
            >
              <FaExternalLinkAlt className="text-sm" />
            </a>
          )}
        </h1>
        <p className="mt-1 whitespace-pre-line">{currentExp.description}</p>
        <h2 className="mt-2 text-sm text-gray-400">{currentExp.client}</h2>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="flex items-center space-x-2 px-4 py-2 cursor-pointer rounded-sm bg-[#1f1f1f] mr-4"
        >
          <MdNavigateBefore />
          <span>Previous</span>
        </button>
        {experienceData.map((_, index) => (
          <div
            key={index}
            className={`$ {
              current === index ? "bg-[#B67432]" : "bg-[#1f1f1f]"
            } w-2 h-2 rounded-full mx-1`}
          ></div>
        ))}
        <button
          onClick={handleNext}
          className="ml-4 flex items-center space-x-2 px-4 py-2 cursor-pointer rounded-sm bg-[#1f1f1f]"
        >
          <span>Next</span>
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Experience;
