import React from "react";

const OurWorks = () => {
  return (
    <>
      <div className=" container xl:max-w-[1320px] mx-auto lg:pt-[124px] md:pt-[100px] pt-[70px] pb-[70px] lg:pb-0 md:px-6 px-4">
        <div className=" justify-between items-end flex-col-reverse flex lg:flex-row flex-wrap">
          <div
            className="border border-solid border-[#025066] lg:pl-[45px] pl-[27px] lg:pr-[35px] pr-[27px] flex-row lg:flex-col items-center lg:max-w-[141px] w-full lg:pt-[27px] pt-[18px] pb-[18px] sm:pb-0 flex justify-between lg:justify-center"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <p className="sm:pb-[10px] text_decoration text-base whitespace-nowrap font-bold text-[#025066]">
              OUR WORKS
            </p>
            <div className=" lg:w-[1px] w-full max-w-[168px] lg:max-w-[unset] lg:h-[168px] h-[1px] bg-[#025066]"></div>
            <p className=" md:text-[52px] text-[35px] font-medium text-[#025066] sm:pt-2">
              02
            </p>
          </div>
          <div className=" mb-4 lg:mb-0">
            <h2
              className=" leading-[120%] sm:pb-[51px] pb-[24px] sm:text-[48px] text-[35px] ml-auto font-bold lg:text-right lg:max-w-[482px] text-[#025066]"
              data-aos="zoom-in-left"
            >
              Mauris viverra justo et dictum mattis.{" "}
            </h2>
            <p
              className=" pb-[28px] text-[16px] font-normal leading-[139.687%] lg:max-w-[656px] lg:text-right text-[#025066]"
              data-aos="zoom-in-left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
              convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
              Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna.
              Etiam mattis, felis eu interdum posuere, justo neque{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
