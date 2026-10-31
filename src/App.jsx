// src/App.jsx
import React from 'react';
import { personalInfo, projects, skills, experience } from './data/portfolioData';
import Lanyard from './components/Lanyard';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-gray-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* Import stylized fonts for the brutalist/sticker aesthetic */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Permanent+Marker&display=swap');
        .font-marker { font-family: 'Permanent Marker', cursive; }
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .bg-lines {
          background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px);
        }
      `}</style>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/80 border-b border-gray-800/80">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono font-bold text-teal-400 text-lg">TJR.dev</span>
          <nav className="flex gap-6 text-sm text-gray-400 font-bold uppercase tracking-wider">
            <a href="#hero" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-32 relative">
        
        {/* Hero Section - Scrapbook / Brutalist Style */}
        <section id="hero" className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[650px] bg-lines rounded-3xl p-4 md:p-8 border border-gray-800/50 overflow-hidden">
          
          {/* Left Side: Stickers & Typography */}
          <div className="relative z-10 flex flex-col items-start pt-12 md:pt-0">
            
            {/* Floating Badges */}
            <div className="absolute top-0 right-10 md:right-20 px-3 py-1 bg-[#090d16] text-teal-400 font-black uppercase text-xs rounded-full rotate-6 border-2 border-teal-500 shadow-[2px_2px_0px_#0d9488]">
              DOST Scholar
            </div>
            <div className="absolute top-32 -left-4 px-3 py-1 bg-teal-400 text-[#090d16] font-black uppercase text-xs rounded-full -rotate-6 border-2 border-[#090d16] shadow-[2px_2px_0px_#ffffff]">
              UPLB CS
            </div>

            {/* "Hello My Name Is" Sticker */}
            <div className="relative -rotate-3 hover:rotate-1 transition-transform duration-300 w-full max-w-sm rounded-xl overflow-hidden border-4 border-gray-200 bg-gray-200 shadow-[8px_8px_0px_rgba(13,148,136,0.3)] mb-10">
              <div className="bg-teal-500 text-center py-4 border-b-4 border-gray-200">
                <h2 className="text-4xl font-oswald text-gray-100 tracking-widest uppercase mb-0">Hey Yo</h2>
                <p className="text-teal-950 font-bold text-sm uppercase tracking-wide">they call me</p>
              </div>
              <div className="py-8 text-center bg-gray-200 flex justify-center">
                <h1 className="text-5xl md:text-6xl font-marker text-slate-900 transform -rotate-2">
                  {personalInfo.name}
                </h1>
              </div>
            </div>

            {/* Heavy Blocky Subtitle */}
            <div className="space-y-2 mb-6">
              <h3 className="text-4xl md:text-5xl font-oswald text-gray-100 uppercase tracking-wide leading-[1.1]">
                SOFTWARE ENGINEER & <br/>
                <span className="text-teal-400">RESEARCH LEAD</span>
              </h3>
              <p className="font-mono text-teal-500 font-bold text-xs md:text-sm tracking-widest uppercase">
                {personalInfo.role} • COMPUTER VISION • UI/UX
              </p>
            </div>

            {/* Bio with brutalist left border */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-medium border-l-4 border-teal-500 pl-4 mb-8">
              {personalInfo.bio}
            </p>

            {/* Brutalist Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" 
                 className="px-6 py-2 bg-teal-500 text-slate-950 font-black uppercase text-sm border-2 border-teal-500 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#ffffff] transition-all">
                GitHub Profile
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" 
                 className="px-6 py-2 bg-[#090d16] text-gray-100 font-black uppercase text-sm border-2 border-gray-600 hover:-translate-y-1 hover:border-teal-400 hover:text-teal-400 transition-all">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side: 3D Lanyard Interactive Component */}
          <div className="relative z-10 w-full h-[500px] md:h-[650px] flex justify-center items-center">
            {/* Optional backdrop glow for the ID */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none" />
            <div style={{ width: '100%', height: '100%' }}>
              <Lanyard 
                frontImage="../badge.png"
                imageFit="cover"
                cardColor="#ffffff"
                orientation="portrait"
                finish="glossy"
                cornerRadius={0.3}
                size={0.65}
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
        <section id="skills">
          <h2 className="text-3xl font-oswald uppercase tracking-wider mb-8">Technical <span className="text-teal-400">Capabilities</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-none bg-[#090d16] border-2 border-gray-700 shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:border-teal-500 hover:shadow-[4px_4px_0px_rgba(13,148,136,0.5)] transition-all">
              <h3 className="font-mono text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">Languages & Runtimes</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gray-800 text-gray-200 border-b-2 border-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-none bg-[#090d16] border-2 border-gray-700 shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:border-teal-500 hover:shadow-[4px_4px_0px_rgba(13,148,136,0.5)] transition-all">
              <h3 className="font-mono text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((fw) => (
                  <span key={fw} className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gray-800 text-gray-200 border-b-2 border-gray-600">
                    {fw}
                  </span>
                ))}
                {skills.databases.map((db) => (
                  <span key={db} className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gray-800 text-gray-200 border-b-2 border-gray-600">
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Engineering Projects */}
        <section id="projects">
          <h2 className="text-3xl font-oswald uppercase tracking-wider mb-8">Featured <span className="text-teal-400">Projects</span></h2>
          <div className="space-y-12">
            {projects.map((p) => (
              <div key={p.id} className="p-6 md:p-8 bg-[#090d16] border-2 border-gray-800 hover:border-teal-500/50 transition-colors flex flex-col lg:flex-row gap-10 items-center relative">
                
                {/* Accent tape/pin graphic for scrapbook feel */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-200/10 rotate-2 border border-gray-100/20 backdrop-blur-sm z-10 hidden md:block" />

                {/* Left Side: Project Text Details */}
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <div>
                      <span className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#090d16] bg-teal-400 mb-3">
                        {p.category}
                      </span>
                      <h3 className="text-2xl font-oswald uppercase tracking-wide text-gray-100">{p.title}</h3>
                    </div>
                    <span className="font-mono font-bold text-xs text-teal-500 bg-teal-500/10 px-2 py-1">{p.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed font-medium">{p.description}</p>
                  <ul className="list-none text-gray-400 text-sm mb-6 space-y-2">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-teal-500">▹</span> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {p.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-900 text-gray-300 border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Interactive Screenshots Carousel */}
                <div className="w-full lg:w-[380px] h-[320px] flex-shrink-0 relative flex justify-center items-center">
                  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Carousel
                      items={p.images}
                      baseWidth={400}
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
                      gap={16}
                      radius={0} // Sharp corners fit the brutalist theme better
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
        <section id="experience">
          <h2 className="text-3xl font-oswald uppercase tracking-wider mb-8">Experience & <span className="text-teal-400">Education</span></h2>
          <div className="space-y-6">
            <div className="p-6 md:p-8 bg-lines border-l-4 border-teal-500 bg-[#090d16] border-y-2 border-r-2 border-y-gray-800 border-r-gray-800">
              <h3 className="text-xl font-oswald uppercase tracking-wide">{personalInfo.education.institution}</h3>
              <p className="font-mono text-teal-400 font-bold text-xs uppercase tracking-widest mt-1 mb-2">{personalInfo.education.degree}</p>
              <p className="text-gray-400 text-sm font-medium">{personalInfo.education.status}</p>
            </div>
            {experience.map((e, idx) => (
              <div key={idx} className="p-6 md:p-8 bg-[#090d16] border-2 border-gray-800 hover:border-gray-600 transition-colors">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-oswald uppercase tracking-wide">{e.role}</h3>
                    <p className="text-teal-400 font-mono font-bold text-xs uppercase tracking-widest mt-1">{e.organization}</p>
                  </div>
                  <span className="font-mono font-bold text-xs text-gray-500 bg-gray-900 px-2 py-1">{e.duration}</span>
                </div>
                <ul className="list-none text-gray-400 text-sm mt-4 space-y-2">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-teal-500">▹</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}