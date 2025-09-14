"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "@/components/ui/testimonial-card";
const Testimonials = () => {
  return (
    <section className="my-10 flex flex-col items-start justify-center p-4 md:mx-auto md:my-20 md:items-center md:p-0 lg:w-11/12">
      <p className="relative pb-2 text-base font-semibold text-green-500 md:text-xl">
        Testimonials
      </p>
      <h2 className="w-full text-left text-2xl font-semibold md:mt-8 md:w-5/6 md:text-center md:text-4xl lg:text-5xl">
        What The People Thinks About Us
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="mt-10 w-full max-w-7xl md:mt-20"
      >
        <CarouselContent className="mb-10 w-full">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="relative min-h-64 w-full">
                <CardContent>
                  <TestimonialCard
                    review="The clinic services are exceptional. The staff is welcoming,
                    and the doctors take the time to listen to all my concerns.
                    I felt so comfortable during my visit, and I left knowing I
                    was in good hands.,"
                    userImage="/image/lady.png"
                    userName="Ritika Panda"
                    userPosition="Ceo (H.k pvt)"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="relative min-h-64 w-full">
                <CardContent>
                  <TestimonialCard
                    review="Mediservices is a trustworthy pharmacy known for its
                    exceptional customer service, offering affordable
                    medications and prompt advice."
                    userImage="/image/male.png"
                    userName="Sritam Samal"
                    userPosition="Principal"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="relative min-h-64 w-full">
                <CardContent>
                  <TestimonialCard
                    review="Mediservices provided exceptional care, making the patient
                    feel valued and providing clear explanations of their
                    condition and treatment options, making them highly
                    recommended for their services."
                    userImage="/image/oldman.png"
                    userName="Bikash Rao"
                    userPosition=" Ceo Ambica"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="relative min-h-64 w-full">
                <CardContent>
                  <TestimonialCard
                    review="I've been coming to Mo-medicine for years, and the team
                    never fails to provide excellent service, whether it's
                    refilling prescriptions or answering health questions."
                    userImage="/image/boy.png"
                    userName="Mukesh Shrama"
                    userPosition="Professor(D.N college)"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 transform space-x-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;
