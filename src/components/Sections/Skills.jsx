import React from "react";
import { FaDesktop } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { CgDatabase } from "react-icons/cg";
import { BiBrain } from "react-icons/bi";
import { LuDatabase } from "react-icons/lu";
import { FiCode } from "react-icons/fi";

const Skills = ({ isDarkMode }) => {
  const skillCategories = [
    {
      icon: <FiCode className="text-[26px] text-[#60A5FA]" />,
      title: "Programming Languages",
      categorySkills: ["Python", "C++", "C#", "JavaScript", "Kotlin"],
    },
    {
      icon: <RiGlobalLine className="text-[26px] text-[#4ADE80]" />,
      title: "Web Development",
      categorySkills: ["ASP.NET MVC", "ASP.NET Core", "Blazor WASM", "REST APIs", "Entity Framework", "SignalR", "React+FastAPI"],
    },
    {
      icon: <FaDesktop className="text-[26px] text-[#2DD4BF]" />,
      title: "Frontend Technologies",
      categorySkills: ["HTML/CSS", "XML", "React.js", "Figma"],
    },
    {
      icon: <CgDatabase className="text-[26px] text-[#C084FC]" />,
      title: "Backend & APIs",
      categorySkills: [".NET Web APIs", "FastAPI", "REST APIs", "Entity Framework"],
    },
    {
      icon: <BiBrain className="text-[26px] text-[#F87171]" />,
      title: "AI & Machine Learning",
      categorySkills: ["PyTorch", "CNNs", "YOLOv5/v8", "OpenCV", "Neural Networks", "LangChain", "LangGraph", "LLMs"],
    },
    {
      icon: <LuDatabase className="text-[26px] text-[#FB923C]" />,
      title: "Databases & Tools",
      categorySkills: ["VS Code", "Visual Studio", "Git", "SQL Server", "MongoDB", "Firebase", "JIRA", "Figma", "n8n"],
    },
  ];

  return (
    <div className="w-full max-w-[1150px] mx-auto py-18 min-h-screen px-4">
      <h1 className="text-center text-[#8897FA] text-[36px] font-[700] mb-3">
        Technical Skills
      </h1>
      <p className={`text-center text-[16px] font-[400] mb-12 ${
        isDarkMode ? 'text-[#9CA3AF]' : 'text-gray-600'
      }`}>
        Specialized in full-stack development (.NET, React, FastAPI) and applied AI/ML
      </p>

      <div className="w-full mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 border-2 transition-all duration-300
              hover:-translate-y-2 hover:shadow-lg ${
                isDarkMode
                  ? 'bg-[#1E293B] border-[#1E3A8A] hover:shadow-gray-700/90'
                  : 'bg-white border-blue-200 shadow-md hover:shadow-blue-200/50'
              }`}
          >
            <div className={`flex items-center gap-3 text-[18px] font-[600] mb-5 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.categorySkills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`text-[16px] font-[400] rounded-full px-3 py-1 ${
                    isDarkMode
                      ? 'bg-[#1E3A8A] text-[#A1BDE8]'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-gradient-to-r from-[#204DD8] to-[#7D23CE] p-8 rounded-lg">
        <h1 className="text-center text-white text-[24px] font-[600] mb-5">
          Key Strengths
        </h1>
        <div>
          <ul className="list-disc grid grid-col-1 md:grid-cols-2 gap-7 px-6 text-white">
            <li className="text-[16px] font-[700]">
              <span>Full-Stack Development: </span>
              <span className="font-[400]">Expertise in .NET, React, and FastAPI</span>
            </li>
            <li className="text-[16px] font-[700]">
              <span>Problem Solving: </span>
              <span className="font-[400]">LeetCode problems and competitive programming</span>
            </li>
            <li className="text-[16px] font-[700]">
              <span>AI/ML Applications: </span>
              <span className="font-[400]">Computer vision, LLMs, and neural networks</span>
            </li>
            <li className="text-[16px] font-[700]">
              <span>Teaching & Mentoring: </span>
              <span className="font-[400]">ML TA for 50+ students, hackathon experience</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;