import ServiceDetailsCard from "@/components/IndividualServices/ServiceDetailsCard";
import ServicedetailsSection from "@/components/IndividualServices/ServicedetailsSection";
import ServiceSectionHeading from "@/components/IndividualServices/ServiceSectionHeading";
import Appointment from "@/components/Screen/Home/Appointment";
import React from "react";
const HealthcarePage = () => {
  return (
    <>
      <>
        <ServicedetailsSection>
          <ServiceSectionHeading
            heading="Retail Pharmacy Services"
            leadingText="Retail pharmacy services offer medications, healthcare products, and medical supplies directly to consumers, focusing on individual health needs like prescriptions, wellness products, and vaccinations."
          />
          <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 md:py-20 lg:grid-cols-3">
            <ServiceDetailsCard
              title="Prescription Medications"
              description="Dispensing and managing prescription drugs, with pharmacists providing guidance on dosage, side effects, and medication safety."
            />
            <ServiceDetailsCard
              title="Over-the-Counter (OTC) Products"
              description=" A variety of non-prescription products like pain relievers, vitamins, cold remedies, and first-aid supplies."
            />
            <ServiceDetailsCard
              title="Health Screenings and Vaccinations"
              description=" Offering preventive services such as blood pressure checks, glucose monitoring, and routine vaccinations like flu shots and COVID-19 vaccines."
            />
            <ServiceDetailsCard
              title="Chronic Disease Management"
              description="Helping patients manage conditions like diabetes, hypertension, and asthma through medication monitoring and health advice."
            />
            <ServiceDetailsCard
              title=" Home Delivery and Mail-Order Services"
              description="onvenient delivery of medications and healthcare products directly to customers' homes."
            />
            <ServiceDetailsCard
              title="Consultation and Wellness Support"
              description=" Personalized consultations on medication use, health advice, and wellness programs such as weight management and smoking cessation."
            />
          </div>
        </ServicedetailsSection>
        <Appointment />
      </>
    </>
  );
};

export default HealthcarePage;
