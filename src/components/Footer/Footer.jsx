import React from "react";
import { FaFacebookF, FaFax, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-secondary-500 text-ascent-500 py-10">
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
                  href="#"
                  className="bg-ascent-500 p-2 text-white hover:bg-white hover:text-ascent-500 duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
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
