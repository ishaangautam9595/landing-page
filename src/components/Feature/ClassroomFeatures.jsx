import * as React from "react";
import FeatureCard from "./FeatureCard";
import { topFeatures, middleFeatures, bottomFeatures } from "./featureData";

export default function ClassroomFeatures() {
  return (
    <div className="flex flex-col pr-3 items-center bg-white max-md:pl-5 max-md:max-w-full">
      <div className="flex z-10 flex-col self-end w-full text-center max-w-[1167px] max-md:max-w-full">
        <div className="flex flex-col self-start mt-16 max-md:mt-10 max-md:max-w-full">
          <h1 className="self-center text-4xl font-bold tracking-tighter leading-loose text-sky-800 max-md:max-w-full">
            What Adaptmate Brings to Your Classroom
          </h1>
          <p className="mt-3 text-lg leading-loose text-zinc-800 max-md:max-w-full">
            Empowering teachers with time-saving tools and actionable insights
            to transform every classroom experience.
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-32 w-full max-w-[1161px] max-md:max-w-full">
        <div className="self-end w-full max-w-[1117px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {topFeatures.map(feature => (
              <div key={feature.id} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-32 w-full max-w-[1166px] max-md:mt-10 max-md:max-w-full">
        <div className="self-end w-full max-w-[1117px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {middleFeatures.map(feature => (
              <div key={feature.id} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>

        <div className="self-end mt-32  w-full max-w-[1117px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {bottomFeatures.map(feature => (
              <div key={feature.id} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>

        <button 
          className="overflow-hidden ml-20 self-center px-10 py-6 mt-14 ml-8 max-w-full text-lg leading-none text-center text-blue-300 rounded-3xl border-sky-800 border-solid bg-sky-950 w-[272px] max-md:px-5 max-md:mt-10"
          tabIndex="0"
        >
          Request a Demo Today!
        </button>
      </div>
    </div>
  );
}