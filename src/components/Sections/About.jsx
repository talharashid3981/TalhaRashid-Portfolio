import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { PiMedal } from "react-icons/pi";
import { SlBag } from "react-icons/sl";
import { FiUser } from "react-icons/fi";

const About = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col items-center max-w-4xl py-18 mx-5">
      <h1 className="text-[36px] font-[700] text-[#7E99FA] mb-2">About Me</h1>
      <p className={`text-[16px] mb-12 ${
        isDarkMode ? 'text-[#9CA3AF]' : 'text-gray-600'
      }`}>
        A glimpse into my academic background, career goals, and key experiences.
      </p>

      <div className="grid grid-row md:grid-cols-2 md:gap-8">
        <div className={`p-6 rounded-[8px] mb-5 md:mb-12 w-full ${
          isDarkMode ? 'bg-[#1F2937]' : 'bg-white shadow-lg border border-gray-200'
        }`}>
          <div className={`flex items-center gap-5 text-[20px] font-[700] leading-[26px] ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <div className={`p-[7px] rounded-full text-[#60A5FA] text-2xl ${
              isDarkMode ? 'bg-[#1E3160]' : 'bg-blue-100'
            }`}>
              <LuGraduationCap />
            </div>
            <span>Education</span>
          </div>
          <p className={`mt-3 text-[16px] font-[400] ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            BS in Computer Science
          </p>
          <p className={`mt-2 ${
            isDarkMode ? 'text-[#9CA3AF]' : 'text-gray-600'
          }`}>
            PUCIT Lahore
          </p>
          <h2 className="mt-2 text-[#60A5FA] font-[600]">CGPA: 3.0/4.00</h2>
        </div>

        <div className={`p-6 mb-5 md:mb-12 rounded-[8px] w-full ${
          isDarkMode ? 'bg-[#1F2937]' : 'bg-white shadow-lg border border-gray-200'
        }`}>
          <div className={`flex items-center gap-5 text-[20px] font-[700] leading-[26px] ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <div className={`p-[7px] rounded-full text-[#C084FC] text-2xl ${
              isDarkMode ? 'bg-[#3B225F]' : 'bg-purple-100'
            }`}>
              <GoGoal />
            </div>
            <span>Objective</span>
          </div>
          <p className={`text-[16px] font-[400] mt-4 ${
            isDarkMode ? 'text-[#D1D5DB]' : 'text-gray-700'
          }`}>
            A highly motivated and results-oriented Software Engineering student
            seeking to leverage my skills in full-stack development and AI/ML to
            contribute to innovative projects.
          </p>
        </div>
      </div>

      <div className={`p-6 rounded-lg w-full max-w-4xl ${
        isDarkMode ? 'bg-[#1F2937]' : 'bg-white shadow-lg border border-gray-200'
      }`}>
        <div className={`flex items-center gap-4 text-[24px] font-[600] mb-8 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <span className={`p-2 rounded-full text-[#4ADE80] ${
            isDarkMode ? 'bg-[#193E32]' : 'bg-green-100'
          }`}>
            <PiMedal />
          </span>
          <span>Experience Highlights</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2 text-[#22C55E] flex-shrink-0">
              <SlBag className="text-xl" />
            </div>
            <div>
              <span className={`font-[600] ${
                isDarkMode ? 'text-[#D1D5DB]' : 'text-gray-900'
              }`}>
                Freelance Web Development:{" "}
              </span>
              <span className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                 Built and deployed multiple full-stack web applications for clients using MERN stack.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2 text-[#22C55E] flex-shrink-0">
              <FiUser className="text-xl" />
            </div>
            <div>
              <span className={`font-[600] ${
                isDarkMode ? 'text-[#D1D5DB]' : 'text-gray-900'
              }`}>
                Peer Mentoring:{" "}
              </span>
              <span className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
               Helped fellow students debug code, understand React concepts, and build their first full-stack applications.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-4 lg:col-span-1">
            <div className="p-2 text-[#22C55E] flex-shrink-0">
              <SlBag className="text-xl" />
            </div>
            <div>
              <span className={`font-[700] ${
                isDarkMode ? 'text-[#D1D5DB]' : 'text-gray-900'
              }`}>
                Open Source Contributions:{" "}
              </span>
              <span className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Actively contributing to web development projects on GitHub, collaborating with developers worldwide.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;