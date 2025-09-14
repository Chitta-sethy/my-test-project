import AboutDetails from "@/components/AboutUs/AboutDetails";
import About from "@/components/Screen/Home/About";
import Appointment from "@/components/Screen/Home/Appointment";
import Content from "@/components/Screen/Home/Content";
import Testimonials from "@/components/Screen/Home/Testimonials";
import Breadcrumbdetails from "@/components/Breadcrumb/Breadcrumbdetails";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Breadcrumbdetails />
      <AboutDetails />
      <About />
      <Content />
      <Testimonials />
    </>
  );
};

export default AboutPage;
