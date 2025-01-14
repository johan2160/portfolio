import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "@remixicon/react";
import Python from "/assets/icons/python.svg";
import Django from "/assets/icons/django.svg";
import MySQL from "/assets/icons/mysql.svg";

const Skills = () => {
  const [iconSize, setIconSize] = useState(64);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIconSize(96);
      } else if (window.innerWidth >= 768) {
        setIconSize(84);
      } else {
        setIconSize(72);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full gap-8 px-4 text-content">
      <h2 className="mb-8 text-2xl text-center md:text-4xl">Tecnologías</h2>
      <Marquee
        pauseOnHover={true}
        gradient={true}
        gradientColor="text-black"
        gradientWidth={150}
        speed={90}
        className="rounded-md bg-background max-w-[1176px] md:w-11/12"
      >
        <div className="flex py-4">
          <img
            width={iconSize}
            src={Python}
            alt=""
            className="mx-6 transition-all md:mx-6 xl:mx-8 hover:scale-110"
          />
          <img
            width={iconSize}
            src={Django}
            alt=""
            className="mx-6 transition-all md:mx-6 xl:mx-8 hover:scale-110"
          />
          <RiHtml5Fill
            size={iconSize}
            className="mx-6 transition-all md:mx-6 xl:mx-8 text-htmlbg hover:scale-110"
          />
          <RiCss3Fill
            size={iconSize}
            className="mx-6 transition-all md:mx-6 xl:mx-8 text-cssbg hover:scale-110"
          />
          <RiJavascriptFill
            size={iconSize}
            className="mx-6 transition-all md:mx-6 xl:mx-8 text-jsbg hover:scale-110"
          />
          <RiReactjsFill
            size={iconSize}
            className="mx-6 transition-all md:mx-6 xl:mx-8 text-reactcolor hover:scale-110"
          />
          <img
            width={iconSize}
            src={MySQL}
            alt=""
            className="mx-6 transition-all md:mx-6 xl:mx-8 hover:scale-110"
          />
          <RiTailwindCssFill
            size={iconSize}
            className="mx-6 transition-all md:mx-6 xl:mx-8 text-tailwindcolor hover:scale-110"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
