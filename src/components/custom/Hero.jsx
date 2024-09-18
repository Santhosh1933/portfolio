import profile from "@/assets/profile.png";
import { cvLink, description, name } from "@/constant";
import React from "react";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-wrap sm:flex-nowrap gap-4">
        <div className="">
          <h1 className="text-4xl font-medium  md:text-5xl">
            Hi, I'm {name} 👋
          </h1>
          <p className="pt-2 sm:text-xl font-medium text-gray-700">
            {description}
          </p>
          <Button className="mt-4"><a href={cvLink} target="_blank">Download my CV</a></Button>
        </div>
        <img src={profile} alt="" className="sm:w-[150px] object-cover sm:h-[150px] sm:rounded-full aspect-video rounded-sm "/>
      </div>
    </div>
  );
};
