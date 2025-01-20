import * as React from "react";
import { TrustedInstitutes } from "./TrustedInstitutes";
import Pencil from "../../assets/Pencil.png"
import brush from "../../assets/brush.png"

export function LandingPage() {
  return (
    <div className="flex z-10 flex-col items-center m-0 p-0 font-medium bg-sky-700 max-md:max-w-screen">
      <div className="mt-16 w-[600px] text-5xl font-bold text-center text-white leading-[54px] max-md:mt-10 max-md:max-w-full">
        <span className="text-neutral-100">Identify and Bridge</span>{" "}
        <span className="text-blue-300">Learning Gaps</span>{" "}
        <span className="text-neutral-100">Effortlessly</span>.
      </div>
      <img src={brush} alt="brush" className="ml-72"/>
      <div className="mt-12 text-lg w-[600px] leading-6 text-center text-neutral-100 max-md:mt-10 max-md:max-w-full">
        Adaptmate helps teachers identify learning gaps in each student,
        reducing the time needed for analysis and enabling timely assistance for
        students.
      </div>
      <div className="flex gap-9 items-center mt-14 text-lg leading-loose text-center text-blue-300 max-md:mt-10">
        <button className="gap-2.5 self-stretch px-6 py-3 my-auto bg-sky-800 rounded-xl w-[180px] max-md:px-5">
          Book a Demo
        </button>
        <button className="gap-2.5 self-stretch px-7 py-3 my-auto rounded-xl border border-blue-300 border-solid max-md:px-5">
          View Features
        </button>
      </div>
      <div className="flex gap-4 items-center mt-6 max-w-full text-sm font-semibold text-center text-white min-h-[21px] w-[447px]">
        <div className="self-stretch my-auto min-w-[240px] w-[447px] max-md:max-w-full">
          <span className="text-orange-400">1000+ Teachers</span>{" "}
          <span className="">trusted Adaptmate.</span>
        </div>
      </div>
      <img
        loading="lazy"
        src={Pencil}
        alt="Decorative element"
        className="object-contain self-start mt-7 ml-16 aspect-[1.05] w-[39px] max-md:ml-2.5"
      />
      <TrustedInstitutes />
      
    </div>
  );
}