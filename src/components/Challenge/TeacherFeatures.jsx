import * as React from "react";
import { TeacherFeatureItem } from "./TeacherFeatureItem";
import LearnMore from "../../assets/learnmore.png"

const teacherFeatures = [
  {
    text: "Identify learning gaps by pinpointing where students struggle, excel, or need more practice."
  },
  {
    text: "Provide focused support to help students overcome challenges and achieve better results."
  },
  {
    text: "Visualize progress with clear, easy-to-read reports for individual students and the whole class."
  },
  {
    text: "Track improvements with detailed progress cards that highlight growth over time."
  },
  {
    text: "Implement smarter teaching strategies with actionable activity suggestions tailored to your students."
  }
];

export function TeacherFeatures() {
  return (
    <div className="flex flex-col px-20 py-20">
      <h1 className="self-center ml-8 text-4xl font-bold leading-none text-center text-sky-700 max-md:max-w-full">
        How Adaptmate Helps You Solve These Challenges
      </h1>
      <div className="z-10 mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex ms-16 flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
              <div className="text-lg font-bold leading-loose text-slate-900">
                We enable teachers to:
              </div>
              {teacherFeatures.map((feature, index) => (
                <TeacherFeatureItem key={index} text={feature.text} />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={LearnMore}
              alt="Teacher dashboard visualization showing student progress and learning analytics"
              className="object-contain mt-1.5 h-[500px] w-full aspect-[1.43] ml-10 max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}