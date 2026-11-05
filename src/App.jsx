// src/App.jsx
import React, { useState } from 'react';
import { personalInfo, projects, skills, experience } from './data/portfolioData';
import Lanyard from './components/Lanyard';
import Carousel from './components/Carousel';
import DotGrid from './components/DotGrid';
import CursorTrail from './components/CursorTrail';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-zinc-50 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <CursorTrail />
      {/* 
        Updated bg-lines to be slightly more subtle to match the reference image, 
        ensuring it looks like scanlines without overpowering the text.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Permanent+Marker&display=swap');
        .font-marker { font-family: 'Permanent Marker', cursive; }
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .bg-lines {
          background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px);
        }
      `}</style>

      {/* FULL-PAGE INTERACTIVE BACKGROUND */}
      <div className="fixed inset-0 z-0 bg-zinc-950 pointer-events-none">
        <DotGrid
          baseColor="#27272a"   
          activeColor="#a5b4fc" // Brighter indigo (indigo-300) for a neon pop
          shape="circle"
          dotSize={4}
          gap={24}
          proximity={180}       // Widened interaction radius
          strength={1.5}        // Stronger magnetic pull
          bounce={0.6}
          tension={0.4}
          returnDuration={0.8}
          shockRadius={320}
          shockStrength={5}
          swell={1.8}           // Dots expand much more on hover
          stretch={0.5}
          glow={0.9}            // Maximized glow intensity
          fade={0}
          intro
          opacity={0.6}
          mouseInteraction
          clickShock
        />
      </div>

      {/* FOREGROUND CONTENT LAYER */}
      <div className="relative z-10">
        
        {/* Edge-to-Edge Navigation Bar */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b-2 border-zinc-800/80">
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-5 flex justify-between items-center">
            <span className="font-mono font-black text-indigo-400 text-xl sm:text-2xl lg:text-3xl tracking-tighter">
              TJR.dev
            </span>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 lg:gap-10 text-sm lg:text-base text-zinc-400 font-bold uppercase tracking-widest">
              <a href="#hero" className="hover:text-indigo-400 hover:-translate-y-0.5 transition-all">About</a>
              <a href="#skills" className="hover:text-indigo-400 hover:-translate-y-0.5 transition-all">Skills</a>
              <a href="#projects" className="hover:text-indigo-400 hover:-translate-y-0.5 transition-all">Projects</a>
              <a href="#experience" className="hover:text-indigo-400 hover:-translate-y-0.5 transition-all">Experience</a>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-2 border-zinc-700 bg-zinc-900/80 rounded-lg p-2 gap-1.5 focus:outline-none focus:border-indigo-400"
              aria-label="Toggle navigation menu"
            >
              <span className={`block h-0.5 w-5 bg-indigo-400 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-5 bg-zinc-300 transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-5 bg-indigo-400 transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

          {/* Mobile Collapsible Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t-2 border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl px-4 py-5 space-y-3">
              <nav className="flex flex-col gap-2.5 text-sm font-bold uppercase tracking-widest text-zinc-300">
                <a
                  href="#hero"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-all"
                >
                  Experience
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* Expanded Main Container */}
        <main className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 space-y-20 sm:space-y-28 md:space-y-36 lg:space-y-40 relative">
          
          {/* Hero Section */}
          <section id="hero" className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center min-h-[75vh] md:min-h-[80vh] bg-lines rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-20 border-2 border-zinc-800 overflow-hidden">
            {/* Left Side: Massive Stickers & Typography */}
            <div className="relative z-10 flex flex-col items-start w-full">
              
              <div className="absolute -top-3 sm:-top-5 md:-top-10 right-2 sm:right-6 md:right-10 px-3 py-1 sm:px-4 sm:py-2 bg-zinc-900 text-indigo-400 font-black uppercase text-xs sm:text-sm rounded-full rotate-6 border-2 sm:border-4 border-indigo-500 shadow-[3px_3px_0px_#6366f1] sm:shadow-[4px_4px_0px_#6366f1]">
                DOST Scholar
              </div>
              <div className="absolute top-28 sm:top-36 md:top-40 -left-2 sm:-left-6 md:-left-10 px-3 py-1 sm:px-4 sm:py-2 bg-indigo-400 text-zinc-950 font-black uppercase text-xs sm:text-sm rounded-full -rotate-12 border-2 sm:border-4 border-zinc-950 shadow-[3px_3px_0px_#ffffff] sm:shadow-[4px_4px_0px_#ffffff]">
                UPLB CS
              </div>

              {/* "They Call Me" Badge Card */}
              <div className="relative -rotate-2 hover:rotate-1 transition-transform duration-300 w-full max-w-[500px] rounded-xl overflow-hidden border-2 sm:border-4 border-zinc-200 bg-zinc-100 shadow-[8px_8px_0px_rgba(99,102,241,0.25)] sm:shadow-[12px_12px_0px_rgba(99,102,241,0.25)] mb-8 sm:mb-12">
                <div className="bg-indigo-600 text-center py-3 sm:py-5 border-b-2 sm:border-b-4 border-zinc-200">
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-oswald text-white tracking-widest uppercase mb-0">Hey Yo</h2>
                  <p className="text-indigo-100 font-black text-xs sm:text-base uppercase tracking-widest">they call me</p>
                </div>
                <div className="py-6 sm:py-10 text-center bg-zinc-100 flex justify-center px-4">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-marker text-zinc-900 transform -rotate-2 break-words leading-tight">
                    {personalInfo.name}
                  </h1>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 w-full">
                <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-oswald text-zinc-50 uppercase tracking-wide leading-[1.08]">
                  SOFTWARE ENGINEER <br/>
                  <span className="text-indigo-400">& RESEARCH LEAD</span>
                </h3>
                <p className="font-mono text-indigo-400 font-bold text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                  {personalInfo.role} • COMPUTER VISION • UI/UX
                </p>
              </div>

              <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-medium border-l-4 sm:border-l-8 border-indigo-500 pl-4 sm:pl-6 mb-8 sm:mb-12">
                {personalInfo.bio}
              </p>

              <div className="flex gap-4 sm:gap-6 flex-wrap w-full sm:w-auto">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" 
                   className="flex-1 sm:flex-none text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-indigo-600 text-white font-black uppercase text-sm sm:text-base lg:text-lg border-2 sm:border-4 border-indigo-500 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#ffffff] sm:hover:shadow-[6px_6px_0px_#ffffff] transition-all">
                  GitHub Profile
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" 
                   className="flex-1 sm:flex-none text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-zinc-950 text-zinc-50 font-black uppercase text-sm sm:text-base lg:text-lg border-2 sm:border-4 border-zinc-700 hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-400 transition-all">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Side: 3D Lanyard */}
            <div className="relative z-10 w-full h-[360px] sm:h-[480px] md:h-[580px] lg:h-[750px] xl:h-[800px] flex justify-center items-center mt-6 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
              <div style={{ width: '100%', height: '100%' }}>
                <Lanyard 
                  frontImage="../badge.png"
                  imageFit="cover"
                  cardColor="#ffffff"
                  orientation="portrait"
                  finish="glossy"
                  cornerRadius={0.3}
                  size={0.8}
                  anchor="center"
                  strapLength={0.5}
                  strapColor="#111111"
                  strapWidth={0.65}
                  metal="silver"
                  gravity={1}
                  damping={0.5}
                  elasticity={0.5}
                  breeze={0.5}
                  interactive
                  intro
                />
              </div>
            </div>
          </section>

          {/* Technical Capabilities Matrix */}
          <section id="skills" className="w-full">
            <div className="border-b-4 border-zinc-800 pb-4 sm:pb-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-oswald uppercase tracking-wider">Technical <span className="text-indigo-400">Capabilities</span></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
              <div className="p-5 sm:p-8 lg:p-12 rounded-xl md:rounded-none bg-lines border-2 sm:border-4 border-zinc-800 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] sm:shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:border-indigo-500 hover:shadow-[6px_6px_0px_rgba(99,102,241,0.5)] sm:hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] transition-all">
                <h3 className="font-mono text-indigo-400 font-black uppercase tracking-widest text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">Languages & Runtimes</h3>
                <div className="flex flex-wrap gap-2.5 sm:gap-4">
                  {skills.programming.map((skill) => (
                    <span key={skill} className="px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider bg-zinc-950 text-zinc-200 border-b-2 sm:border-b-4 border-zinc-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5 sm:p-8 lg:p-12 rounded-xl md:rounded-none bg-lines border-2 sm:border-4 border-zinc-800 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] sm:shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:border-indigo-500 hover:shadow-[6px_6px_0px_rgba(99,102,241,0.5)] sm:hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] transition-all">
                <h3 className="font-mono text-indigo-400 font-black uppercase tracking-widest text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2.5 sm:gap-4">
                  {skills.frameworks.map((fw) => (
                    <span key={fw} className="px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider bg-zinc-950 text-zinc-200 border-b-2 sm:border-b-4 border-zinc-700">
                      {fw}
                    </span>
                  ))}
                  {skills.databases.map((db) => (
                    <span key={db} className="px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider bg-zinc-950 text-zinc-200 border-b-2 sm:border-b-4 border-zinc-700">
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Engineering Projects */}
          <section id="projects" className="w-full">
            <div className="border-b-4 border-zinc-800 pb-4 sm:pb-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-oswald uppercase tracking-wider">Featured <span className="text-indigo-400">Projects</span></h2>
            </div>
            <div className="space-y-10 sm:space-y-16 lg:space-y-24">
              {projects.map((p) => (
                <div key={p.id} className="p-5 sm:p-8 lg:p-14 rounded-xl md:rounded-none bg-lines border-2 sm:border-4 border-zinc-800 hover:border-indigo-500/50 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] sm:shadow-[8px_8px_0px_rgba(0,0,0,0.5)] transition-all flex flex-col xl:flex-row gap-8 sm:gap-12 lg:gap-20 items-center relative">
                  
                  {/* Accent tape graphic */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-zinc-200/10 rotate-3 border border-zinc-100/20 backdrop-blur-xl z-10 hidden md:block" />

                  {/* Left Side: Text Content */}
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start mb-4 sm:mb-6 flex-wrap gap-2 sm:gap-4">
                      <div>
                        <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-widest text-zinc-950 bg-indigo-400 mb-3 sm:mb-4">
                          {p.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-oswald uppercase tracking-wide text-zinc-50">{p.title}</h3>
                      </div>
                      <span className="font-mono font-bold text-xs sm:text-sm lg:text-base text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 sm:px-4 sm:py-2 self-start">{p.date}</span>
                    </div>
                    <p className="text-zinc-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed font-medium max-w-2xl">{p.description}</p>
                    <ul className="list-none text-zinc-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                      {p.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 sm:gap-4">
                          <span className="text-indigo-500 text-lg sm:text-xl flex-shrink-0">▹</span> <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                      {p.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider bg-zinc-950 text-zinc-300 border border-zinc-700 sm:border-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Carousel */}
                  <div className="w-full xl:w-[600px] h-[260px] sm:h-[340px] md:h-[400px] lg:h-[450px] flex-shrink-0 relative flex justify-center items-center">
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                      <Carousel
                        items={p.images}
                        baseWidth={600}
                        aspectRatio={1.5}
                        effect="cube"
                        indicator="bars"
                        frame
                        arrows={false}
                        loop={true}
                        autoplay={true}
                        autoplayDelay={4000}
                        pauseOnHover={true}
                        theme="dark"
                        peek={0}
                        gap={24}
                        radius={0}
                        draggable
                        round={false}
                      />
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* Education & Experience */}
          <section id="experience" className="w-full">
            <div className="border-b-4 border-zinc-800 pb-4 sm:pb-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-oswald uppercase tracking-wider">Experience & <span className="text-indigo-400">Education</span></h2>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="p-5 sm:p-8 lg:p-12 rounded-xl md:rounded-none bg-lines border-l-4 sm:border-l-8 border-indigo-500 border-y-2 sm:border-y-4 border-r-2 sm:border-r-4 border-y-zinc-800 border-r-zinc-800 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] sm:shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-oswald uppercase tracking-wide">{personalInfo.education.institution}</h3>
                <p className="font-mono text-indigo-400 font-bold text-xs sm:text-sm lg:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-2 sm:mt-3 mb-3 sm:mb-4">{personalInfo.education.degree}</p>
                <p className="text-zinc-400 text-sm sm:text-base lg:text-lg font-medium">{personalInfo.education.status}</p>
              </div>
              {experience.map((e, idx) => (
                <div key={idx} className="p-5 sm:p-8 lg:p-12 rounded-xl md:rounded-none bg-lines border-2 sm:border-4 border-zinc-800 hover:border-indigo-500 hover:shadow-[6px_6px_0px_rgba(99,102,241,0.5)] sm:hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] shadow-[6px_6px_0px_rgba(0,0,0,0.5)] sm:shadow-[8px_8px_0px_rgba(0,0,0,0.5)] transition-all">
                  <div className="flex justify-between items-start mb-4 sm:mb-6 flex-wrap gap-2 sm:gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-oswald uppercase tracking-wide">{e.role}</h3>
                      <p className="text-indigo-400 font-mono font-bold text-xs sm:text-sm lg:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-2 sm:mt-3">{e.organization}</p>
                    </div>
                    <span className="font-mono font-bold text-xs sm:text-sm lg:text-base text-zinc-400 bg-zinc-950 px-3 py-1 sm:px-4 sm:py-2 border border-zinc-800 self-start">{e.duration}</span>
                  </div>
                  <ul className="list-none text-zinc-300 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 sm:gap-4">
                        <span className="text-indigo-500 text-lg sm:text-xl flex-shrink-0">▹</span> <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Off-Screen Pursuits (Hobbies) */}
          <section id="hobbies" className="w-full">
            <div className="border-b-4 border-zinc-800 pb-4 sm:pb-6 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-oswald uppercase tracking-wider">Off-Screen <span className="text-indigo-400">Pursuits</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Active Card */}
              <div className="relative p-5 sm:p-8 lg:p-10 rounded-xl md:rounded-none bg-lines border-2 sm:border-4 border-zinc-800 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] sm:shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:border-indigo-500 hover:shadow-[6px_6px_0px_rgba(99,102,241,0.5)] sm:hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] transition-all">
                <div className="absolute -top-3.5 -right-2 sm:-top-4 sm:-right-4 px-2.5 py-1 sm:px-3 sm:py-1 bg-indigo-500 text-zinc-950 font-black uppercase text-[11px] sm:text-xs md:text-sm rotate-6 border-2 border-zinc-950 shadow-[3px_3px_0px_#ffffff] sm:shadow-[4px_4px_0px_#ffffff]">
                  Co-op Mode
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-oswald uppercase tracking-wide text-zinc-50 mb-3 sm:mb-4">Analog & Active</h3>
                <p className="text-zinc-300 text-sm sm:text-base font-medium mb-6 sm:mb-8 leading-relaxed">
                  Always moving. Usually hitting the wall, the roads, or the tables with friends to balance out the screen time.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Bouldering', 'Biking', 'Table Tennis', 'Lifting'].map((hobby) => (
                    <span key={hobby} className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-bold uppercase tracking-wider bg-zinc-950 text-indigo-300 border border-zinc-800 sm:border-2">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gaming Card */}
              <div className="p-5 sm:p-8 lg:p-10 rounded-xl md:rounded-none bg-lines border-2 sm:border-4 border-zinc-800 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] sm:shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:border-indigo-500 hover:shadow-[6px_6px_0px_rgba(99,102,241,0.5)] sm:hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] transition-all">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-oswald uppercase tracking-wide text-zinc-50 mb-3 sm:mb-4">Digital Worlds</h3>
                <p className="text-zinc-300 text-sm sm:text-base font-medium mb-6 sm:mb-8 leading-relaxed">
                  From sweating out tactical rounds to catching 'em all and building endless blocky landscapes.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Rainbow Six Siege', 'Pokémon', 'Minecraft'].map((game) => (
                    <span key={game} className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-bold uppercase tracking-wider bg-zinc-950 text-indigo-300 border border-zinc-800 sm:border-2">
                      {game}
                    </span>
                  ))}
                </div>
              </div>

              {/* Food/Downtime Card */}
              <div className="p-5 sm:p-8 lg:p-10 rounded-xl md:rounded-none bg-lines border-2 sm:border-4 border-zinc-800 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] sm:shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:border-indigo-500 hover:shadow-[6px_6px_0px_rgba(99,102,241,0.5)] sm:hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] transition-all">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-oswald uppercase tracking-wide text-zinc-50 mb-3 sm:mb-4">Fuel & Recovery</h3>
                <p className="text-zinc-300 text-sm sm:text-base font-medium mb-6 sm:mb-8 leading-relaxed">
                  Hunting down the best local pastries near the dorm to replenish the calories burned bouldering.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Pastry Hunting', 'Local Bakeries', 'Coffee'].map((fuel) => (
                    <span key={fuel} className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-bold uppercase tracking-wider bg-zinc-950 text-indigo-300 border border-zinc-800 sm:border-2">
                      {fuel}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </div>
  );
}