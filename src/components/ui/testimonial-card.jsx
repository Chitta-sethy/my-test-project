import Image from "next/image";
import React from "react";

const TestimonialCard = ({ review, userImage, userName, userPosition }) => {
  return (
    <div className="h-full">
      <Image
        src="/icon/quote.png"
        alt="clinic-logo"
        height={500}
        width={500}
        className="absolute left-4 top-0 mt-2 h-10 w-auto opacity-10"
      />
      <blockquote className="text-md mt-6 line-clamp-6 break-words indent-10 text-gray-800">
        {review}
      </blockquote>
      <div className="mt-4 flex items-start justify-start space-x-4">
        <Image
          src={userImage}
          alt="clinic-logo"
          height={500}
          width={500}
          className="h-14 w-14 rounded-full"
        />
        <div className="">
          <h3 className="text-base font-medium text-gray-800">{userName}</h3>
          <p className="text-sm font-normal uppercase text-gray-700">
            {userPosition}
          </p>
        </div>
      </div>
      <Image
        src="/icon/quote.png"
        alt="clinic-logo"
        height={500}
        width={500}
        className="absolute bottom-2 right-4 h-10 w-auto -rotate-180 opacity-10"
      />
    </div>
  );
};

export default TestimonialCard;
