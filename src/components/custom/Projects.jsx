import { projects } from "@/constant";
import React from "react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Workflow } from "lucide-react";
import { ProjectDocs } from "./ProjectDocs";
import { RoughNotation } from "react-rough-notation";

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
              <a href={project.github} target="_blank">
                {project.name}
              </a>
              {project.docs && (
                <ProjectDocs
                  trigger={
                    <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                      <RoughNotation type="circle" show="true">Docs</RoughNotation>
                    </span>
                  }
                  src={project.docs}
                  title={project.name}
                />
              )}
            </h3>
            <time class="block mb-2 leading-7 font-medium  text-gray-600">
              {project.technologies.join(" - ")}
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {project.description}
            </p>
            <div className="grid grid-cols-1 sm:flex gap-3">
              {project.link && (
                <a
                  target="_blank"
                  className="sm:w-fit w-full"
                  href={project.link}
                >
                  <Button className="sm:w-fit w-full">Live Preview</Button>
                </a>
              )}
              <a
                target="_blank"
                className="sm:w-fit w-full"
                href={project.github}
              >
                <Button className="sm:w-fit w-full gap-2" variant="outline">
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
