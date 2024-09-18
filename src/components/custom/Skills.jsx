import { skills } from "@/constant";
import React from "react";

export const Skills = () => {
  return (
    <div>
      <h1 className="font-medium pb-4 text-2xl">Skills</h1>
      <div className="">
        <div className="flex gap-x-6 gap-y-2 flex-wrap">
          {skills.map((skill, idx) => (
            <div key={idx} className="font-medium text-gray-800">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
