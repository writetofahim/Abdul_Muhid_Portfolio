import React from "react";
import Banner from "../../components/Banner/Banner";
import KeyStatistics from "../../components/KeyStatistics/KeyStatistics";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import WhoMe from "../../components/WhoMe/WhoMe";

const Home = () => {
  return (
    <div>
      <Banner />
      <ServicesSection />
      <WhoMe />
      <KeyStatistics />
      <Testimonial />
    </div>
  );
};

export default Home;
