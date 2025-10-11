import React from "react";
import { FiCode, FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ isDarkMode }) => {
  const myProjects = [
    {
      tittle: " Spotify UI Clone",
      icon: <FiCode className="text-[24px] text-[#60A5FA]" />,
      details:
        "Responsive music streaming interface replicating Spotify's design with interactive player controls, playlist views, and smooth transitions.",
      tecUsed: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      sorceCode: "https://github.com/talharashid3981/Spotify-Clone",
      gitIcon: <FiGithub className="text-[18px]" />,
       urlIcon: <FaExternalLinkAlt className="text-[16px]" />,
      urlLink: "https://talharashid3981.github.io/Spotify-Clone/",
    },
    {
      tittle: "YouTube UI Clone",
      icon: <FiCode className="text-[24px] text-[#60A5FA]" />,
      details:
        "A responsive recreation of YouTube's interface with dark mode toggle, video grid layout, and dynamic video player page. Features smooth page transitions and interactive UI components.",
      tecUsed: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Multi-page Navigation",
      ],
      sorceCode: "https://github.com/example/news-to-video",
      gitIcon: <FiGithub className="text-[18px]" />,
    },
    {
      tittle: " Flight Booking System",
      icon: <FiCode className="text-[24px] text-[#60A5FA]" />,
      details:
        "Complete frontend implementation of a flight booking platform featuring flight search with filters, interactive seat selection interface, multi-step booking process, and payment UI. Demonstrates React Hooks, state management, and modern UI/UX practices.",
      tecUsed: ["React.js", "React Hooks", "State Management", "Netlify"],
      sorceCode: "https://github.com/talharashid3981/FickleFlight-Project",
      gitIcon: <FiGithub className="text-[18px]" />,
       urlIcon: <FaExternalLinkAlt className="text-[16px]" />,
      urlLink: "https://fickle-flight-project-fkq5-omega.vercel.app/",
    },
    {
      tittle: "E-Commerce Store",
      icon: <FiCode className="text-[24px] text-[#60A5FA]" />,
      details:
        "Full-stack online shopping platform with product management, cart, secure payments, order tracking, and admin dashboard. Includes authentication, email notifications, and image uploads.  ",
      tecUsed: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Nodemailer",
        "Multer",
        "Tailwind",
      ],
      sorceCode: "https://github.com/example/queryly-ai",
      gitIcon: <FiGithub className="text-[18px]" />,
    },
    // {
    //   tittle: "VocaHire-AI Interview Partner",
    //   icon: <FiCode className="text-[24px] text-[#60A5FA]" />,
    //   details:
    //     "AI-powered interview practice platform that simulates real-time interview sessions using GPT-3.5-turbo and voice recognition. Provides feedback, tracks history, and supports pose detection.",
    //   tecUsed: [
    //     "FastAPI",
    //     "React.js",
    //     "LangChain",
    //     "OpenAI API",
    //     "Redux Toolkit",
    //     "Python",
    //     "Lucide-React",
    //   ],
    //   sorceCode: "https://github.com/example/vocahire-ai",
    //   gitIcon: <FiGithub className="text-[18px]" />,
    // },
    {
      tittle: "Client Services Website",
      icon: <FiCode className="text-[24px] text-[#60A5FA]" />,
      details:
        "Professional business website with CMS and contact management with translation service",
      tecUsed: ["React.js", "Emailjs", "SEO Optimized", "Tailwind css"],
      sorceCode: "https://github.com/example/bonded-social-network",
      gitIcon: <FiGithub className="text-[18px]" />,
      urlIcon: <FaExternalLinkAlt className="text-[16px]" />,
      urlLink: "Docker: sadia2004/dockerbonded",
    },
    // {
    //   tittle: "HealWell - E-Healthcare System",
    //   icon: <FiCode className="text-[24px] text-[#60A5FA]" />,
    //   details:
    //     "Healthcare portal with doctor search, appointment booking, dashboards, and AI chatbot. Built with .NET Web APIs, Entity Framework, and JWT authentication.",
    //   tecUsed: [
    //     "Blazor WASM",
    //     ".NET Core",
    //     "SQL Server",
    //     "Web APIs",
    //     "JWT",
    //     "Entity Framework",
    //   ],
    //   sorceCode: "https://github.com/example/healwell",
    //   gitIcon: <FiGithub className="text-[18px]" />,
    // },
    // {
    //   tittle: "Plant Disease Detection",
    //   icon: <FiCode className="text-[24px] text-[#60A5FA]" />,
    //   details:
    //     "YOLOv5 and YOLOv8 models detecting plant diseases with 95% accuracy on 30+ crops. Flask-based web app for real-time predictions.",
    //   tecUsed: ["Python", "PyTorch", "YOLOv5", "YOLOv8", "Flask", "OpenCV"],
    //   sorceCode: "https://github.com/example/plant-disease-detection",
    //   gitIcon: <FiGithub className="text-[18px]" />,
    // },
  ];

  return (
    <div className="my-18 w-full max-w-[1150px]">
      <h1 className="text-[36px] font-[700] mb-5 text-[#7D9AFA] text-center">
        Featured Projects
      </h1>
      <p
        className={`text-center mb-12 max-w-2xl mx-auto ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        A showcase of full-stack applications demonstrating technical expertise
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-5">
        {myProjects.map((project, index) => (
          <div
            key={index}
            className={`p-8 rounded-[8px] border-2 transition-all duration-300
              hover:-translate-y-2 hover:shadow-lg ${
                isDarkMode
                  ? "bg-[#293342] border-[#1E3A8A] hover:shadow-gray-700/90"
                  : "bg-white border-blue-200 shadow-md hover:shadow-blue-200/50"
              }`}
          >
            <div
              className={`flex items-center gap-3 text-[20px] font-[700] mb-5 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span>{project.icon}</span>
              <span>{project.tittle}</span>
            </div>

            <p
              className={`text-[16px] font-[400] ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {project.details}
            </p>

            <div className="flex flex-wrap gap-2 my-4">
              {project.tecUsed.map((tec, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-[12px] font-[400] rounded-full ${
                    isDarkMode
                      ? "bg-[#1E3A8A] text-gray-200"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {tec}
                </span>
              ))}
            </div>

            <div>
              <div className="mt-3 text-[16px]">
                <a
                  href={project.sorceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex text-[14px] items-center gap-3 transition-colors ${
                    isDarkMode
                      ? "text-gray-300 hover:text-[#4e71bb]"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {project.gitIcon}
                  Source Code
                </a>
              </div>
              {project.urlIcon && (
                <a
                  href="#"
                  className={`flex gap-2 items-center mt-2 text-[14px] transition-colors ${
                    isDarkMode
                      ? "text-gray-300 hover:text-red-400"
                      : "text-gray-600 hover:text-red-500"
                  }`}
                >
                  {project.urlIcon}
                  {project.urlLink}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <p
        className={`mt-12 text-center text-[18px] font-[400] ${
          isDarkMode ? "text-[#9CA3AF]" : "text-gray-600"
        }`}
      >
        Interested in seeing more of my work?
      </p>

      <div className="flex justify-center">
        <a
          href="https://github.com/talharashid3981"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-3 font-[400] rounded-[8px] my-5 px-6 py-3 transition-colors ${
            isDarkMode
              ? "bg-[#374151] text-white hover:bg-[#4B5563]"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          <FiGithub />
          <span>Visit My GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
