import React, { useEffect, useRef, useState } from "react";

const KeyStatistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const statistics = [
    { value: "257+", label: "Accounting professionals on staff" },
    { value: "50%", label: "Savings on taxes when done with us" },
    { value: "12 Y+", label: "Years of experience on average" },
    { value: "54 K", label: "Businesses Served" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(componentRef.current);

    // Clean up the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className={`grid md:grid-cols-4 grid-cols-2 justify-center ${
        isVisible ? "animate-fadeIn" : ""
      } container mx-auto p-5`}
    >
      {statistics.map((statistic, index) => (
        <div
          key={index}
          className={`w-full p-4 ${
            index !== statistics.length - 1 ? "md:border-r" : ""
          }`}
        >
          <div className="text-center w-full">
            <span className="md:text-5xl text-3xl font-bold text-black-600 bg-primary-500 px-5 py-2 font-title">
              {statistic.value}
            </span>
            <p className="text-gray-600 mt-5">{statistic.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyStatistics;
