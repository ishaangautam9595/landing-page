import * as React from "react";
import { ProcessStep } from "./ProcessStep";
import { processSteps } from "./processSteps";
import Vector from "../../assets/Vector.png";


export default function HowItWorks() {
  return (
    <div className="flex flex-col justify-center items-center px-20 py-20 bg-sky-700 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1167px] max-md:max-w-full">
        <h1 className="text-4xl font-bold leading-none text-center text-white max-md:max-w-full">
          How Adaptmate Bridges Learning Gaps
        </h1>
        <p className="mt-5 text-lg leading-6 text-center text-white max-md:max-w-full">
          Adaptmate bridges the gap between data and action through a seamless
          four-step process, integrating self-aware insights to drive meaningful
          learning outcomes.
        </p>
        <div className="self-stretch relative mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
        <img
          src={Vector}
          alt="Background Vector"
          className="object-cover ml-24 w-[950px] h-[5px] mt-24 absolute inset-0 size-full"
        />
            {processSteps.map((step, index) => (
              <ProcessStep key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
        <button 
          className="overflow-hidden px-9 py-6 mt-16 max-w-full text-lg leading-none text-center text-blue-300 rounded-3xl border border-blue-300 border-solid bg-sky-950 max-md:px-5 max-md:mt-10 max-md:max-w-full"
          tabIndex="0"
          aria-label="Book a free demo of Adaptmate"
        >
          Want to See Adaptmate in Action? Book a Free Demo Today!
        </button>
        </div>
    </div>
    
  );
}