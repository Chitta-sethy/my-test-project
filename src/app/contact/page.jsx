import React from "react";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";

import ContactUsForm from "@/components/Form/Contact/ContactUsForm";
import Form from "@/components/Contact/Form";
const ContactForm = () => {
  return (
    // <section className="w-full p-4 mx-auto bg-gradient-to-r from-green-100 to-teal-200 md:w-1/2">
    <section className="from-green-100p-4 mx-auto mt-10 w-full bg-gradient-to-r md:w-10/12 md:py-4">
      <div className="flex flex-col space-y-8 md:items-center md:px-32 md:py-20">
        {/* Header Section */}
        <div className="space-y-8 p-4 text-left md:text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-800 md:text-5xl">
            Contact our team
          </h2>
          <p className="text-md mx-auto max-w-3xl text-gray-800 md:text-lg">
            Got any question about the product or scaling on our platform?
            We&apos;re here to help.chat to our friendly team 24/7 and get
            onboard in less than 5 minutes.
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex w-10/12 flex-col gap-20 md:flex-row">
          <div>
            <Form />
          </div>
          <div className="ml-8 w-full rounded-lg bg-white p-4 shadow-lg">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
