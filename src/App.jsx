import React from "react";
import { Hero } from "./components/custom/Hero";
import { About } from "./components/custom/About";
import { WorkExperience } from "./components/custom/WorkExperience";
import { Education } from "./components/custom/Education";
import { Skills } from "./components/custom/Skills";
import { Projects } from "./components/custom/Projects";
import { GitHub } from "./components/custom/GitHub";
import { LeetCodeStats } from "./components/custom/LeetCodeStats";
import { GetInTouch } from "./components/custom/GetInTouch";
export default function App() {
  return (
    <div className="container space-y-16 my-20">
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <GitHub />
      <LeetCodeStats />
      <GetInTouch />
    </div>
  );
}
