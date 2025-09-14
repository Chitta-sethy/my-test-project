"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const ContactUsForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full items-center space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-lg">
            Name
          </Label>
          <Input
            type="text"
            className="placeholder:text-md h-12"
            placeholder="Enter your name.."
            name="name"
            id="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">
              Email
            </Label>
            <Input
              type="email"
              className="h-12"
              placeholder="exmpale@gmail.com"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="" className="text-lg">
              Phone Number
            </Label>
            <Input
              type="number"
              className="h-12"
              placeholder="Enter your mobile no.."
              name="phone"
              id="phone"
              onC
              hange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="" className="text-lg">
            Message
          </Label>
          <Textarea
            name="message"
            className="h-28"
            id="message"
            rows="4"
            placeholder="Your message....."
            onChange={handleInputChange}
          ></Textarea>
        </div>
        <div>
          <Button size="lg" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
