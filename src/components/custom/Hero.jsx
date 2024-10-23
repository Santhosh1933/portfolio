import profile from "@/assets/profile.png";
import { cvLink, description, name } from "@/constant";
import React from "react";
import { Button } from "../ui/button";
import { Helmet } from "react-helmet-async";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
export const Hero = () => {
  return (
    <div className="">
      <Helmet>
        <title>{name} CSE | Portfolio</title>
        <meta
          name="description"
          content={`Portfolio of ${name}, BE in Computer Science and Engineering`}
        />
        <meta
          name="keywords"
          content={`${name}, Portfolio, Computer Science, Web Developer, React`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Santhosh CSE | Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Santhosh, a skilled MERN Stack Developer with a passion for creating responsive web applications."
        />
        <meta property="og:image" content={profile} />
        <meta property="og:url" content="https://santhoshcse.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Santhosh CSE | Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Santhosh, a skilled MERN Stack Developer with a passion for creating responsive web applications."
        />
        <meta name="twitter:image" content={profile} />
        <link rel="canonical" href="https://santhoshcse.vercel.app" />
      </Helmet>
      <div className="flex flex-wrap sm:flex-nowrap gap-4">
        <div className="">
          <h1 className="text-4xl font-medium  md:text-5xl">
            Hi, I'm{" "}
            <span>
              <RoughNotation type="highlight" color="yellow"  show={true}>
                {name}
              </RoughNotation>
            </span>
            👋
          </h1>
          <p className="pt-2 sm:text-xl font-medium text-gray-700">
            {description}
          </p>
          <Button className="mt-4">
            <a href={cvLink} target="_blank">
              Download my CV
            </a>
          </Button>
        </div>
        <img
          loading="lazy"
          src={profile}
          alt=""
          className="sm:w-[150px] object-cover sm:h-[150px] sm:rounded-full aspect-video rounded-sm "
        />
      </div>
    </div>
  );
};
