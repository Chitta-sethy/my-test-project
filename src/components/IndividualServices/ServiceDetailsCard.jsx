import React from "react";
import { CircleCheckBig } from "lucide-react";
const ServiceDetailsCard = ({ title, description }) => {
  return (
    <div className="hover:bg-brand-100 rounded-md border bg-green-50 p-4 md:p-4">
      <div className="flex gap-2">
        <CircleCheckBig />
        <h3 className="-mt-2 text-xl font-semibold text-gray-800 md:text-2xl">
          {title}
        </h3>
      </div>
      <p className="text-md mt-4 text-gray-600 md:text-lg md:leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceDetailsCard;
