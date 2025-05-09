import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";

type ProjectCardProps = {
  title: string;
  type: string;
  overview: string;
  metrics: string[];
  techStack: string[];
  links: {
    live?: string;
    github?: string;
    docs?: string;
  };
};

const ProjectCard = ({
  title,
  type,
  overview,
  metrics,
  techStack,
  links,
}: ProjectCardProps) => {
  return (
    <div className="bg-[#0e0d0d] w-full px-8 py-6 shadow-md max-w-3xl rounded-xl">
      {/* Project Type */}
      <h2 className="text-sm text-blue-400 mb-1">{type}</h2>

      {/* Title and Links */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <div className="flex space-x-3 text-xl text-white">
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-black rounded-sm p-2"
            >
              <CiLink />
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-black rounded-sm p-2"
            >
              <FaGithub />
            </a>
          )}
          {links.docs && (
            <a
              href={links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-black rounded-sm p-2"
            >
              <IoDocumentOutline />
            </a>
          )}
        </div>
      </div>

      {/* Overview */}
      <p className="text-gray-300 mt-3 mb-4">{overview}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-[#1f1f1f] text-sm text-white px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Key Metrics */}
      <div>
        <h3 className="text-white font-medium mb-2">Key Metrics</h3>
        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
          {metrics.map((metric, index) => (
            <li key={index}>{metric}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
