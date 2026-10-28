// src/App.jsx
import React from 'react';
import { personalInfo, projects, skills, experience } from './data/portfolioData';
import Lanyard from './components/Lanyard';
import Folder from './components/Folder';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-gray-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/80 border-b border-gray-800/80">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono font-bold text-teal-400 text-lg">TJR.dev</span>
          <nav className="flex gap-6 text-sm text-gray-400">
            <a href="#hero" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        {/* Hero Section with Interactive React Lanyard */}
        <section id="hero" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[500px]">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-400 bg-teal-950/60 border border-teal-500/30 rounded-full mb-4">
              DOST Scholar • UPLB CS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
              {personalInfo.name}
            </h1>
            <p className="font-mono text-teal-400 mb-4">{personalInfo.role}</p>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg bg-teal-500 text-slate-950 font-semibold hover:bg-teal-400 transition-colors text-sm">
                GitHub Profile
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg border border-gray-700 font-medium hover:bg-gray-800 transition-colors text-sm">
                LinkedIn
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg border border-gray-700 font-medium hover:bg-gray-800 transition-colors text-sm">
                Resume (PDF)
              </a>
            </div>
          </div>

          {/* 3D Lanyard Interactive Component */}
          <div style={{ width: '100%', height: '600px' }}>
            <Lanyard 
              frontImage="../badge.png"
              imageFit="cover"
              cardColor="#ffffff"
              orientation="portrait"
              finish="glossy"
              cornerRadius={0.3}
              size={0.6}
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
        </section>

        {/* Technical Capabilities Matrix */}
        <section id="skills">
          <h2 className="text-2xl font-bold mb-6">Technical Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-800">
              <h3 className="font-mono text-teal-400 text-sm mb-4">Languages & Runtimes</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-200 border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-800">
              <h3 className="font-mono text-teal-400 text-sm mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((fw) => (
                  <span key={fw} className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-200 border border-gray-700">
                    {fw}
                  </span>
                ))}
                {skills.databases.map((db) => (
                  <span key={db} className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-200 border border-gray-700">
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Engineering Projects */}
        <section id="projects">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.id} className="p-6 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-gray-700 transition-colors flex flex-col lg:flex-row gap-8 items-center">
                
                {/* Left Side: Project Text Details */}
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold text-teal-300 bg-teal-950/80 border border-teal-500/30 rounded-full mb-2">
                        {p.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-100">{p.title}</h3>
                    </div>
                    <span className="font-mono text-xs text-gray-400">{p.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.description}</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm mb-4 space-y-1">
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex gap-2 flex-wrap">
                    {p.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-md bg-gray-800 text-teal-300 border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Interactive Screenshots Folder mapped from p.images */}
                <div className="w-full lg:w-[340px] h-[300px] flex-shrink-0 relative flex justify-center items-center rounded-lg bg-gray-950/50 border border-gray-800/50">
                  <Folder 
                    label="Screenshots" 
                    items={p.images}
                    mode="flap"
                    variant="solid"
                    layout="spread"
                    color="#0d9488"
                    paperColor="#ffffff"
                    tabPosition="right"
                    openOn="click"
                    size={0.9}
                    frost={0.25}
                    tilt={0.5}
                    speed={1}
                    bounce={0.4}
                    peek
                    intro
                    draggable
                    zoomOnClick
                    theme="dark"
                  />
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Education & Experience */}
        <section id="experience">
          <h2 className="text-2xl font-bold mb-6">Experience & Education</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-800">
              <h3 className="text-lg font-bold">{personalInfo.education.institution}</h3>
              <p className="font-mono text-teal-400 text-sm mb-1">{personalInfo.education.degree}</p>
              <p className="text-gray-400 text-sm">{personalInfo.education.status}</p>
            </div>
            {experience.map((e, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gray-900/60 border border-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold">{e.role}</h3>
                    <p className="text-teal-400 text-sm">{e.organization}</p>
                  </div>
                  <span className="font-mono text-xs text-gray-400">{e.duration}</span>
                </div>
                <ul className="list-disc list-inside text-gray-400 text-sm mt-3 space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
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