import React from "react";
import Image from "next/image";
const Shipping = () => {
  return (
    <section className="mx-auto mt-10 h-[400px] w-full rounded-2xl bg-green-500 p-10 md:h-[180px] md:w-10/12">
      <div className="grid h-24 w-full grid-cols-1 gap-5 md:grid-cols-4">
        <div className="flex items-center gap-4">
          <Image
            src="/icon/study.png"
            alt="clinic-logo"
            height={500}
            width={500}
            className="h-16 w-auto"
          />
          <div>
            <h3 className="text-xl font-bold text-white">
              Strong Online and Offline Presence
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="/icon/discount.png"
            alt="clinic-logo"
            height={500}
            width={500}
            className="h-16 w-auto"
          />
          <div>
            <h3 className="text-xl font-bold text-white">
              Always more discount than other
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/icon/doctor.png"
            alt="clinic-logo"
            height={500}
            width={500}
            className="h-16 w-auto"
          />
          <div>
            <h3 className="text-xl font-bold text-white">
              Experienced team of doctors and pharmacists
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/icon/delivery-two.png"
            alt="clinic-logo"
            height={500}
            width={500}
            className="h-16 w-auto"
          />
          <div>
            <h3 className="text-xl font-bold text-white">
              Fastest fullfillment and delivery Network
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
