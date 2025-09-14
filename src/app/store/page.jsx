import { ArrowUp, ArrowUpRight, SquareArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StorePage = () => {
  return (
    <>
      <header className="px-4 py-6 md:px-10 md:py-10 lg:py-16">
        <div className="py-2 text-left text-gray-800 md:py-4 md:text-center md:text-4xl">
          <h1 className="mb-4 text-3xl font-extrabold text-green-500 md:mb-6 md:text-4xl">
            Explore Our Store Locations
          </h1>
          <p className="text-lg text-gray-500 md:text-xl">
            Check out the details of our stores below & Visits.
          </p>
        </div>
      </header>
      <section className="px-4 py-6 md:px-40 md:py-0 lg:py-16">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* First Location */}
          <div className="flex w-full flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl md:items-start">
            <Image
              src="/image/store.jpg"
              alt="Logo"
              height={800}
              width={800}
              className="h-[480px] w-full rounded-2xl object-cover"
            />
            <div className="p-8">
              <p className="text-lg text-gray-600 md:text-left">
                <span className="font-semibold text-green-500">Store 1:</span>{" "}
                Palasuni East Canal Road, Prachi Vihar Square, Bhubaneswar,
                Odisha 751010
              </p>
              {/* Map Directions Link */}
              <div className="mt-4">
                <Link
                  href="https://www.google.com/maps?q=Mo+Medicine,+Palasuni,+7VM9+RX9,+Prachi+Vihar,+Jagannath+Nagar,+Jharapada,+Bhubaneswar,+Odisha+751010"
                  target="_blank"
                  className="flex items-center gap-2 text-lg font-semibold text-green-500 hover:underline"
                >
                  Get Directions <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>

          {/* Second Location */}
          <div className="flex w-full flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl md:items-start">
            <Image
              src="/image/store-image.jpg"
              alt="Logo"
              height={800}
              width={800}
              className="h-[480px] w-full rounded-2xl object-fill"
            />
            <div className="p-8">
              <p className="text-lg text-gray-600 md:text-left">
                <span className="font-semibold text-green-500">Store 2:</span>{" "}
                Road No - 12, Jagannath Nagar, Rasulgarh, Bhubaneswar, Odisha
                751010
              </p>
              {/* Map Directions Link */}
              <div className="mt-4">
                <Link
                  href="https://www.google.com/maps?q=Momedicine+Jagannath+Nagar,+12,+Jagannath+Nagar+Main+Rd,+Jagannath+Nagar,+Rasulgarh,+Bhubaneswar,+Odisha+751010"
                  alt="Logo"
                  target="_blank"
                  className="flex items-center gap-2 text-lg font-semibold text-green-500 hover:underline"
                >
                  Get Directions <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorePage;
