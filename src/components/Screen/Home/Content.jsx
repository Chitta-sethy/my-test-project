import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const Content = () => {
  return (
    <section className="mt-10 flex w-full flex-col rounded-lg p-4 md:mx-auto md:mt-20 md:w-10/12 md:p-0 lg:w-11/12">
      <div className="w-full rounded-md md:w-5/6 md:p-5 lg:w-1/2 lg:p-0">
        <h2 className="text-2xl font-semibold md:text-4xl lg:text-5xl">
          Here&lsquo;s What Makes Us Different From
        </h2>
      </div>
      <div className="mt-7 w-full gap-10 md:mt-16 lg:mt-20">
        <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-green-50 p-4 md:p-8">
            <div className="items-center">
              <Image
                src="/icon/study.png"
                alt="clinic-logo"
                height={500}
                width={500}
                className="flex h-14 w-auto"
              />
              <h2 className="mt-4 text-xl font-bold text-gray-800">
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
          <div className="rounded-2xl border bg-amber-50 p-4 md:p-8">
            <div className="items-center gap-2">
              <Image
                src="/icon/discount.png"
                alt="clinic-logo"
                height={500}
                width={500}
                className="flex h-14 w-auto"
              />
              <h2 className="mt-4 text-xl font-bold text-gray-800">
                Always more discount than other{" "}
              </h2>
            </div>
            <p className="text-md mt-3 text-gray-700 md:text-lg">
              Our commitment to affordability and quality in healthcare is
              reflected in our exceptional discounts, ensuring the best value
              for your health and wellness needs.{" "}
            </p>
          </div>
          <div className="rounded-2xl border bg-cyan-50 p-4 md:p-8">
            <div className="items-center gap-2">
              <Image
                src="/icon/doctor.png"
                alt="clinic-logo"
                height={500}
                width={500}
                className="flex h-14 w-auto"
              />
              <h2 className="mt-4 text-xl font-bold text-gray-800">
                {" "}
                Experienced team of doctors and pharmacists{" "}
              </h2>
            </div>
            <p className="text-md mt-3 text-gray-700 md:text-lg">
              Our team of doctors and pharmacists offers expert care,
              personalized guidance, and safe, effective treatment, ensuring
              your health is in the best hands.{" "}
            </p>
          </div>
          <div className="rounded-2xl border bg-pink-50 p-4 md:p-8">
            <div className="items-center gap-2">
              <Image
                src="/icon/delivery-two.png"
                alt="clinic-logo"
                height={500}
                width={500}
                className="flex h-14 w-auto"
              />
              <h2 className="mt-4 text-xl font-bold text-gray-800">
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
      </div>
    </section>
  );
};

export default Content;
