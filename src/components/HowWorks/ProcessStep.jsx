import * as React from "react";

export function ProcessStep({ step, index }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-center text-center text-white max-md:mt-10">
      <div className="flex flex-col items-center text-white p-6 rounded-lg w-80">
      <div className="relative flex items-center justify-center">
        <div className=" h-[140px] w-[140px] bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img
            loading="lazy"
            src={step.imageSrc}
            alt={step.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mr-20 absolute -bottom-3 bg-cyan-900 text-white text-xl  w-12 h-12 rounded-full flex items-center justify-center font-bold">
          {step.id}
        </div>
      </div>
      </div>        
        <div className="mt-7 text-xl font-semibold leading-snug">
          {step.title}
        </div>
        <div className="self-stretch mt-5 text-lg leading-6">
          {step.description}
        </div>
      </div>
    </div>
  );
}