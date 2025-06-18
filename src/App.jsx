import React from "react";
import Hero from "./Component/HeroScecrtion/Hero";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skill";
import Project from "./Component/Project/Project";

const Layout = () => {
  return (
    <div className=" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main>
        <Hero />

        <About />
        <Skills />
        <Project />
      </main>
    </div>
  );
};

export default Layout;
