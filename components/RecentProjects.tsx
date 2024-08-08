/* eslint-disable @next/next/no-img-element */
"use client";
import { BsCalendarDateFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { projects } from "@/data";

import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";
import { AnimatedTooltipPreview } from "./AnimatedTooltip";

const RecentProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of our{" "}
        <span className="text-green">recent projects</span>
      </h1>
      <div
        className="mt-20
        grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 
        justify-center w-full 
      "
      >
        {projects.slice(0, visibleProjects).map((item, i) => (
          <Tilt
            options={{
              max: 15,
              scale: 1,
              speed: 40,
            }}
            className="bg-tertiary p-5 rounded-2xl w-full bg-white/10 "
            key={i}
          >
            <motion.div className="rounded-lg ">
              <div className="relative h-52 w-full">
                <Image
                  src={"/project/project.jpg"}
                  alt="project"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-400 mt-2 line-clamp-4">
                {item.description}
              </p>

              <div className="flex items-center mt-4">
                <IoSchoolSharp className="text-green" />
                <p className="text-gray-400 ml-2">{item.context}</p>
              </div>

              <div className="flex items-center mt-4">
                <BsCalendarDateFill className="text-green" />
                <p className="text-gray-400 ml-2">{item.date}</p>
              </div>

              <div className="flex items-center mt-4">
                <FaLocationArrow className="text-green" />
                <p className="text-gray-400 ml-2">{item.role}</p>
              </div>

              <div className="flex items-center mt-4">
                <RiTeamFill className="text-green" />
                {item.contributors.length > 0 ? (
                  <p className="text-gray-400 ml-2">
                    {item.contributors.join(", ")}
                    <span>, Yograj</span>
                  </p>
                ) : (
                  <p className="text-gray-400 ml-2">Yograj</p>
                )}
                {/* <AnimatedTooltipPreview contributors={item.contributors} /> */}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-10 p-1">
          <button
            className="relative inline-flex overflow-hidden rounded-full p-[1px] "
            onClick={loadMoreProjects}
          >
            <span
              className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            />
            <span
              className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-xl"
            >
              Load More Projects
              <svg
                className="ml-2 h-5 w-5 animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 16l-6-6h12z" />
              </svg>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
