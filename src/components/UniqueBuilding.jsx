import React from "react";
import { ArrowSvg } from "./IconImg";
import UniqueDesign from "../assets/images/web.p/UniqueBuilding.webp";

const UniqueBuilding = () => {
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto sm:pt-[105px] pt-[70px] md:px-6 px-4">
        <div className=" flex flex-row items-end flex-wrap">
          <div className=" lg:w-5/12">
            <div className=" xl:pr-0 lg:pr-5 ">
              <p
                className=" text-black text-[20px] font-medium pb-4"
                data-aos="zoom-in-right"
              >
                MAKE UNIQUE
              </p>
              <h2
                className=" text-[48px] text-[#025066] font-bold lg:max-w-[280px] leading-[120%]"
                data-aos="zoom-in-right"
              >
                Construction building.
              </h2>
              <p
                className=" text-[#025066] opacity-70 text-[16px] leading-[139.687%] font-normal lg:max-w-[446px] pt-[33px] pb-[40px]"
                data-aos="zoom-in-right"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
                convallis lobortis. Proin ullamcorper eros ac ultrices
                imperdiet. Vivamus eros nibh, dictum sed venenatis vitae, ornare
                eget magna. Etiam mattis, felis eu interdum posuere, justo neque
                dictum sapien, eu luctus neque nulla non ante. Quisque pharetra
                facilisis mauris a hendrerit. Donec rutrum maximus turpis id
                luctus. In gravida pulvinar elit, a auctor mauris scele risque
                ac. Aliquam facilisis tortor elit, auctor semper est ve stibulum
                ut. Nam sit amet libero vulputate, faucibus purus et, vestibulum
                sem. Nunc ac nulla erat. Nulla facilis
              </p>
              <div
                className=" flex gap-2 items-center"
                data-aos="zoom-in-right"
              >
                <h4 className=" cursor-pointer uppercase text-[#025066] text-[16px] font-bold leading-[120.187%] ">
                  VIEW PROJECTS
                </h4>
                <ArrowSvg />
              </div>
            </div>
          </div>
          <div className=" pt-9 lg:pt-0 lg:w-7/12 flex justify-end">
            <img
              src={UniqueDesign}
              alt="UniqueDesign"
              className="w-full lg:max-w-[689px]"
              data-aos="zoom-in-left"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UniqueBuilding;
