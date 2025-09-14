import React from "react";
import Services from "@/components/Screen/Home/Services";
import Shipping from "@/components/Screen/Home/Shipping";
import Testimonials from "@/components/Screen/Home/Testimonials";
import BannerTwo from "@/components/Screen/Home/BannerTwo";
import About from "@/components/Screen/Home/About";
import Content from "@/components/Screen/Home/Content";
import Appointment from "@/components/Screen/Home/Appointment";

const HomePage = () => {
  return (
    <>
      <BannerTwo />

      <Services />

      <Content />

      <Testimonials />
    </>
  );
};

export default HomePage;
