import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nlvjld9",
        "template_zdsuxvw",
        form.current,
        "qxtBsAqACVCOH2sxs"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="Contact"
      className="bg-BgContact bg-cover bg-center bg-no-repeat pb-10 pt-[60px]"
    >
      <div className="container xl:max-w-[1320px] mx-auto md:px-6 px-4">
        <div className=" flex justify-between flex-col-reverse lg:flex-row flex-wrap">
          <div className=" lg:w-6/12" data-aos="fade-right">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                required
                name="user_name"
                placeholder="Your Name"
                className=" py-[14px] px-4 bg-white text-[#A7A7A7] text-[14px] font-medium leading-[142.857%]  border border-solid border-[#025066] rounded-[6px] w-full outline-none max-w-[594px] mb-[14px] "
              />
              <input
                type="text"
                required
                max="10"
                name="user_mobile"
                placeholder="Phone Number"
                className=" py-[14px] px-4 bg-white text-[#A7A7A7] text-[14px] font-medium leading-[142.857%]  border border-solid border-[#025066] rounded-[6px] w-full outline-none max-w-[594px] mb-[14px] "
              />
              <input
                required
                name="user_email"
                type="text"
                placeholder="E-Mail"
                className=" py-[14px] px-4 text-[#A7A7A7] text-[14px] font-medium leading-[142.857%] bg-white border border-solid border-[#025066] rounded-[6px] w-full outline-none max-w-[594px] mb-[14px] "
              />
              <textarea
                required
                className=" py-[14px] px-4 rounded-[6px] border border-solid border-[#025066] text-[#A7A7A7] text-[14px] font-medium leading-[142.857%] bg-white outline-none resize-none w-full max-w-[594px] mb-[27px]"
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
              <button
                className="py-[18px] px-[33px] hover:shadow-[0_3px_18px_rgba(2,_80,_102,_1)] transition-all duration-500 ease-linear bg-[#025066] rounded-[10px] font-medium text-white uppercase text-[20px]"
                type="submit"
              >
                CONTACT NOW
              </button>
            </form>
          </div>
          <div className=" lg:w-4/12 pb-6 lg:pb-0">
            <h2
              className=" lg:text-white text-[#025066] text-[38px] lg:text-[61px] font-normal leading-[106%] lg:text-right lg:pb-[32px] pb-6"
              data-aos="fade-left"
            >
              How we can help you?
            </h2>
            <p
              className=" lg:text-white text-[#025066] text-[16px] font-normal lg:text-right pb-[15px] lg:pb-[35px]"
              data-aos="fade-left"
            >
              Quisque vel nisl blandit sem tempor dignissim. Sed maximus
              efficitur neque
            </p>
            <div
              className=" flex gap-[14px] lg:justify-end pb-[9px]"
              data-aos="fade-left"
            >
              <p className=" lg:text-white text-[#025066] lg:text-right text-base !leading-[139.687%] font-normal">
                Phone Number:
              </p>
              <p className=" text-base lg:text-right font-normal lg:text-white text-[#025066] !leading-[139.687%]">
                +1235265652
              </p>
            </div>
            <div
              className=" flex gap-[14px] lg:justify-end"
              data-aos="fade-left"
            >
              <p className=" lg:text-white text-[#025066] lg:text-right text-base !leading-[139.687%] font-normal">
                Address:
              </p>
              <p className=" text-base lg:text-right font-normal lg:text-white text-[#025066] !leading-[139.687%]">
                Nam convallis feugiat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
