import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../constants/ProjectData";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Project = () => {
  const [currect, setCurrent] = useState(0);

  const handlePrev = (index: number) => {
    if (index == 0) {
      setCurrent(projectsData.length - 1);
    } else {
      setCurrent((i) => i - 1);
    }
  };

  const handleNext = (index: number) => {
    if (index == projectsData.length - 1) {
      setCurrent(0);
    } else {
      setCurrent((i) => i + 1);
    }
  };

  return (
    <div id="project" className="px-4 w-full min-h-screen">
      <div className="mt-16 max-w-7xl w-full">
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl font-bold my-4">Projects I've Built</h1>
          <h1 className="mb-4 text-gray-300 max-w-[550px] text-center">
            Real-world problems require real solutions. Here's a curated list of
            projects where I applied my skills to build fast, scalable, and
            user-focused applications.
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <ProjectCard
          title={projectsData[currect].title}
          type={projectsData[currect].type}
          overview={projectsData[currect].overview}
          techStack={projectsData[currect].techStack}
          metrics={projectsData[currect].metrics}
          links={projectsData[currect].links}
        />
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => handlePrev(currect)}
          className="flex items-center space-x-2 px-4 py-2 cursor-pointer rounded-sm bg-[#1f1f1f] mr-4"
        >
          <span>
            <MdNavigateBefore />
          </span>
          <span>Previous</span>
        </button>
        {/* dots */}
        {projectsData.map((_, index) => (
          <div
            key={index}
            className={`${
              currect == index ? "bg-[#B67432]" : "bg-[#1f1f1f]"
            } w-2 h-2 rounded-full mr-1`}
          ></div>
        ))}
        <button
          onClick={() => handleNext(currect)}
          className="ml-4 flex items-center space-x-2 px-4 py-2 cursor-pointer rounded-sm bg-[#1f1f1f] "
        >
          <span>Next</span>
          <span>
            <MdNavigateNext />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Project;
