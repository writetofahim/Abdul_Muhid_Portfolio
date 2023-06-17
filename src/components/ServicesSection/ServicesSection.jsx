import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import bookkeeping from "../../assets/image/bookkeeping.png";
import businessTax from "../../assets/image/business_tax.png";
import payroll from "../../assets/image/payroll.png";
import startBusiness from "../../assets/image/start_business.png";

const ServicesSection = () => {
  return (
    <div className="container mx-auto flex md:flex-nowrap flex-wrap items-center gap-5 md:py-24 py-10 px-5">
      <div className="md:w-1/2 w-full">
        <button
          type="button"
          className="text-ascent-500 hover:text-white bg-primary-500 hover:bg-ascent-500 font-medium  text-lg px-4 py-1 text-center mr-3 md:mr-0 duration-300 my-3 shadow"
        >
          Services{" "}
        </button>
        <h3 className="md:text-6xl text-3xl flex flex-wrap max-w-[350px] w-full font-title">
          <span className="text-ascent-400"> Our specialty </span>
          <span className="text-ascent-400"> Accounting </span>
          <span className="text-ascent-400"> Tax & CFO </span>
          <span> Services.</span>
        </h3>
        <p className="mt-5 text-gray-600 max-w-[450px] w-full ">
          Accounting, Tax & CFO Services. Expertise in financial management, tax
          compliance, and strategic guidance for business success.
        </p>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 gap-5">
        {[
          {
            title: "Business Tax",
            icon: businessTax,
          },
          {
            title: "Payroll",
            icon: payroll,
          },

          {
            title: "Start a Business",
            icon: startBusiness,
          },
          {
            title: "Bookkeeping",
            icon: bookkeeping,
          },
        ].map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const { title, icon } = service;
  return (
    <div className="flex items-center justify-center p-10 border border-gray-300 gap-5 relative hover:bg-ascent-200/50 duration-300  border-ascent-200/50 hover:border-ascent-400">
      <div className="flex flex-col items-center gap-3">
        <img className="w-20" src={icon} alt="" />
        <h4 className="text-sm md:text-base w-max">{title}</h4>
        <div className="absolute top-0 right-0 p-3 bg-ascent-400 hover:bg-black duration-300 text-white">
          <BsArrowUpRight />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
