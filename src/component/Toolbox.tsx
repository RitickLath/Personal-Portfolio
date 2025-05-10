import { useState } from "react";
import {
  frontendSkills,
  backendSkills,
  devopsSkills,
  languageSkills,
} from "../constants/techStack";
import SkillCategory from "./SkillCategory";
import { FaCode, FaServer, FaTools, FaTerminal } from "react-icons/fa";

const Toolbox = () => {
  const [active, setActive] = useState("Frontend");

  const getSkills = () => {
    switch (active) {
      case "Frontend":
        return frontendSkills;
      case "Backend":
        return backendSkills;
      case "Devops":
        return devopsSkills;
      case "Core & Tools":
        return languageSkills;
      default:
        return [];
    }
  };

  const categories = [
    { title: "Frontend", icon: <FaCode /> },
    { title: "Backend", icon: <FaServer /> },
    { title: "Devops", icon: <FaTools /> },
    { title: "Core & Tools", icon: <FaTerminal /> },
  ];

  return (
    <div id="tech-stack" className="w-full px-4 flex justify-center">
      <div className="mt-16 max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold my-4">My Engineering Stack</h1>
          <p className="mb-4 text-gray-300">
            From frontend polish to backend power, here's a look at the tools
            that help me turn code into products.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-12">
          {/* Sidebar */}
          <div className="w-full max-w-xs bg-[#0e0d0d] rounded-xl p-4 mb-6 lg:mb-0 shadow-md">
            {categories.map(({ title, icon }) => (
              <div
                key={title}
                onClick={() => setActive(title)}
                className={`flex items-center gap-3 px-4 py-2 my-2 rounded-md cursor-pointer transition-colors text-white ${
                  active === title ? "bg-[#00AAFF]" : "hover:bg-black"
                }`}
              >
                <div className="text-xl">{icon}</div>
                <span className="font-medium">{title}</span>
              </div>
            ))}
          </div>

          {/* Skills Panel */}
          <div className="flex-1 w-full">
            <SkillCategory category={active} skills={getSkills()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
