import {
  FaAws,
  FaDatabase,
  FaJava,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";
import { GrConnect } from "react-icons/gr";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiZod,
  SiDocker,
  SiNginx,
  SiPython,
  SiCloudflare,
  SiPostman,
} from "react-icons/si";
import { DiFirebase } from "react-icons/di";
import { AiFillOpenAI } from "react-icons/ai";

export const frontendSkills = [
  { title: "JavaScript", icon: <SiJavascript /> },
  { title: "TypeScript", icon: <SiTypescript /> },
  { title: "React", icon: <SiReact /> },
  { title: "Next.js", icon: <SiNextdotjs /> },
  { title: "Redux Toolkit", icon: <SiRedux /> },
  { title: "Recoil", icon: <FaProjectDiagram /> },
  { title: "Tanstack Query", icon: <FaDatabase /> },
  { title: "HTML5", icon: <SiHtml5 /> },
  { title: "CSS3", icon: <SiCss3 /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss /> },
];

export const backendSkills = [
  { title: "Node.js", icon: <SiNodedotjs /> },
  { title: "Express", icon: <SiExpress /> },
  { title: "Hono", icon: <FaServer /> },
  { title: "WebSockets", icon: <GrConnect /> },
  { title: "PostgreSQL", icon: <SiPostgresql /> },
  { title: "MongoDB", icon: <SiMongodb /> },
  { title: "Redis", icon: <SiRedis /> },
  { title: "Zod", icon: <SiZod /> },
  { title: "GraphQL", icon: <SiGraphql /> },
  { title: "Prisma", icon: <SiPrisma /> },
];

export const devopsSkills = [
  { title: "Docker", icon: <SiDocker /> },
  { title: "CI/CD", icon: <FaProjectDiagram /> },
  { title: "Cloudflare", icon: <SiCloudflare /> },
  { title: "AWS", icon: <FaAws /> },
  { title: "Nginx", icon: <SiNginx /> },
];

export const languageSkills = [
  { title: "JavaScript", icon: <SiJavascript /> },
  { title: "TypeScript", icon: <SiTypescript /> },
  { title: "Python", icon: <SiPython /> },
  { title: "Java", icon: <FaJava /> },
  { title: "Git", icon: <FaJava /> },
  { title: "Postman", icon: <SiPostman /> },
  { title: "Firebase", icon: <DiFirebase /> },
  { title: "OpenAPI", icon: <AiFillOpenAI /> },
];
