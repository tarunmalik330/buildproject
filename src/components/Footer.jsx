import React from "react";
import Logo from "../assets/images/web.p/LogoImg.webp";
import { FacebookIcon, InstagramIcon } from "./IconImg";

const Footer = () => {
  return (
    <>
      <div className=" pt-[72px] pb-[68px] bg-[#025066]">
        <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4">
          <div className=" flex justify-between items-end flex-row flex-wrap">
            <div className=" lg:w-4/12 ">
              <a href="#Home">
                <img src={Logo} alt="Logo" className=" w-full max-w-[87px]" />
              </a>
              <p className=" text-white lg:max-w-[433px] text-base font-normal leading-[139.687%] py-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                feugiat molestie ex quis finibus. Quisque tincidunt dolor ut
                convallis lobortis. Proin ullamcorper eros ac ultrices
                imperdiet. s
              </p>
              <div className=" flex gap-[15px]">
                <div className="transition-all ease-linear duration-300 hover:scale-110">
                  <FacebookIcon />
                </div>
                <div className="transition-all ease-linear duration-300 hover:scale-110">
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className=" pt-8 lg:pt-0 lg:w-[32%] sm:w-8/12 w-full ">
              <div className=" lg:pb-[26px] pb-0 flex justify-between  ">
                <ul>
                  <li className="pb-[17px] group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Renovation
                    </a>
                  </li>
                  <li className="pb-[17px] group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Carpentry
                    </a>
                  </li>
                  <li className="pb-[17px] group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Tiling
                    </a>
                  </li>
                  <li className="group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Ceiling
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="pb-[17px] group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Renovation
                    </a>
                  </li>
                  <li className="pb-[17px] group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Carpentry
                    </a>
                  </li>
                  <li className="pb-[17px] group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Tiling
                    </a>
                  </li>
                  <li className="group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Ceiling
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="pb-[17px] group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Renovation
                    </a>
                  </li>
                  <li className="pb-[17px] group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Carpentry
                    </a>
                  </li>
                  <li className="pb-[17px] group">
                    <a
                      className="after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out inline-block font-normal text-base !leading-[139.687%] text-white"
                      href=""
                    >
                      Tiling
                    </a>
                  </li>
                  <li className="group">
                    <a
                      className="font-normal text-base !leading-[139.687%] text-white after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] group-hover:after:w-full after:duration-500 after:ease-in-out"
                      href=""
                    >
                      Ceiling
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#033A49]">
        <p className=" text-center text-white text-base !leading-[139.687%] font-normal py-[21px]">
          Copyright@IS Company2021{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
