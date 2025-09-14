import React from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
const About = () => {
  return (
    <section className="w:full flex flex-col gap-10 p-2 md:mx-auto md:mt-14 md:w-10/12 md:gap-10 md:p-0 lg:mt-20 lg:w-11/12 lg:flex-row">
      <div className="w-full rounded-lg p-2 lg:w-1/2">
        <p className="w-30 relative border-green-500 pb-2 text-left text-base font-semibold text-green-500 lg:text-left">
          ABOUT US
        </p>

        <h2 className="text-left text-2xl font-semibold md:text-3xl lg:text-left lg:text-5xl lg:leading-normal">
          Discover Our inspiring Health Mission With Us!
        </h2>
        <p className="mt-8 text-base leading-relaxed text-gray-700 lg:text-lg lg:leading-loose">
          MO-MEDICINE is a trusted healthcare destination offering high-quality
          medications, products, and personalized services. With a dedicated
          team of pharmacists, We ensure accurate prescription filling and
          provide a seamless shopping experience. We offer clinic services,
          business-to-business solutions, and tailored care to meet unique
          needs.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex gap-2 rounded-lg bg-gray-100 p-6 text-green-950 shadow-lg">
            <CircleCheckBig />
            Professional Team Members
          </div>
          <div className="flex gap-2 rounded-lg bg-gray-100 p-6 text-green-950 shadow-lg">
            <CircleCheckBig />
            Comprehensive Services
          </div>
          <div className="flex gap-2 rounded-lg bg-gray-100 p-6 text-green-950 shadow-lg">
            <CircleCheckBig />
            Commitment to Quality
          </div>
          <div className="flex gap-2 rounded-lg bg-gray-100 p-6 text-green-950 shadow-lg">
            <CircleCheckBig />
            Personalized Care
          </div>
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2">
        <div className="flex p-2 md:mt-4 md:justify-start lg:justify-end">
          <div>
            <Image
              src="/image/two-pharamacy.jpg"
              alt="clinic-logo"
              height={1200}
              width={1200}
              className="w-auto rounded-3xl md:h-[550px] lg:h-[550px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
