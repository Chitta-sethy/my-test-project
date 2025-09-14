import React from "react";
const ServiceSectionHeading = ({ heading, leadingText }) => {
  return (
    <>
      <section className="flex w-full flex-col p-4">
        <div className="w-full">
          <h1 className="text-2xl font-semibold leading-snug text-green-500 md:text-5xl">
            {heading}
          </h1>
          <p className="text-md mt-8 leading-8 text-gray-800 md:w-2/3 md:text-4xl md:leading-relaxed">
            {leadingText}
          </p>
        </div>
      </section>
    </>
  );
};

export default ServiceSectionHeading;
