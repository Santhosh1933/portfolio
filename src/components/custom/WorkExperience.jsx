import { workExperience } from "@/constant";
import React from "react";

export const WorkExperience = () => {
  return (
    <div>
      <h1 className="font-medium pb-4 text-2xl">WorkExperience</h1>

      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        {workExperience.map((experience, i) => (
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              <a href={experience.companyUrl} target="_blank">
                {experience.company}
              </a>
            
                <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                  {experience.type}
                </span>
              
            </h3>
            <time class="block mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {experience.duration}
            </time>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-600">
              {experience.role}
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {experience.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};
