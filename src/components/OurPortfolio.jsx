import React from "react";

const OurPortfolio = () => {
  return (
    <>
      <div
        id="Portfolio"
        className=" container xl:max-w-[1320px] mx-auto pb-[17px] md:px-6 px-4"
      >
        <div className=" justify-between items-end flex-col-reverse flex lg:flex-row flex-wrap">
          <div
            className="border border-solid border-[#025066] lg:pl-[37px] pl-[27px] lg:pr-[38px] pr-[27px] flex-row lg:flex-col items-center lg:max-w-[136px] w-full lg:pt-[40px] pt-[18px] pb-[18px] sm:pb-0 flex sm:gap-[38px] gap-5 lg:gap-0 justify-center"
            data-aos="zoom-out-up"
          >
            <p className="sm:pb-[6px] text-[16px] text_decoration text-base whitespace-nowrap font-bold text-[#025066]">
              GALLERY WORKS
            </p>
            <div className=" lg:w-[1px] w-full lg:max-w-[unset] lg:h-[151px] h-[1px] bg-[#025066]"></div>
            <p className=" md:text-[52px] text-[35px] font-medium text-[#025066] lg:pt-[27px]">
              03
            </p>
          </div>
          <div className=" mb-4 lg:mb-0">
            <h2
              className=" leading-[120%] sm:pb-[51px] pb-[24px] sm:text-[48px] text-[32px] ml-auto font-bold lg:text-right lg:max-w-[482px] text-[#025066]"
              data-aos="zoom-in-right"
            >
              Our Portfolio Gallery
            </h2>
            <p
              className=" pb-[32px] text-[16px] font-normal leading-[139.687%] lg:max-w-[656px] lg:text-right text-[#025066]"
              data-aos="zoom-in-right"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
              convallis lobortis. Proin ullamcorper eros ac ultrices imperdiet.
              Vivamus eros nibh, dictum sed venenatis vitae, ornare eget magna.
              Etiam mattis, felis eu interdum posuere, justo neque
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPortfolio;
