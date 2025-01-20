import * as React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex gap-5">
      <img
        loading="lazy"
        src={icon}
        alt={`${title} feature icon`}
        className="object-contain shrink-0 self-start w-16 aspect-square"
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
        <div className="self-start text-lg font-semibold tracking-normal leading-tight text-black">
          {title}
        </div>
        <div className="mt-2 text-lg text-gray-600">{description}</div>
      </div>
    </div>
  );
}
