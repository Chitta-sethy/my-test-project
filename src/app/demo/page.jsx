import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const Content = () => {
  return (
    <section className="mt-20 w-full gap-10 md:mx-auto md:w-10/12">
      <div className="grid w-full grid-cols-4 gap-7">
        <div className="rounded-xl p-4 md:p-8">
          <div className="items-center">
            <Image
              src="/icon/study.png"
              alt="clinic-logo"
              height={500}
              width={500}
              className="flex h-14 w-auto"
            />
            <h2 className="mt-4 text-xl font-bold">
              {" "}
              Strong Online and Offline Presence
            </h2>
          </div>
          <p className="text-md mt-3 text-gray-700 md:text-lg">
            Our pharmacy clinic offers a convenient and efficient service,
            available both online and offline, to meet your needs with
            convenience and care.{" "}
          </p>
        </div>
        <div className="rounded-md p-4 md:p-8">
          <div className="items-center gap-2">
            <Image
              src="/icon/discount.png"
              alt="clinic-logo"
              height={500}
              width={500}
              className="flex h-14 w-auto"
            />
            <h2 className="mt-4 text-xl font-bold">
              Always more discount than other{" "}
            </h2>
          </div>
          <p className="text-md mt-3 text-gray-700 md:text-lg">
            Our commitment to affordability and quality in healthcare is
            reflected in our exceptional discounts, ensuring the best value for
            your health and wellness needs.{" "}
          </p>
        </div>
        <div className="rounded-md p-4 md:p-8">
          <div className="items-center gap-2">
            <Image
              src="/icon/doctor.png"
              alt="clinic-logo"
              height={500}
              width={500}
              className="flex h-14 w-auto"
            />
            <h2 className="mt-4 text-xl font-bold">
              {" "}
              Experienced team of doctors and pharmacists{" "}
            </h2>
          </div>
          <p className="text-md mt-3 text-gray-700 md:text-lg">
            Our team of doctors and pharmacists offers expert care, personalized
            guidance, and safe, effective treatment, ensuring your health is in
            the best hands.{" "}
          </p>
        </div>
        <div className="rounded-md p-4 md:p-8">
          <div className="items-center gap-2">
            <Image
              src="/icon/delivery-two.png"
              alt="clinic-logo"
              height={500}
              width={500}
              className="flex h-14 w-auto"
            />
            <h2 className="mt-4 text-xl font-bold">
              {" "}
              Fastest fullfillment and delivery Network{" "}
            </h2>
          </div>
          <p className="text-md mt-3 text-gray-700 md:text-lg">
            Our fast fulfillment and delivery network ensures efficient and
            timely delivery of your healthcare orders, ensuring your needs are
            met promptly and efficiently.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
