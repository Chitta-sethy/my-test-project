import React from "react";
import Image from "next/image";
import Link from "next/link";
const Form = () => {
  return (
    <div className="rounded-md p-4 md:p-8">
      <div className="flex items-center gap-2">
        <Image
          src="/icon/location.png"
          alt="clinic-logo"
          height={500}
          width={500}
          className="flex h-8 w-auto"
        />
        <h2 className="text-xl font-bold"> Address</h2>
      </div>
      <p className="text-md mt-3 text-gray-500 md:text-lg">
        Road No-121, Reston, Vergenia Main Rd , United States, Uk 75102{" "}
      </p>
      <p className="text-md mt-3 text-gray-500 md:text-lg">
        East Canal Road, Rockway, Newjersy 5456{" "}
      </p>
      <div className="mt-8 flex items-center gap-2">
        <Image
          src="/icon/phone.png"
          alt="clinic-logo"
          height={500}
          width={500}
          className="flex h-8 w-auto"
        />
        <h2 className="text-xl font-bold underline"> Let&apos; talk</h2>
      </div>
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B918984164824&text&type=phone_number&app_absent=0"
        className="text-md mt-3 text-green-500 md:text-lg"
      >
        +1 8556524456 /
      </Link>
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B919078332494&text&type=phone_number&app_absent=0"
        className="text-md mt-3 text-green-500 md:text-lg"
      >
        +1 9078355867
      </Link>
      <div className="mt-8 flex items-center gap-2">
        <Image
          src="/icon/email.png"
          alt="clinic-logo"
          height={500}
          width={500}
          className="flex h-8 w-auto"
        />
        <h2 className="text-xl font-bold underline">General Support</h2>
      </div>
      <Link href="" className="text-md mt-3 text-green-500 md:text-lg">
        contact@mediservices.com
      </Link>
    </div>
  );
};

export default Form;
