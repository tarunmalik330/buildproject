import React from "react";
import { ArrowSvg } from "./IconImg";
import ConstructionBuilding from "../assets/images/web.p/ConstructionBuilding.webp";

const OurServices = () => {
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 sm:pt-[100px] pt-[70px]">
        <div className=" flex flex-row flex-wrap justify-between">
          <div className=" lg:w-[55%]">
            <div className=" flex flex-col-reverse sm:flex-row justify-between lg:gap-0 sm:gap-[50px] gap-[30px]">
              <div
                className=" border border-solid border-[#025066] sm:pl-[42px] pl-[27px] sm:pr-[38px] pr-[27px] flex-row sm:flex-col items-center sm:max-w-[141px] sm:pt-[27px] pt-[18px] pb-[18px] sm:pb-0 sm:gap-0 gap-9 flex justify-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <p className="sm:pb-6 text_vertical text-base whitespace-nowrap font-bold text-[#025066]">
                  HERE WE DO
                </p>
                <div className=" sm:w-[1px] w-full max-w-[168px] sm:max-w-[unset] sm:h-[168px] h-[1px] bg-[#025066]"></div>
                <p className=" md:text-[52px] text-[35px] font-medium text-[#025066] sm:pt-[27px]">
                  01
                </p>
              </div>
              <div className="">
                <p
                  className=" uppercase text-black fs-[20px] font-medium pb-4"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  OUR SERVICES
                </p>
                <h2
                  className=" text-[#025066] md:text-[48px] sm:text-[41px] text-[34px] font-bold sm:pb-[38px] pb-[16px] lg:max-w-[280px]"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Construction building.
                </h2>
                <p
                  className=" text-[16px] font-normal leading-[139.687%] text-[#025066] md:max-w-[368px] opacity-70 pb-[29px]"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
                  convallis lobortis. Proin ullamcorper eros ac ultrices
                  imperdiet. Vivamus eros nibh, dictum sed venenatis vitae,
                  ornare eget magna. Etiam mattis, felis eu interdum posuere,
                  justo neque dictum sapien, eu luctus neque nulla non ante.
                  Quisque pharetra facilisis mauris a hendrerit. Donec rutrum
                  maximus turpis id luctus. In gravida pulvinar elit, a auctor
                  mauris scele risque ac. Aliquam facilisis tortor elit, auctor
                  semper est ve stibulum ut. Nam sit amet libero vulputate,
                  faucibus purus et, vestibulum sem. Nunc ac nulla erat. Nulla
                  facilis
                </p>
                <div
                  className="flex gap-2 items-center"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h4 className=" cursor-pointer uppercase text-[#025066] text-[16px] font-bold leading-[120.187%] ">
                    VIEW PROJECTS
                  </h4>
                  <ArrowSvg />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] flex justify-end pt-10 lg:pt-0">
            <img
              src={ConstructionBuilding}
              alt="ConstructionBuilding"
              className=" w-full lg:max-w-[503px] h-full"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
