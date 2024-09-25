import { skills } from "@/constant";
import React from "react";
import { Helmet } from "react-helmet-async";

export const Skills = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="keywords"
          content={`santhosh s , santhoshcse , santhosh cse , santhosh ksr , ${skills}`}
        />
      </Helmet>
      <h1 className="font-medium pb-4 text-2xl">Skills</h1>
      <div className="">
        <div className="flex gap-x-6 gap-y-2 flex-wrap">
          {skills.map((skill, idx) => (
            <div key={idx} className="font-medium text-gray-800">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
