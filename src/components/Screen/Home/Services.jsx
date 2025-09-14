import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
const Services = () => {
  return (
    <section className="mt-10 flex flex-col items-start justify-center p-4 md:mt-20 md:items-center md:p-0">
      <p className="relative pb-2 text-left font-semibold text-green-500">
        OUR SERVICES
        {/* <span className="absolute bottom-0 left-0 w-20 h-1 bg-green-500"></span> */}
      </p>
      <h2 className="text-2xl font-semibold md:mt-8 md:text-3xl lg:text-5xl">
        Discover Our Service Excellence.
      </h2>
      <div className="mt-6 grid w-full grid-cols-1 gap-6 md:mx-auto md:mt-20 md:w-10/12 md:grid-cols-2 md:p-0 lg:w-11/12 lg:grid-cols-3">
        <div className="h-auto space-y-4 rounded-3xl border border-green-200 bg-white p-4 md:p-10">
          <Image
            src="/icon/pharmacy.png"
            alt="clinic-logo"
            height={500}
            width={500}
            className="h-14 w-auto md:h-16"
          />
          <h3 className="text-xl font-bold text-gray-800 md:text-2xl">
            Healthcare Clinic Services
          </h3>
          <p className="text-md text-gray-700 md:text-lg">
            Providing professional healthcare services, including consultations,
            check-ups, and health advice directly from our in-store clinic.
          </p>
          <Link href="#">
            <Button
              variant="outline"
              size="lg"
              className="mt-4 h-12 w-48 border border-green-200 bg-green-500/5 text-green-700 hover:bg-green-500/50"
            >
              Learn More <ArrowUpRight size={20} />
            </Button>
          </Link>
        </div>
        <div className="border-green-200-700 h-auto space-y-4 rounded-3xl border border-green-200 bg-white p-4 md:p-10">
          <Image
            src="/icon/bocket.png"
            alt="clinic-logo"
            height={500}
            width={500}
            className="h-14 w-auto md:h-16"
          />
          <h3 className="text-xl font-bold text-gray-800 md:text-2xl">
            Retail Pharmacy Services
          </h3>
          <p className="text-md text-gray-700 md:text-lg">
            Offering prescription medications, over-the-counter products, and
            health essentials directly to individual customers, both in-store
            and online.
          </p>
          <Link href="#">
            <Button
              variant="outline"
              size="lg"
              className="mt-4 h-12 w-48 border border-green-200 bg-green-500/5 text-green-700 hover:bg-green-500/50"
            >
              Learn More <ArrowUpRight size={20} />
            </Button>
          </Link>
        </div>
        <div className="flex h-auto rounded-3xl border border-green-200 bg-white">
          <div className="space-y-4 p-4 md:p-10">
            <Image
              src="/icon/wholesale.png"
              alt="clinic-logo"
              height={500}
              width={500}
              className="h-14 w-auto md:h-16"
            />
            <h3 className="text-xl font-bold text-gray-800 md:text-2xl">
              Wholesale Pharmacy Solutions{" "}
            </h3>
            <p className="text-md text-gray-700 md:text-lg">
              Supplying bulk medications, medical supplies, and healthcare
              products to hospitals, clinics, and other businesses.
            </p>
            <Link href="#">
              <Button
                variant="outline"
                size="lg"
                className="mt-4 h-12 w-48 border border-green-200 bg-green-500/5 text-green-700 hover:bg-green-500/50"
              >
                Explore <ArrowUpRight size={20} />
              </Button>
            </Link>
          </div>
          <div className="p-2">
            <Image
              src="/icon/new.png"
              alt="clinic-logo"
              height={500}
              width={500}
              className="flex h-auto w-28"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
