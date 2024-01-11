import React, { useState } from "react";
import { SearchIcon } from "./IconImg";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "./IconImg";
import Herobuilding from "../assets/images/web.p/HBuildingImg.webp";

const Header = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }

  return (
    <>
      <div>
        <div id="Home" className="bg-white shadow ">
          <nav className=" flex justify-end items-center sm:pt-[43px] pt-[30px] sm:pb-[35px] pb-[30px] container xl:max-w-[1320px] mx-auto md:px-6 px-4">
            <ul
              className={`${
                show ? " left-[-100%]" : " left-0 z-10"
              } gap-[51px] flex transition-all duration-300 ease-linear md:bg-white bg-white max-md:w-full max-md:fixed z-40 mx-md:top-0 max-md:min-h-screen max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:z-40 bottom-0`}
            >
              <li onClick={() => setshow(!show)}>
                <a
                  className=" text-[#025066] uppercase hover:font-medium transition-all duration-500 ease-linear flex font-normal text-[16px]"
                  href="#Home"
                >
                  HOME
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" text-[#025066] uppercase  hover:font-medium transition-all duration-500 ease-linear font-normal text-[16px] flex"
                  href="#Portfolio"
                >
                  PORTFOLIO
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" text-[#025066] uppercase  hover:font-medium transition-all duration-500 ease-linear font-normal text-[16px]"
                  href="#Blog"
                >
                  BLOG
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" text-[#025066] uppercase  hover:font-medium transition-all duration-500 ease-linear font-normal text-[16px]"
                  href="#Contact"
                >
                  CONTACT
                </a>
              </li>
              <li onClick={() => setshow(!show)}>
                <a
                  className=" text-[#025066] uppercase  hover:font-medium transition-all duration-500 ease-linear font-normal text-[16px]"
                  href="#Shop"
                >
                  SHOP
                </a>
              </li>
              <li className=" md:block hidden">
                <a href="https://www.google.co.in/" target="blank">
                  <SearchIcon />
                </a>
              </li>
            </ul>
            <div className=" md:hidden block me-5">
              <a href="https://www.google.co.in/" target="blank">
                <SearchIcon />
              </a>
            </div>
            <div
              onClick={() => setshow(!show)}
              className="w-[39px] h-[27px] relative z-50 flex flex-col justify-between md:hidden"
            >
              <span
                className={`${
                  show
                    ? " bg-black w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                    : "bg-black w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl rotate-[50deg] translate-y-[26px]"
                }`}
              ></span>
              <span
                className={`${
                  show
                    ? " bg-black w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                    : "opacity-0"
                }`}
              ></span>
              <span
                className={`${
                  show
                    ? " bg-black w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl"
                    : "bg-black w-full h-[4px] transition-all duration-300 ease-linear rounded-3xl rotate-[-50deg] translate-y-[50%]"
                }`}
              ></span>
            </div>
          </nav>
        </div>
      </div>
      <div className="bg-BgHeader bg-fixed max-lg:h-[1070px] max-md:h-[953px] max-sm:h-[810px] sm:bg-bgsize bg-cover bg-no-repeat bg-center relative overflow-x-hidden">
        <div className=" container xl:max-w-[1320px] mx-auto md:px-6 px-4">
          <div className="lg:pt-[155px] sm:pt-[90px] pt-[70px] pb-6 flex flex-row flex-wrap">
            <div className=" lg:w-5/12">
              <h1
                className=" text-white xl:text-[72px] lg:text-[57px] md:text-[46px] text-[36px] font-bold leading-[124.687%] sm:pb-[42px] pb-[28px]"
                data-aos="zoom-in-right"
              >
                Morbi facilisis nulla purus, ac{" "}
              </h1>
              <p
                className=" text-lg !leading-[139.687%] font-normal text-white pb-[61px]"
                data-aos="zoom-in-right"
              >
                Mauris viverra justo et dictum mattis. Donec massa felis, tempus
                nec erat id, fermentum rhoncus justo. Donec viverra quam nulla,
                id faucibus metus ullamcorp
              </p>
              <div data-aos="zoom-in-right">
                <a
                  className="hover:shadow-[0_3px_20px_rgba(225,_225,_225,_1)] transition-all duration-500 ease-linear uppercase text-[#025066] text-[20px] font-medium py-[18px] px-[33px] bg-white rounded-[10px] "
                  href=""
                >
                  CONTACT NOW
                </a>
              </div>
              <div
                className="flex gap-[14px] lg:pt-[175px] md:pt-[100px] pt-[70px]"
                data-aos="zoom-in-right"
              >
                <div className="transition-all ease-linear duration-300 hover:scale-110">
                  <FacebookIcon />
                </div>
                <div className="transition-all ease-linear duration-300 hover:scale-110">
                  <TwitterIcon />
                </div>
                <div className="transition-all ease-linear duration-300 hover:scale-110">
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className="lg:w-7/12 pt-8 lg:pt-0">
              <img
                src={Herobuilding}
                alt="Herobuilding"
                className=" w-full lg:max-w-[941px] max-w-[700px] !max-h-[511px] absolute right-[-10px] max-3xl:pl-40 max-2xl:pl-60 max-xl:ps-96 max-lg:ps-0"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
