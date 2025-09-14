"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // For scroll-based animation
import { Search, BaggageClaim, Headset, UserRoundCog } from "lucide-react";

const BannerTwo = () => {
  const controls = useAnimation(); // Animation control from Framer Motion
  const [ref, inView] = useInView({
    triggerOnce: true, // Triggers only once when in view
    threshold: 0.1, // Amount of the element that needs to be visible before triggering
  });

  // Start animation when h1 tag comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants for h1 tag
  const headingVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Sample store data with address and location URLs
  const stores = [
    {
      name: "Road-12, Jagannath Nagar Main Rd, Rasulgarh, Bhubaneswar, Odisha, 751010",
      locationUrl:
        "https://www.google.com/maps?q=Momedicine+Jagannath+Nagar,+12,+Jagannath+Nagar+Main+Rd,+Jagannath+Nagar,+Rasulgarh,+Bhubaneswar,+Odisha+751010",
    },
    {
      name: "Palasuni East Canal Road, Prachi Vihar Square, Bhubaneswar, Odisha 751010",
      locationUrl:
        "https://www.google.com/maps?q=Mo+Medicine,+Palasuni,+7VM9+RX9,+Prachi+Vihar,+Jagannath+Nagar,+Jharapada,+Bhubaneswar,+Odisha+751010",
    },

    // Add more stores as needed...
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStores, setFilteredStores] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = stores.filter((store) =>
      store.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStores(filtered);
  };

  const handleStoreClick = (storeUrl) => {
    window.open(storeUrl, "_blank");
  };

  const handleSearchIconClick = () => {
    if (filteredStores.length > 0) {
      window.open(filteredStores[0].locationUrl, "_blank");
    } else {
      alert("No stores found for this search.");
    }
  };

  return (
    <section className="flex w-full flex-col items-start rounded-xl bg-green-50 p-4 py-20 md:mx-auto md:w-10/12 md:items-center lg:w-11/12">
      <div className="flex flex-col items-center justify-center space-y-10">
        <motion.div
          ref={ref} // Reference for inView detection
          variants={headingVariant} // Animation variants
          initial="hidden" // Initial hidden state
          animate={controls} // Control the animation based on scroll
          className="flex h-auto w-60 items-center space-x-2 rounded-full border p-2"
        >
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <p className="md:text-md text:sm">Welcome Mediservice</p>
        </motion.div>

        {/* Animated h1 tag */}
        <h1 className="w:full w-full text-left text-3xl font-bold text-green-950 md:w-full md:text-center md:text-5xl md:leading-relaxed lg:w-2/3 lg:text-7xl lg:leading-tight">
          Our only priority is to keep you healthy.
        </h1>

        <p className="text-md w-full text-left leading-8 text-gray-500 md:text-center md:text-xl lg:w-8/12 lg:text-xl lg:leading-relaxed">
          From clinic services to business-to-business and business-to-customer
          solutions, we offer comprehensive care tailored to your unique needs.
        </p>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="h-14 w-[350px] rounded-full border-2 px-4 py-2 pr-12 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 md:w-[500px] lg:w-[750px]"
            placeholder="Find your store..."
          />
          <div
            className="pointer-events-auto absolute inset-y-0 right-4 m-2 flex w-auto cursor-pointer items-center rounded-full bg-green-500 p-2"
            onClick={handleSearchIconClick}
          >
            <Search className="rounded-md text-white" />
          </div>

          {/* Store List Dropdown */}
          {searchQuery && (
            <div className="absolute mt-2 w-full rounded-md bg-white shadow-lg md:w-[500px] lg:w-[750px]">
              <ul className="max-h-60 overflow-y-auto p-2">
                {filteredStores.length > 0 ? (
                  filteredStores.map((store, index) => (
                    <li
                      key={index}
                      className="cursor-pointer p-2 hover:bg-green-100"
                      onClick={() => handleStoreClick(store.locationUrl)}
                    >
                      {store.name}
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-gray-500">No stores found</li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Other features (e.g., Customer Satisfaction, Medical Facilities, etc.) */}
        <div className="flex flex-col gap-6 md:gap-5 lg:flex-row">
          <div className="flex h-12 w-auto items-center gap-4 rounded-full border p-4">
            <div className="rounded-full bg-sky-500 p-2">
              <UserRoundCog />
            </div>
            <div>
              <p className="flex gap-4 rounded-full font-medium text-gray-800">
                100% Customer Satisfaction
              </p>
            </div>
          </div>
          <div className="flex h-12 w-auto items-center gap-4 rounded-full border p-4">
            <div className="rounded-full bg-pink-500 p-2">
              <Headset />
            </div>
            <div>
              <p className="flex gap-4 rounded-full font-medium text-gray-800">
                24/7 Premium Support
              </p>
            </div>
          </div>
          <div className="flex h-12 w-auto items-center gap-4 rounded-full border p-4">
            <div className="rounded-full bg-green-500 p-2">
              <BaggageClaim />
            </div>
            <div>
              <p className="flex gap-4 rounded-full font-medium text-gray-800">
                Doorstep Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
