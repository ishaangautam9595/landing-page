import * as React from "react";
import Circle from "../../assets/Circle.png"
export function TeacherFeatureItem({ text }) {
  return (
    <div className="flex gap-4 mt-8">
      <div className="self-start text-xl font-black leading-none text-sky-700"></div>
      <img loading="lazy" src={Circle} alt="Circle" className="object-contain shrink-0 w-5 aspect-square"/>
      <div className="flex-auto text-lg font-medium leading-7 text-black">
        {text}
      </div>
    </div>
  );
}