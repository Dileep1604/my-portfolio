import React from 'react';
import { Code, Palette, Database, Layers } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${skill.color}`} 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML/CSS', level: 90, color: 'bg-blue-600' },
    { name: 'JavaScript', level: 85, color: 'bg-blue-600' },
    { name: 'React', level: 90, color: 'bg-blue-600' },
    { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
  ];

  const designSkills: Skill[] = [
    { name: 'UI/UX Design', level: 75, color: 'bg-purple-600' },
    { name: 'Figma', level: 80, color: 'bg-purple-600' },
    { name: 'Responsive Design', level: 85, color: 'bg-purple-600' },
    { name: 'Animation', level: 70, color: 'bg-purple-600' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 75, color: 'bg-teal-600' },
    { name: 'Express', level: 70, color: 'bg-teal-600' },
    { name: 'MongoDB', level: 65, color: 'bg-teal-600' },
    { name: 'REST API', level: 80, color: 'bg-teal-600' },
  ];

  const otherSkills: Skill[] = [
    { name: 'Git', level: 85, color: 'bg-orange-600' },
    { name: 'Webpack/Vite', level: 75, color: 'bg-orange-600' },
    { name: 'Testing', level: 70, color: 'bg-orange-600' },
    { name: 'CI/CD', level: 65, color: 'bg-orange-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's an overview of my technical skills and expertise.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            title="Frontend Development" 
            icon={<Code size={24} />} 
            skills={frontendSkills} 
          />
          <SkillCategory 
            title="Design" 
            icon={<Palette size={24} />} 
            skills={designSkills} 
          />
          <SkillCategory 
            title="Backend Development" 
            icon={<Database size={24} />} 
            skills={backendSkills} 
          />
          <SkillCategory 
            title="Other Skills" 
            icon={<Layers size={24} />} 
            skills={otherSkills} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;