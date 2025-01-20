import * as React from "react";

export const TestimonialCard = ({ content, name, role, imageUrl }) => {
  return (
    <div className="flex flex-col px-8 pt-8 pb-4 mx-auto w-full text-lg text-black rounded-xl bg-sky-400 bg-opacity-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="tracking-wide leading-8 max-md:mr-2.5">
        {content}
      </div>
      <div className="flex gap-5 justify-between items-start mt-10 max-md:mt-10">
        <div className="flex flex-col">
          <div className="leading-loose">{name}</div>
          <div className="self-start">{role}</div>
        </div>
        <img
          loading="lazy"
          src={imageUrl}
          alt={`Profile picture of ${name}`}
          className="object-contain shrink-0 mt-1 w-12 rounded-full aspect-square"
        />
      </div>
    </div>
  );
};