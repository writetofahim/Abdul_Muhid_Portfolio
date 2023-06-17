import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import abdulMuhit2 from "../../assets/image/abdul_muhit_2.jpg";

const WhoMe = () => {
  return (
    <div className="container mx-auto flex md:flex-nowrap flex-wrap items-center gap-5 md:py-24 py-10 px-5">
      <div className="md:w-1/2 gap-5">
        <img className="lg:w-4/5 w-full " src={abdulMuhit2} alt="" />
      </div>
      <div className="md:w-1/2 w-full">
        <div className="text-ascent-500 bg-primary-500 font-medium text-lg px-4 py-1 text-center mr-3 md:mr-0 duration-300 my-3 shadow w-max">
          Who Me
        </div>
        <h3 className="md:text-6xl text-3xl flex flex-wrap w-full font-title">
          <span className="text-ascent-400"> Experienced Accountant, </span>
          <span className="text-ascent-400"> Account Reconciliation, </span>
          <span className=""> Financial Reporting </span>
        </h3>
        <p className="mt-5 text-gray-600 w-full ">
          Experienced Accountant specialized in Account Reconciliation and
          Financial Reporting. Detail-oriented professional delivering accurate
          financial insights for organizational success.
        </p>
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

export default WhoMe;
