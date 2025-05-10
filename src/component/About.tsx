import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Education from "./Education";
import Experience from "./Experience";

const aboutContent: { Experience: ReactNode; Education: ReactNode } = {
  Experience: <Experience />,
  Education: <Education />,
};

const sections: { title: "Experience" | "Education"; icon: ReactNode }[] = [
  { title: "Experience", icon: <FaBriefcase /> },
  { title: "Education", icon: <FaGraduationCap /> },
];

const About = () => {
  const [active, setActive] = useState<"Experience" | "Education">(
    "Experience"
  );

  return (
    <div id="about" className="w-full px-4 flex justify-center">
      <div className="mt-16 max-w-7xl w-full">
        <div className="text-center mb-8">
          <motion.h1
            className="text-4xl font-bold my-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Hire Me?
          </motion.h1>
          <motion.p
            className="mb-4 text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here's a quick overview of my background, interests, and the journey
            so far.
          </motion.p>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-12">
          <div className="w-full max-w-xs bg-[#0e0d0d] rounded-xl p-4 mb-6 lg:mb-0 shadow-md">
            {sections.map(({ title, icon }) => (
              <div
                key={title}
                onClick={() => setActive(title)}
                className={`flex items-center gap-3 px-4 py-2 my-2 rounded-md cursor-pointer transition-colors text-white ${
                  active === title ? "bg-[#00AAFF]" : "hover:bg-black"
                }`}
              >
                <motion.div
                  className="text-xl"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
                <span className="font-medium">{title}</span>
              </div>
            ))}
          </div>

          <motion.div
            className="flex-1 w-full bg-[#0e0d0d] rounded-xl py-6 px-8 shadow-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">{active}</h2>
            {aboutContent?.[active]}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
