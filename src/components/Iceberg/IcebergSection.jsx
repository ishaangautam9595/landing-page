import * as React from "react";
// assets
import Up from "../../assets/up.png"
import Down from "../../assets/down.png"

export default function IcebergSection() {
  return (
    <div className="flex flex-col items-center text-lg font-bold leading-6 text-center mt-10">
      <div className="text-4xl leading-none text-sky-700 max-md:max-w-full">
        What You See is Just the Tip of the Iceberg
      </div>
      <div className="mt-7 font-medium text-black w-[952px] max-md:max-w-full">
        Classrooms are filled with visible tasks—like lesson planning and
        syllabus completion—but hidden beneath the surface are countless
        challenges that go unnoticed, leaving both teachers and students
        overwhelmed.
      </div>
      <img
        loading="lazy"
        src={Up}
        alt="Iceberg illustration showing visible and hidden teaching challenges"
        className="object-contain max-w-full aspect-[1.55] w-[958px]"
      />
      <div className="flex flex-col items-center self-stretch px-20 pb-14 mt-3.5 w-full text-sky-800 bg-sky-400 bg-opacity-20 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src={Down}
        alt="Iceberg illustration showing visible and hidden teaching challenges"
        className="object-contain mb-20 max-w-full aspect-[2] h-[auto] w-[958px]"
      />
      </div>
    </div>
  );
}