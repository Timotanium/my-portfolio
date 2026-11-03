// src/App.jsx
import React from 'react';
import { personalInfo, projects, skills, experience } from './data/portfolioData';
import Lanyard from './components/Lanyard';
import Carousel from './components/Carousel';
import DotGrid from './components/DotGrid';
import CursorTrail from './components/CursorTrail';

export default function App() {
  return (
    <div className="min-h-screen text-zinc-50 font-sans selection:bg-indigo-500 selection:text-white">
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
        <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b-2 border-zinc-800/80">
          <div className="w-full px-6 md:px-12 lg:px-16 py-5 flex justify-between items-center">
            <span className="font-mono font-black text-indigo-400 text-2xl lg:text-3xl tracking-tighter">
              TJR.dev
            </span>
            <nav className="hidden md:flex gap-10 text-base text-zinc-400 font-bold uppercase tracking-widest">
              <a href="#hero" className="hover:text-indigo-400 hover:-translate-y-0.5 transition-all">About</a>
              <a href="#skills" className="hover:text-indigo-400 hover:-translate-y-0.5 transition-all">Skills</a>
              <a href="#projects" className="hover:text-indigo-400 hover:-translate-y-0.5 transition-all">Projects</a>
              <a href="#experience" className="hover:text-indigo-400 hover:-translate-y-0.5 transition-all">Experience</a>
            </nav>
          </div>
        </header>

        {/* Expanded Main Container */}
        <main className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 space-y-40 relative">
          
          {/* Hero Section */}
          <section id="hero" className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center min-h-[80vh] bg-lines rounded-none md:rounded-3xl p-6 md:p-12 lg:p-20 border-0 md:border-2 border-zinc-800 overflow-hidden">
            {/* Left Side: Massive Stickers & Typography */}
            <div className="relative z-10 flex flex-col items-start">
              
              <div className="absolute -top-10 right-0 md:right-10 px-4 py-2 bg-zinc-900 text-indigo-400 font-black uppercase text-sm rounded-full rotate-6 border-4 border-indigo-500 shadow-[4px_4px_0px_#6366f1]">
                DOST Scholar
              </div>
              <div className="absolute top-40 -left-6 md:-left-10 px-4 py-2 bg-indigo-400 text-zinc-950 font-black uppercase text-sm rounded-full -rotate-12 border-4 border-zinc-950 shadow-[4px_4px_0px_#ffffff]">
                UPLB CS
              </div>

              <div className="relative -rotate-2 hover:rotate-1 transition-transform duration-300 w-full max-w-[500px] rounded-xl overflow-hidden border-4 border-zinc-200 bg-zinc-100 shadow-[12px_12px_0px_rgba(99,102,241,0.25)] mb-12">
                <div className="bg-indigo-600 text-center py-5 border-b-4 border-zinc-200">
                  <h2 className="text-5xl lg:text-6xl font-oswald text-white tracking-widest uppercase mb-0">Hey Yo</h2>
                  <p className="text-indigo-100 font-black text-base uppercase tracking-widest">they call me</p>
                </div>
                <div className="py-10 text-center bg-zinc-100 flex justify-center">
                  <h1 className="text-6xl lg:text-7xl font-marker text-zinc-900 transform -rotate-2">
                    {personalInfo.name}
                  </h1>
                </div>
              </div>

              <div className="space-y-4 mb-10 w-full">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-oswald text-zinc-50 uppercase tracking-wide leading-[1.05]">
                  SOFTWARE ENGINEER <br/>
                  <span className="text-indigo-400">& RESEARCH LEAD</span>
                </h3>
                <p className="font-mono text-indigo-400 font-bold text-sm md:text-base tracking-[0.2em] uppercase">
                  {personalInfo.role} • COMPUTER VISION • UI/UX
                </p>
              </div>

              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl font-medium border-l-8 border-indigo-500 pl-6 mb-12">
                {personalInfo.bio}
              </p>

              <div className="flex gap-6 flex-wrap">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" 
                   className="px-8 py-4 bg-indigo-600 text-white font-black uppercase text-base lg:text-lg border-4 border-indigo-500 hover:-translate-y-2 hover:shadow-[6px_6px_0px_#ffffff] transition-all">
                  GitHub Profile
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" 
                   className="px-8 py-4 bg-zinc-950 text-zinc-50 font-black uppercase text-base lg:text-lg border-4 border-zinc-700 hover:-translate-y-2 hover:border-indigo-400 hover:text-indigo-400 transition-all">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Side: 3D Lanyard */}
            <div className="relative z-10 w-full h-[600px] lg:h-[800px] flex justify-center items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
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
            <div className="border-b-4 border-zinc-800 pb-6 mb-12">
              <h2 className="text-5xl lg:text-7xl font-oswald uppercase tracking-wider">Technical <span className="text-indigo-400">Capabilities</span></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="p-8 lg:p-12 rounded-none bg-zinc-950/60 backdrop-blur-md bg-lines border-4 border-zinc-800 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:border-indigo-500 hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] transition-all">
                <h3 className="font-mono text-indigo-400 font-black uppercase tracking-widest text-lg lg:text-xl mb-8">Languages & Runtimes</h3>
                <div className="flex flex-wrap gap-4">
                  {skills.programming.map((skill) => (
                    <span key={skill} className="px-5 py-2 text-sm lg:text-base font-bold uppercase tracking-wider bg-zinc-950 text-zinc-200 border-b-4 border-zinc-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 lg:p-12 rounded-none bg-zinc-950/60 backdrop-blur-md bg-lines border-4 border-zinc-800 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:border-indigo-500 hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] transition-all">
                <h3 className="font-mono text-indigo-400 font-black uppercase tracking-widest text-lg lg:text-xl mb-8">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-4">
                  {skills.frameworks.map((fw) => (
                    <span key={fw} className="px-5 py-2 text-sm lg:text-base font-bold uppercase tracking-wider bg-zinc-950 text-zinc-200 border-b-4 border-zinc-700">
                      {fw}
                    </span>
                  ))}
                  {skills.databases.map((db) => (
                    <span key={db} className="px-5 py-2 text-sm lg:text-base font-bold uppercase tracking-wider bg-zinc-950 text-zinc-200 border-b-4 border-zinc-700">
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Engineering Projects */}
          <section id="projects" className="w-full">
            <div className="border-b-4 border-zinc-800 pb-6 mb-12">
              <h2 className="text-5xl lg:text-7xl font-oswald uppercase tracking-wider">Featured <span className="text-indigo-400">Projects</span></h2>
            </div>
            <div className="space-y-16 lg:space-y-24">
              {projects.map((p) => (
                <div key={p.id} className="p-8 lg:p-14 bg-zinc-950/60 backdrop-blur-md bg-lines border-4 border-zinc-800 hover:border-indigo-500/50 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] transition-all flex flex-col xl:flex-row gap-12 lg:gap-20 items-center relative">
                  
                  {/* Accent tape graphic */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-zinc-200/10 rotate-3 border border-zinc-100/20 backdrop-blur-xl z-10 hidden md:block" />

                  {/* Left Side: Text Content */}
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                      <div>
                        <span className="inline-block px-4 py-1.5 text-xs font-black uppercase tracking-widest text-zinc-950 bg-indigo-400 mb-4">
                          {p.category}
                        </span>
                        <h3 className="text-4xl lg:text-5xl font-oswald uppercase tracking-wide text-zinc-50">{p.title}</h3>
                      </div>
                      <span className="font-mono font-bold text-sm lg:text-base text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2">{p.date}</span>
                    </div>
                    <p className="text-zinc-300 text-lg mb-8 leading-relaxed font-medium max-w-2xl">{p.description}</p>
                    <ul className="list-none text-zinc-300 text-base lg:text-lg mb-8 space-y-3">
                      {p.highlights.map((h, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="text-indigo-500 text-xl">▹</span> {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3 flex-wrap">
                      {p.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-xs lg:text-sm font-bold uppercase tracking-wider bg-zinc-950 text-zinc-300 border-2 border-zinc-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Carousel */}
                  <div className="w-full xl:w-[600px] h-[400px] lg:h-[450px] flex-shrink-0 relative flex justify-center items-center">
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
            <div className="border-b-4 border-zinc-800 pb-6 mb-12">
              <h2 className="text-5xl lg:text-7xl font-oswald uppercase tracking-wider">Experience & <span className="text-indigo-400">Education</span></h2>
            </div>
            <div className="space-y-8">
              <div className="p-8 lg:p-12 bg-zinc-950/60 backdrop-blur-md bg-lines border-l-8 border-indigo-500 border-y-4 border-r-4 border-y-zinc-800 border-r-zinc-800 shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
                <h3 className="text-3xl lg:text-4xl font-oswald uppercase tracking-wide">{personalInfo.education.institution}</h3>
                <p className="font-mono text-indigo-400 font-bold text-sm lg:text-base uppercase tracking-[0.2em] mt-3 mb-4">{personalInfo.education.degree}</p>
                <p className="text-zinc-400 text-base lg:text-lg font-medium">{personalInfo.education.status}</p>
              </div>
              {experience.map((e, idx) => (
                <div key={idx} className="p-8 lg:p-12 bg-zinc-950/60 backdrop-blur-md bg-lines border-4 border-zinc-800 hover:border-indigo-500 hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] shadow-[8px_8px_0px_rgba(0,0,0,0.5)] transition-all">
                  <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-oswald uppercase tracking-wide">{e.role}</h3>
                      <p className="text-indigo-400 font-mono font-bold text-sm lg:text-base uppercase tracking-[0.2em] mt-3">{e.organization}</p>
                    </div>
                    <span className="font-mono font-bold text-sm lg:text-base text-zinc-400 bg-zinc-950 px-4 py-2 border border-zinc-800">{e.duration}</span>
                  </div>
                  <ul className="list-none text-zinc-300 text-base lg:text-lg mt-6 space-y-3">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-indigo-500 text-xl">▹</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Off-Screen Pursuits (Hobbies) */}
          <section id="hobbies" className="w-full">
            <div className="border-b-4 border-zinc-800 pb-6 mb-12">
              <h2 className="text-5xl lg:text-7xl font-oswald uppercase tracking-wider">Off-Screen <span className="text-indigo-400">Pursuits</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Active Card */}
              <div className="relative p-8 lg:p-10 bg-zinc-950/60 backdrop-blur-md bg-lines border-4 border-zinc-800 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:border-indigo-500 hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] transition-all">
                <div className="absolute -top-4 -right-4 px-3 py-1 bg-indigo-500 text-zinc-950 font-black uppercase text-xs md:text-sm rotate-6 border-2 border-zinc-950 shadow-[4px_4px_0px_#ffffff]">
                  Co-op Mode
                </div>
                <h3 className="text-2xl lg:text-3xl font-oswald uppercase tracking-wide text-zinc-50 mb-4">Analog & Active</h3>
                <p className="text-zinc-300 font-medium mb-8 leading-relaxed">
                  Always moving. Usually hitting the wall, the roads, or the tables with friends to balance out the screen time.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Bouldering', 'Biking', 'Table Tennis', 'Lifting'].map((hobby) => (
                    <span key={hobby} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-zinc-950 text-indigo-300 border-2 border-zinc-800">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gaming Card */}
              <div className="p-8 lg:p-10 bg-zinc-950/60 backdrop-blur-md bg-lines border-4 border-zinc-800 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:border-indigo-500 hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] transition-all">
                <h3 className="text-2xl lg:text-3xl font-oswald uppercase tracking-wide text-zinc-50 mb-4">Digital Worlds</h3>
                <p className="text-zinc-300 font-medium mb-8 leading-relaxed">
                  From sweating out tactical rounds to catching 'em all and building endless blocky landscapes.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Rainbow Six Siege', 'Pokémon', 'Minecraft'].map((game) => (
                    <span key={game} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-zinc-950 text-indigo-300 border-2 border-zinc-800">
                      {game}
                    </span>
                  ))}
                </div>
              </div>

              {/* Food/Downtime Card */}
              <div className="p-8 lg:p-10 bg-zinc-950/60 backdrop-blur-md bg-lines border-4 border-zinc-800 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:border-indigo-500 hover:shadow-[8px_8px_0px_rgba(99,102,241,0.5)] transition-all">
                <h3 className="text-2xl lg:text-3xl font-oswald uppercase tracking-wide text-zinc-50 mb-4">Fuel & Recovery</h3>
                <p className="text-zinc-300 font-medium mb-8 leading-relaxed">
                  Hunting down the best local pastries near the dorm to replenish the calories burned bouldering.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Pastry Hunting', 'Local Bakeries', 'Coffee'].map((fuel) => (
                    <span key={fuel} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-zinc-950 text-indigo-300 border-2 border-zinc-800">
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