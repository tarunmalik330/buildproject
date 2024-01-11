import React from "react";
import GalleryImg1 from "../assets/images/web.p/GalleryImg1.webp";
import GalleryImg2 from "../assets/images/web.p/GalleryImg2.webp";
import GalleryImg3 from "../assets/images/web.p/GalleryImg3.webp";
import GalleryImg4 from "../assets/images/web.p/GalleryImg4.webp";
import GalleryImg5 from "../assets/images/web.p/GalleryImg5.webp";
import GalleryImg6 from "../assets/images/web.p/GalleryImg6.webp";

const GalleryImg = () => {
  return (
    <>
      <div id="Shop" className=" bg-[#025066] py-[70px] sm:py-[91px]">
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4">
          <div className=" flex justify-between flex-row flex-wrap">
            <div
              className=" overflow-hidden group lg:w-[32.55%] sm:w-[49%] mb-3"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={GalleryImg1}
                alt="GalleryImg1"
                className=" group-hover:scale-[1.01] transition-all duration-500 ease-linear w-full"
              />
            </div>
            <div
              className=" overflow-hidden group lg:w-[32.55%] sm:w-[49%] mb-3"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={GalleryImg2}
                alt="GalleryImg2"
                className="group-hover:scale-[1.01] transition-all duration-500 ease-linear w-full"
              />
            </div>
            <div
              className=" overflow-hidden group lg:w-[32.55%] sm:w-[49%] mb-3"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={GalleryImg3}
                alt="GalleryImg3"
                className="group-hover:scale-[1.01] transition-all duration-500 ease-linear w-full"
              />
            </div>
            <div
              className=" overflow-hidden group lg:w-[32.55%] sm:w-[49%] mb-3 sm:mb-0"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={GalleryImg4}
                alt="GalleryImg4"
                className="group-hover:scale-[1.01] transition-all duration-500 ease-linear w-full"
              />
            </div>
            <div
              className=" overflow-hidden group lg:w-[32.55%] sm:w-[49%] mb-3 sm:mb-0"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={GalleryImg5}
                alt="GalleryImg5"
                className="group-hover:scale-[1.01] transition-all duration-500 ease-linear w-full"
              />
            </div>
            <div
              className=" overflow-hidden group lg:w-[32.55%] sm:w-[49%] mb-3 sm:mb-0"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={GalleryImg6}
                alt="GalleryImg6"
                className="group-hover:scale-[1.01] transition-all duration-500 ease-linear w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryImg;
