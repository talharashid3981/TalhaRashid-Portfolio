import React from "react";
import { FiMessageCircle, FiPhone, FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = ({ isDarkMode }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-5 my-16">
      <h1 className="text-[32px] md:text-[36px] font-[700] text-[#7E9BFA] text-center mb-4">
        Let's Connect
      </h1>

      <p className={`text-center mb-12 max-w-2xl mx-auto ${
        isDarkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>
        I'm always open to discussing new opportunities, collaborations, or just
        having a chat about technology!
      </p>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Get In Touch Section */}
        <div
          className={`w-full p-6 sm:p-8 rounded-xl transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg ${
              isDarkMode
                ? 'bg-gray-800 hover:shadow-gray-700/90'
                : 'bg-white border border-gray-200 hover:shadow-gray-300/50'
            }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <FiMessageCircle className="text-[#7E9BFA] text-2xl" />
            <h2 className={`text-xl font-semibold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Get In Touch
            </h2>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${
                isDarkMode ? 'bg-[#374151]' : 'bg-gray-100'
              }`}>
                <MdOutlineEmail className="text-[#7E9BFA] text-xl" />
              </div>
              <div className="flex flex-col">
                <span className={`text-sm ${
                  isDarkMode ? 'text-[#9CA3AF]' : 'text-gray-500'
                }`}>
                  Email
                </span>
                <a
                  href="mailto:talharashid3981@gmail.com"
                  className={`text-base transition-colors ${
                    isDarkMode 
                      ? 'text-white hover:text-blue-400' 
                      : 'text-gray-900 hover:text-blue-600'
                  }`}
                >
                  talharashid3981@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${
                isDarkMode ? 'bg-[#374151]' : 'bg-gray-100'
              }`}>
                <FiPhone className="text-green-500 text-xl" />
              </div>
              <a href="tel:+923266095310" className="flex flex-col">
                <span className={`text-sm ${
                  isDarkMode ? 'text-[#9CA3AF]' : 'text-gray-500'
                }`}>
                  Phone
                </span>
                <span className={`text-base transition-colors ${
                  isDarkMode 
                    ? 'text-white hover:text-green-400' 
                    : 'text-gray-900 hover:text-green-600'
                }`}>
                  +92 326 6095310
                </span>
              </a>
            </div>

           
            <a
              href="https://maps.app.goo.gl/qky9boP7UrRvYVQT9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-colors hover:opacity-80"
            >
              <div className={`p-3 rounded-lg ${
                isDarkMode ? 'bg-[#374151]' : 'bg-gray-100'
              }`}>
                <FiMapPin className="text-red-500 text-xl" />
              </div>
              <div className="flex flex-col">
                <span className={`text-sm ${
                  isDarkMode ? 'text-[#9CA3AF]' : 'text-gray-500'
                }`}>
                  Location
                </span>
                <span className={`text-base ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Lahore, Pakistan
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Connect on Social Media Section */}
        <div
          className={`w-full p-6 sm:p-8 rounded-xl transition-all duration-300
            hover:shadow-lg hover:scale-[1.02] ${
              isDarkMode
                ? 'bg-gray-800 hover:shadow-gray-700'
                : 'bg-white border border-gray-200 hover:shadow-gray-300/50'
            }`}
        >
          <h2 className={`text-xl font-semibold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Connect on Social Media
          </h2>

          <div className="space-y-4 mb-8">
          
            <a
              href="https://www.linkedin.com/in/talharashid3981/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0A66C2] hover:bg-[#0958A8] rounded-lg p-4 flex items-center gap-4 transition-colors"
            >
              <FaLinkedin className="text-white text-xl" />
              <span className="text-white font-medium">LinkedIn</span>
            </a>

           
            <a
              href="https://github.com/talharashid3981"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full rounded-lg p-4 flex items-center gap-4 transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-[#374151] hover:bg-[#4B5563]'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <FaGithub className="text-white text-xl" />
              <span className="text-white font-medium">GitHub</span>
            </a>
          </div>

          {/* Looking for Section */}
          <div className={`rounded-lg p-6 ${
            isDarkMode ? 'bg-[#374151]' : 'bg-gray-100'
          }`}>
            <h3 className={`font-medium mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Looking for:
            </h3>
            <ul className={`space-y-2 text-sm ${
              isDarkMode ? 'text-[#9CA3AF]' : 'text-gray-600'
            }`}>
              <li>• Software Engineering opportunities</li>
              <li>• Full-stack development roles</li>
              <li>• Open source collaborations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full my-10 p-8 md:p-10 rounded-[10px] bg-gradient-to-l from-[#7D23CF] to-[#1E4DD8] text-center">
        <h1 className="text-[24px] md:text-[28px] font-[600] mb-2 text-white">
          Ready to Work Together?
        </h1>
        <p className="text-gray-200 font-[500] max-w-2xl mx-auto">
          I'm excited to contribute to innovative projects and grow as a
          software engineer. Let's build something amazing together!
        </p>
        <div className="flex justify-center mt-6">
          <a
            href="mailto:talharashid3981@gmail.com"
            className="flex items-center gap-3 rounded-[10px] bg-white py-3 px-5 text-[#2563EB]
            hover:-translate-y-1 transition-transform duration-300 font-medium"
          >
            <MdOutlineEmail className="text-xl" />
            <span>Send Me an Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;