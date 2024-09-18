import { projects } from "@/constant";
import React from "react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Workflow } from "lucide-react";

export const Projects = () => {
  return (
    <div>
      {" "}
      <h1 className="font-medium pb-4 text-2xl">Projects</h1>
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        {projects.map((project, i) => (
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <Workflow className="p-1 text-blue-900" />
            </span>
            <h3 class="flex items-start mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              <a href={project.link} target="_blank">
                {project.name}
              </a>
            </h3>
            <time class="block mb-2 leading-7 font-medium  text-gray-600">
              {project.technologies.join(" - ")}
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {project.description}
            </p>
            <div className="grid grid-cols-1 sm:flex gap-2">
              <a target="_blank" href={project.link}>
                <Button className="sm:w-fit">Live Preview</Button>
              </a>
              <a target="_blank" href={project.github}>
                <Button className="sm:w-fit gap-2" variant="outline">
                  Source Code <GitHubLogoIcon />
                </Button>
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
