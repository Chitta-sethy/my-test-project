import React from "react";
const ServicedetailsSection = ({ children }) => {
  return (
    <section className="flex flex-col p-4 md:mx-auto md:mt-20 md:w-10/12 md:p-0 lg:w-11/12">
      {children}
    </section>
  );
};

export default ServicedetailsSection;
