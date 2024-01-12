import React from "react";
import ProjectImg1 from "../assets/images/web.p/ProjectImg1.webp";
import ProjectImg2 from "../assets/images/web.p/ProjectImg2.webp";
import ProjectImg3 from "../assets/images/web.p/ProjectImg3.webp";
import { ArrowSvg } from "./IconImg";

const OurProject = () => {
  const carddata = [
    {
      image: ProjectImg1,
      heading: "Lorem ipsum dolo",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper",
      Content: "VIEW PROJECTS",
    },
    {
      image: ProjectImg2,
      heading: "Lorem ipsum dolo",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper",
      Content: "VIEW PROJECTS",
    },
    {
      image: ProjectImg3,
      heading: "Lorem ipsum dolo",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat molestie ex quis finibus. Quisque tincidunt dolor ut convallis lobortis. Proin ullamcorper",
      Content: "VIEW PROJECTS",
    },
  ];
  return (
    <>
      <div
        id="Blog"
        className=" bg-[#025066] sm:pt-[77px] sm:pb-[85px] py-[65px] "
      >
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4">
          <div className="lg:gap-0 md:gap-7 sm:gap-8 gap-3 flex flex-row lg:justify-between justify-center flex-wrap">
            {carddata.map((a, index) => (
              <div
                className=" lg:w-[31.65%] md:w-[48%]"
                key={index}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="cursor-pointer hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear  group rounded-[5px] bg-white pr-[14px] pt-[15px] pb-[26px] pl-[15px]">
                  <img
                    src={a.image}
                    alt="ProjectImg"
                    className="pb-[20px] group-hover:scale-[1.01] transition-all ease-linear duration-500 !rounded-[5px] w-full"
                  />
                  <p className=" text-[#025066] text-[25px] font-bold leading-[139.687%] pb-[11px]">
                    {a.heading}
                  </p>
                  <p className=" pb-[24px] text-[#025066] opacity-70 text-base font-normal !leading-[139.687%] ">
                    {a.paragraph}
                  </p>
                  <div className=" font-bold text-base !leading-[120%] flex items-center gap-2">
                    {" "}
                    <p className=" text-[#025066]">{a.Content}</p>
                    <ArrowSvg />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProject;
