import React, { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Home from './components/Sections/Home'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Contact from './components/Sections/Contact'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <section 
        id='Home' 
        className={`min-h-screen flex items-center justify-center pt-20 ${
          isDarkMode ? 'bg-[#171F2E]' : 'bg-gray-50'
        }`}
      >
        <Home isDarkMode={isDarkMode} />
      </section>

      <section 
        id='About' 
        className={`min-h-screen flex justify-center ${
          isDarkMode ? 'bg-[#111827]' : 'bg-white'
        }`}
      >
        <About isDarkMode={isDarkMode} />
      </section>

      <section 
        id='Skills' 
        className={`min-h-screen flex justify-center ${
          isDarkMode ? 'bg-[#192130]' : 'bg-gray-50'
        }`}
      >
        <Skills isDarkMode={isDarkMode} />
      </section>

      <section 
        id='Projects' 
        className={`min-h-screen flex justify-center ${
          isDarkMode ? 'bg-[#111827]' : 'bg-white'
        }`}
      >
        <Projects isDarkMode={isDarkMode} />
      </section>

      <section 
        id='Contact' 
        className={`min-h-screen flex justify-center ${
          isDarkMode ? 'bg-[#111827]' : 'bg-gray-50'
        }`}
      >
        <Contact isDarkMode={isDarkMode} />
      </section>
    </>
  )
}

export default App