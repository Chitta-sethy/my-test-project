import ServiceDetailsCard from "@/components/IndividualServices/ServiceDetailsCard";
import ServicedetailsSection from "@/components/IndividualServices/ServicedetailsSection";
import ServiceSectionHeading from "@/components/IndividualServices/ServiceSectionHeading";
import Appointment from "@/components/Screen/Home/Appointment";
import React from "react";
const WholesalePage = () => {
  return (
    <>
      <>
        <ServicedetailsSection>
          <ServiceSectionHeading
            heading="Wholesale Pharmacy Solutions"
            leadingText="Wholesale pharmacy services distribute pharmaceutical products to healthcare providers, pharmacies, hospitals, and other medical institutions, ensuring efficient and reliable access to medications and medical supplies."
          />
          <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 md:py-20 lg:grid-cols-3">
            <ServiceDetailsCard
              title="Product Distribution"
              description="Wholesale pharmacies offer a diverse range of prescription and over-the-counter medications, essential medical supplies, surgical equipment, vaccines, and biologic treatments to maintain a steady healthcare supply."
            />
            <ServiceDetailsCard
              title="  Supply Chain Management"
              description="Wholesale pharmacies ensure efficient and reliable supply chain management, from sourcing pharmaceutical products from manufacturers to delivering them to end-users like hospitals and retail pharmacies."
            />
            <ServiceDetailsCard
              title="Cost-Effective Solutions"
              description="Wholesale pharmacy services provide cost-effective solutions to healthcare providers by offering competitive pricing for bulk orders, helping to reduce costs for hospitals, clinics, and retailers."
            />
            <ServiceDetailsCard
              title="Regulatory Compliance"
              description="Wholesale pharmacies are responsible for adhering to strict regulatory guidelines, ensuring that all products are sourced from licensed manufacturers, properly labeled, and compliant with local laws."
            />
            <ServiceDetailsCard
              title="Customer Support"
              description="Many wholesale pharmacy services offer dedicated customer support, helping healthcare providers navigate product selection, pricing, and order tracking."
            />
            <ServiceDetailsCard
              title="Delivery and Logistics"
              description="Timely and efficient delivery services are a cornerstone of wholesale pharmacy services, ensuring that healthcare providers receive products on time."
            />
          </div>
        </ServicedetailsSection>
        <Appointment />
      </>
    </>
  );
};

export default WholesalePage;
