import React from "react";
import GatesConstruction from "../assets/images/web.p/GatesConstruction.webp";

const OtherServices = () => {
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto sm:py-[83px] py-[65px] md:px-6 px-4">
        <div className=" flex items-center flex-row flex-wrap">
          <div className=" lg:w-6/12">
            <p
              className=" text-black uppercase text-[20px] font-medium pb-6"
              data-aos="zoom-in-right"
            >
              OTHER SERVICES
            </p>
            <h2
              className=" text-[#025066] lg:max-w-[420px] leading-[120%] text-[35px] sm:text-[48px] font-bold pb-[30px] sm:pb-[44px]"
              data-aos="zoom-in-right"
            >
              Gates Construction Company
            </h2>
            <p
              className=" text-[#025066] text-[25px] font-normal leading-[139.687%] pb-[17px]"
              data-aos="zoom-in-right"
            >
              Best Builing Material
            </p>
            <p
              className=" text-[#025066] lg:max-w-[469px] pb-[33px] opacity-70 text-base font-normal !leading-[139.687%]"
              data-aos="zoom-in-right"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
              convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
              s
            </p>
            <p
              className=" text-[#025066] text-[25px] font-normal leading-[139.687%] pb-[17px]"
              data-aos="zoom-in-right"
            >
              Experience Workers
            </p>
            <p
              className=" text-[#025066] lg:max-w-[469px] pb-[33px] opacity-70 text-base font-normal !leading-[139.687%]"
              data-aos="zoom-in-right"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
              convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
              s
            </p>
            <p
              className=" text-[#025066] text-[25px] font-normal leading-[139.687%] pb-[17px]"
              data-aos="zoom-in-right"
            >
              Modern Technologies
            </p>
            <p
              className=" text-[#025066] lg:max-w-[469px] opacity-70 text-base font-normal !leading-[139.687%]"
              data-aos="zoom-in-right"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
              convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
              s
            </p>
          </div>
          <div className=" lg:w-6/12 pt-10 lg:pt-0">
            <img
              src={GatesConstruction}
              alt="GatesConstruction"
              className=" w-full"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherServices;
