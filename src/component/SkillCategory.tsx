import type { ReactNode } from "react";

interface ISkill {
  title: string;
  icon: ReactNode;
}
type SkillCategoryProps = {
  category: string;
  skills: ISkill[];
};

const SkillCategory = ({ category, skills }: SkillCategoryProps) => {
  return (
    <div className="w-full max-w-3xl bg-[#0e0d0d] mb-8 rounded-xl py-6 px-8 shadow-md">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-white">
        {category}
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-[#1F1F1F] w-full text-white rounded-lg flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform duration-200"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
