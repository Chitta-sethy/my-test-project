import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutDetails = () => {
  return (
    <section className="w-full space-y-5 p-4 md:mx-auto md:mt-10 md:w-10/12 md:p-0 lg:w-11/12">
      <h1 className="w-full text-2xl font-semibold text-black md:w-5/6 md:text-5xl lg:leading-normal">
        We help our community thrive with better health,
        <span className="text-green-500">
          growing together, one care at a time.
        </span>
      </h1>
      <Link href="/contact">
        <Button className="mt-7 h-10 md:mt-10 md:h-14">Order Now</Button>
      </Link>
    </section>
  );
};

export default AboutDetails;
