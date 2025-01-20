import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";
import Avatar1 from '../../assets/avatar1.jpg.png';
import Avatar2 from '../../assets/avatar2.jpg.png';
import Avatar3 from '../../assets/avatar3.jpg.png';

const testimonialData = [
  {
    content: "Adaptmate has been a game-changer for me! Its comprehensive features have truly enhanced my experience",
    name: "Shahin",
    role: "Teacher",
    imageUrl: `${Avatar1}`
  },
  {
    content: "In my 30 years of teaching, I always wished for a tool like Adaptmate.",
    name: "Ahmed Roy",
    role: "Principal",
    imageUrl: `${Avatar2}`
  },
  {
    content: "As a Principal who struggled with with knowing school performance. Adaptmate worked as a game changer.",
    name: "Rakesh Verma",
    role: "Teacher",
    imageUrl: `${Avatar3}`
  }
];

const DownTestimonialData = [
    {
      content: "Its comprehensive features have truly enhanced my experience",
      name: "Shahin",
      role: "Teacher",
      imageUrl: `${Avatar1}`
    },
    {
      content: "In my 30 years of teaching, I always wished for a tool like Adaptmate. It's the perfect assistant for me.",
      name: "Ahmed Roy",
      role: "Principal",
      imageUrl: `${Avatar2}`
    },
    {
      content: "As a Principal who struggled with with knowing school performance. Adaptmate worked as a game changer.",
      name: "Rakesh Verma",
      role: "Teacher",
      imageUrl: `${Avatar3}`
    }
  ];

export default function TestimonialSection() {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pb-20 pt-4 mt-16 w-full bg-white rounded-sm border border-solid border-white border-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="text-4xl font-bold leading-relaxed text-sky-700 max-md:max-w-full">
        What people are saying about us
      </div>
      <div className="mt-10 w-full max-w-[1240px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className={`flex flex-col ${index === 1 ? 'w-[26%]' : 'w-[37%]'} max-md:ml-0 max-md:w-full`}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {DownTestimonialData.map((testimonial, index) => (
            <div key={`second-${index}`} className={`flex flex-col ${index === 0 ? 'w-[26%]' : 'w-[37%]'} max-md:ml-0 max-md:w-full`}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}