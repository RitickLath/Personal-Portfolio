import { useState } from "react";
import {
  frontendSkills,
  backendSkills,
  devopsSkills,
  languageSkills,
} from "../constants/techStack";
import SkillCategory from "./SkillCategory";

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
      case "Language":
        return languageSkills;
      default:
        return [];
    }
  };

  const categories = ["Frontend", "Backend", "Devops", "Language"];

  return (
    <div id="tech stack" className="w-full px-4 flex justify-center">
      <div className="mt-16 max-w-7xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold my-4">My Engineering Stack</h1>
          <p className="mb-4 text-gray-300">
            From frontend polish to backend power, here's a look at the tools
            that help me turn code into products.
          </p>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-12">
          {/* Sidebar */}
          <div className="w-full max-w-xs bg-[#0e0d0d] rounded-xl p-4 mb-6 lg:mb-0">
            {categories.map((category) => (
              <h1
                key={category}
                onClick={() => setActive(category)}
                className={`${
                  active === category ? "bg-blue-500" : "bg-transparent"
                } text-white hover:bg-black cursor-pointer mx-2 my-2 py-2 px-3 rounded-sm text-center transition-colors`}
              >
                {category}
              </h1>
            ))}
          </div>

          {/* Skills Display */}
          <div className="flex-1 w-full">
            <SkillCategory category={active} skills={getSkills()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
