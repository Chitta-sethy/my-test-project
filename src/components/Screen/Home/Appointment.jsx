import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Appointment = () => {
  return (
    <section className="mt-10 flex justify-center">
      <div className="relative">
        <Image
          src="/hexagon-hexa-new-2.svg"
          alt="clinic-logo"
          height={500}
          width={500}
          className="h-[280px] w-full rounded-xl object-cover shadow"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:items-center">
          <p className="font-bold text-white">Book Appointment</p>
          <h5 className="mt-4 text-3xl font-bold text-white">
            Request Your Appointment
          </h5>
          <Link href="/contact">
            <Button
              variant="outline"
              className="mt-8 h-12 text-green-600 shadow-md"
            >
              Get Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
