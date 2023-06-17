import React from "react";
import { FaFacebookF, FaFax, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import footerBg from "../../assets/image/footer_bg.png";

const Footer = () => {
  return (
    <footer
      className="bg-secondary-500 bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="text-white">
        <WaveSvg />
      </div>
      <div className="container mx-auto flex justify-center items-center py-10">
        <div>
          <p className="font-title font-bold text-5xl text-ascent-600">
            Let our team of experts
          </p>
          <p className="font-title font-bold text-5xl text-ascent-600">
            handle the accounting
          </p>
          <form className="bg-ascent-300 p-2 flex mt-5" action="">
            <input
              className="px-3 py-3 focus:border-none border-none outline-none w-full"
              type="email"
              name=""
              id=""
            />
            <button
              type="button"
              className="px-7 py-3 bg-ascent-500 hover:bg-ascent-400 hover:text-ascent-800 text-white font-bold duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <div className="bg-ascent-300/50 text-ascent-500 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
            <div className="flex flex-col ">
              <h2 className="text-4xl font-bold mb-3 font-title">
                Abdul Muhit
              </h2>
              <p className="">
                Accountant at Gilligan & Co. Chartered Accountants & Registered
                Auditors – Clonmel, Carrick-on-Suir & Kilkenny
              </p>
              <div className="flex mt-5">
                <a
                  href="https://www.facebook.com/abdul.muhit.92"
                  target="_blank"
                  className="bg-ascent-500 p-2 text-white hover:bg-white hover:text-ascent-500 duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/md-abdul-muhit-afa-aaia-mipa-aiti-maat-macc-bbs-hons-83a5914a/"
                  className="bg-ascent-500 p-2 text-white ml-2 hover:bg-white hover:text-ascent-500 duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            <div className="md:ml-5 ml-0">
              <h3 className="font-bold text-2xl">Company</h3>
              <ul className="flex flex-col gap-3 mt-3">
                <li>About Me</li>
                <li>Partnership</li>
                <li>Career</li>
                <li>Client Spotlight</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl">Services</h3>
              <ul className="flex flex-col gap-3 mt-3">
                <li>Accounting Services</li>
                <li>Tax Services</li>
                <li>CFO Services</li>
                <li>Bookkeeping Services</li>
                <li>Payroll Setup</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-2xl">Contact</h3>
              <p className="flex gap-2 items-center">
                <FaPhoneAlt /> +1 123 456 7890
              </p>
              <p className="flex gap-2 items-center">
                <FaFax /> +1 123 456 7891
              </p>
              <p className="flex gap-2 items-center">
                <MdLocationOn className="text-xl" /> 123 ABC Street, City,
                Country
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-5 bg-ascent-500 text-white">
        Copyright © 2023 Abdul Muhit
      </p>
    </footer>
  );
};

export default Footer;

export const WaveSvg = () => {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1800 5.8"
      preserveAspectRatio="none"
    >
      <path d="M5.4.4l5.4 5.3L16.5.4l5.4 5.3L27.5.4 33 5.7 38.6.4l5.5 5.4h.1L49.9.4l5.4 5.3L60.9.4l5.5 5.3L72 .4l5.5 5.3L83.1.4l5.4 5.3L94.1.4l5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3L161 .4l5.4 5.3L172 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3L261 .4l5.4 5.3L272 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3L361 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3L461 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1L550 .4l5.4 5.3L561 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2L650 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2L750 .4l5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2L850 .4l5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.4h.2l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.7-5.4 5.4 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.5 5.4h.1l5.6-5.4 5.5 5.3 5.6-5.3 5.5 5.3 5.6-5.3 5.4 5.3 5.7-5.3 5.4 5.3 5.6-5.3 5.5 5.4V0H-.2v5.8z"></path>
    </svg>
  );
};
