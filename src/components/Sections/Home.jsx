import React from "react";
import { FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";

const Home = ({ isDarkMode }) => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-4xl md:text-6xl font-bold 
                      mb-5
                      text-transparent bg-gradient-to-l to-[#66A3FA] from-[#A18DFA] bg-clip-text"
        >
          Talha Rashid
        </h1>

        <p className={`text-xl md:text-2xl font-poppins mb-10 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
         Full-Stack Software Engineer
        </p>

        <p className={`font-normal text-lg leading-7 text-center max-w-2xl mx-auto mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
         Final-year Software Engineering student specializing in building modern, scalable web applications using the MERN stack. I create end-to-end solutions with clean code, intuitive user interfaces, and robust backend systems that solve real-world problems.
        </p>

        <div className={`flex flex-wrap justify-center gap-6 mb-8 text-[15px] md:text-[17px] font-normal ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <a
            href="tel:+923266095310" 
            target="_blank"
            className={`flex gap-2 items-center transition ${
              isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
            }`}
          >
            <FiPhone className="inline-block text-lg" />
            <span>+92 326 6095310</span>
          </a>

          <a
            href="https://maps.app.goo.gl/qky9boP7UrRvYVQT9"
            target="_blank"
            className={`flex gap-2 items-center transition ${
              isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
            }`}
          >
            <GrLocation className="inline-block text-lg" />
            <span>Lahore, Pakistan</span>
          </a>

          <a
            href="mailto:talharashid3981@gmail.com"
            target="_blank"
            className={`flex gap-2 items-center transition ${
              isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'
            }`}
          >
            <MdMailOutline className="inline-block text-lg" />
            <span>talharashid3981@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8 text-2xl">
          <a
            href="https://github.com/talharashid3981"
            target="_blank"
            className={`p-3 flex items-center rounded-full text-white
               ease-out
              hover:-translate-y-1 hover:shadow-lg transition-all duration-300
               transform active:scale-50 ${
                 isDarkMode 
                   ? 'bg-[#374151] hover:bg-[#4B5563] hover:shadow-gray-700/90'
                   : 'bg-gray-800 hover:bg-gray-700 hover:shadow-gray-500/50'
               }`}
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/talharashid3981/"
            target="_blank"
            className={`p-3 flex items-center rounded-full text-white
               transition-all duration-300 ease-out
               hover:-translate-y-1 hover:shadow-lg
               transform active:scale-50 ${
                 isDarkMode 
                   ? 'bg-[#374151] hover:bg-[#4B5563] hover:shadow-gray-700/90'
                   : 'bg-gray-800 hover:bg-gray-700 hover:shadow-gray-500/50'
               }`}
          >
            <FiLinkedin />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#Projects" className="cursor-pointer">
            <button
              className="px-8 py-3 bg-gradient-to-l to-[#8A37EA] from-[#22388A]
              rounded-[8px] font-bold cursor-pointer text-white hover:opacity-90 transition-opacity"
            >
              View My Projects
            </button>
          </a> 
          <a href="#Contact" className="cursor-pointer">
            <button
              className="px-8 py-3 bg-gradient-to-l to-[#8A37EA] from-[#22388A]
              rounded-[8px] font-bold cursor-pointer text-white hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;