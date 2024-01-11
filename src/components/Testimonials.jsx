import React from "react";
import Slider from "react-slick";
import Profileimg from "../assets/images/web.p/Tregsdkh.webp";
import { StarsSvg, SliderleftArrow, SliderRightArrow } from "./IconImg";
import ProfilePic from "../assets/images/web.p/ProfilePic.webp";

const Testimonials = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="lg:pt-[88px] py-[70px] lg:pb-[124px]"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="container mx-auto xl:max-w-[1320px] lg:px-4 px-6">
        <h3 className="text-[20px] font-medium text-black leading-[100%] text-center">
          TESTIMONIALS
        </h3>
        <h2 className="lg:text-[48px] text-[31px] font-bold text-[#025066] leading-[111%] text-center pt-[19px]">
          What Clients say about us
        </h2>
        <div className="mt-[45px] relative">
          <Slider ref={slider} {...settings} className="">
            <div>
              <div className="flex items-center justify-center flex-col">
                <img
                  src={Profileimg}
                  alt="Profileimg"
                  className="max-w-[126px] w-full"
                />
                <p className="text-[16px] font-bold mt-[19px] text-[#025066] mb-[30px]">
                  TREGSDKH
                </p>
                <StarsSvg />
                <p className="text-[16px] font-normal leading-[139.687%] text-[rgba(2,80,102,0.70)] w-[469px] text-center mt-[18.95px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
                  convallis lobortis. Proin ullamcorper eros ac ultrices
                  imperdiet. s
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center flex-col">
                <img
                  src={ProfilePic}
                  alt="ProfilePic"
                  className="max-w-[126px] w-full"
                />
                <p className="text-[16px] font-bold mt-[19px] text-[#025066] mb-[30px]">
                  Client
                </p>
                <StarsSvg />
                <p className="text-[16px] font-normal leading-[139.687%] text-[rgba(2,80,102,0.70)] w-[469px] text-center mt-[18.95px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
                  convallis lobortis. Proin ullamcorper eros ac ultrices
                  imperdiet. s
                </p>
              </div>
            </div>
          </Slider>
          <div
            onClick={() => slider?.current?.slickPrev()}
            className="absolute top-[17%] sm:left-[17%] left-[3%]"
          >
            <SliderleftArrow />
          </div>
          <div
            onClick={() => slider?.current?.slickNext()}
            className="absolute top-[17%] sm:right-[17%] right-[3%]"
          >
            <SliderRightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
