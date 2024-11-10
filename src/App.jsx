import { Hero } from "./components/custom/Hero";
import { About } from "./components/custom/About";
import { WorkExperience } from "./components/custom/WorkExperience";
import { Education } from "./components/custom/Education";
import { Skills } from "./components/custom/Skills";
import { Projects } from "./components/custom/Projects";
import { GitHub } from "./components/custom/GitHub";
import { LeetCodeStats } from "./components/custom/LeetCodeStats";
import { GetInTouch } from "./components/custom/GetInTouch";
import React, { useEffect, useRef } from "react";
import Shepherd from "shepherd.js";

export default function App() {
  const tourStarted = useRef(false);
  useEffect(() => {
    if (!tourStarted.current) {
      // Initialize Shepherd tour
      const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
          cancelIcon: {
            enabled: true,
          },
          classes: "shepherd-theme-arrows",
          scrollTo: { behavior: "smooth", block: "center" },
        },
      });

      tour.addStep({
        id: "step-1",
        title: "Grab My Resume!",
        text: "Click here to download a copy of my resume and see my journey at a glance.",
        attachTo: { element: "#resume", on: "bottom" },
        buttons: [
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });
      
      tour.addStep({
        id: "step-2",
        title: "Project Documentation",
        text: "Dive deep into the details! Click here for a full guide on how my project works.",
        attachTo: { element: ".docs", on: "bottom" },
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });
      
      tour.addStep({
        id: "step-3",
        title: "See It in Action!",
        text: "Take a look at the live preview of my project—see what it can do in real-time!",
        attachTo: { element: "#live-link", on: "bottom" },
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });
      
      tour.addStep({
        id: "step-4",
        title: "Explore the Source Code",
        text: "Curious about the code? Head over to my GitHub repository and explore the details!",
        attachTo: { element: "#source-code", on: "bottom" },
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Next",
            action: tour.next,
          },
        ],
      });
      
      tour.addStep({
        id: "step-5",
        title: "LeetCode Achievements",
        text: "Check out my LeetCode stats to see my coding challenges and accomplishments!",
        attachTo: { element: "#leetcode-stats", on: "bottom" },
        buttons: [
          {
            text: "Back",
            action: tour.back,
          },
          {
            text: "Finish",
            action: tour.complete,
          },
        ],
      });
      
      tour.start();
      tourStarted.current = true;
    }
  }, []); // Run only once on initial load

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
