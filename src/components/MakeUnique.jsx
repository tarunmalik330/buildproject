import React from "react";
import InteriorDesign from "../assets/images/web.p/UniqueDesign.webp";
import { ArrowSvg } from "./IconImg";
import { PlaySvg } from "./IconImg";
import CloseButton from "../assets/images/web.p/closebutton.webp";

const MakeUnique = () => {
  const [showmodal, setshowmodal] = React.useState(false);
  if (showmodal === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4 lg:pt-[151px] md:pt-[100px] pt-[75px]">
        <div className=" flex flex-wrap items-end lg:flex-row flex-col-reverse">
          <div className=" lg:w-7/12 pt-10 lg:pt-0">
            <div className=" relative">
              <img
                src={InteriorDesign}
                alt="InteriorDesign"
                className=" w-full !max-w-[791px] lg:h-[479px]"
              />
              <div
                onClick={() => setshowmodal(true)}
                className=" flex justify-center cursor-pointer items-center absolute top-0 bottom-0 left-0 right-0"
              >
                <PlaySvg />
              </div>
              {showmodal ? (
                <>
                  <div className="fixed bg-[#ffffffd9] backdrop-blur-sm top-0 left-0 h-full w-full overflow-hidden flex items-center justify-center z-20">
                    <div className=" bg-[#033A49] rounded-[10px] relative p-2">
                      <div
                        onClick={() => setshowmodal(false)}
                        className=" max-w-[40px] absolute top-0 right-0 bg-[#033A49] rounded-[50px] p-2"
                      >
                        <img
                          src={CloseButton}
                          alt="CloseButton"
                          className=" w-full"
                        />
                      </div>
                      <iframe
                        className=" rounded-lg sm:w-[550px] lg:w-[970px] transition-all duration-300 ease-linear w-[350px] sm:h-[380px] lg:h-[580px] h-[330px]"
                        src="https://www.youtube.com/embed/x43KabUBfvA?si=CJq4PVfJ5KuZ350K"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className=" lg:w-5/12 flex justify-end">
            <div className="lg:max-w-[374px]">
              <p
                className=" uppercase text-black text-[20px] font-medium lg:text-end pb-[16px]"
                data-aos="zoom-in-left"
              >
                MAKE UNIQUE
              </p>
              <h2
                className=" text-[#025066] text-[48px] font-bold leading-[120%] lg:text-end pb-6"
                data-aos="zoom-in-left"
              >
                Solutions interior design
              </h2>
              <p
                className=" lg:text-end text-[#025066] opacity-70 text-[16px] pb-[29px] font-normal leading-[139.687%;]"
                data-aos="zoom-in-left"
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
                className=" flex gap-2 items-center lg:justify-end"
                data-aos="zoom-in-left"
              >
                <h4 className="cursor-pointer uppercase text-[#025066] text-[16px] font-bold leading-[120.187%] ">
                  VIEW PROJECTS
                </h4>
                <ArrowSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeUnique;
