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
            heading="Healthcare Clinic Services"
            leadingText="Providing Compassionate, Comprehensive Healthcare Services Tailored to Your Unique Needs, Ensuring a Healthier and Happier You."
          />
          <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 md:py-20 lg:grid-cols-3">
            <ServiceDetailsCard
              title="Primary Care"
              description="Our healthcare services include regular check-ups, physical assessments, chronic condition monitoring, preventive care, vaccinations, disease screenings, personalized lifestyle counseling, and health education for a healthier, balanced life."
            />
            <ServiceDetailsCard
              title=" Specialty Services"
              description="Our clinic provides specialized healthcare services like pediatrics, gynecology, dermatology, cardiology, and mental health support for children, adolescents, and adults, addressing reproductive health, skin conditions, and mental health challenges."
            />
            <ServiceDetailsCard
              title="Chronic Disease Management"
              description="Clinics assist patients in managing chronic conditions like diabetes, hypertension, asthma, and arthritis through monitoring, therapy, and lifestyle advice, providing treatments, inhalers, and ongoing monitoring for improved quality of life."
            />
            <ServiceDetailsCard
              title="Diagnostic and Laboratory Services"
              description="Our clinic provides diagnostic services like lab tests, imaging, and screenings for accurate diagnosis and health monitoring, including cancer and heart disease screenings for early detection and proactive management."
            />
            <ServiceDetailsCard
              title="Health and Wellness Programs"
              description="linics offer wellness programs, including weight management, smoking cessation, and personalized exercise plans, along with nutrition counseling for healthy eating habits and dietary restrictions."
            />
            <ServiceDetailsCard
              title="Women's Health Services"
              description="Our clinic provides comprehensive women's health services, including routine exams, prenatal and postnatal care, birthing classes, maternal health monitoring, menopause management, and hormonal therapy options."
            />
          </div>
        </ServicedetailsSection>
        <Appointment />
      </>
    </>
  );
};

export default HealthcarePage;
