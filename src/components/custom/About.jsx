import { about } from "@/constant";
import React from "react";

export const About = () => {
  return (
    <div>
      <h1 className="font-medium pb-4 text-2xl">About</h1>
      <p className="text-gray-600" id="about-me">
        {about}
      </p>
    </div>
  );
};
