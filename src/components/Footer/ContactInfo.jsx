import * as React from "react";
import Circle from "../../assets/Circle.png"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: `${Circle}`,
      text: "team@hyggexworld.com",
      alt: "Email icon"
    },
    {
      icon: `${Circle}`,
      text: "+91 98765 43210",
      alt: "Phone icon"
    },
    {
      icon: `${Circle}`,
      text: "India",
      alt: "Location icon"
    }
  ];

  return (
    <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start w-full text-lg leading-none text-blue-300 max-md:mt-10">
        <h2 className="text-lg font-semibold leading-loose text-white">
          Contact Us
        </h2>
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex gap-3 mt-5">
            <img
              loading="lazy"
              src={detail.icon}
              alt={detail.alt}
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <div className="my-auto">{detail.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}