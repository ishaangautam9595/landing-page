import * as React from "react";
import FeatureCard from "./FeatureCard";
import Vector from "../../assets/Vector1.png";
import Well from "../../assets/Well.png";
import Native from "../../assets/Native.png";
import Powered from "../../assets/Powered.png";
import Secured from "../../assets/Secured.png";

export default function PlatformFeatures() {
  const features = [
    {
      icon: `${Well}`,
      title: "Emotional Well being Focus",
      description:
        "Adaptmate emphasis on supporting your emotional and psychological aspects of learning.",
    },
    {
      icon: `${Secured}`,
      title: "100% Secured",
      description:
        "We prioritize data security to ensure your school's information remains safe and protected.",
    },
    {
      icon: `${Powered}`,
      title: "AI-Powered Tools",
      description:
        "With Adaptmate you can use AI-powered tools to uncover actionable insights for better teaching and learning.",
    },
    {
      icon: `${Native}`,
      title: "Native Language Support",
      description:
        "Adaptmate adapts to your needs—in the language you're most comfortable with. For a truly personalized experience",
    },
  ];

  return (
    <div className="flex relative flex-col justify-center items-center px-20 py-28 w-full min-h-[621px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={Vector}
        alt="Platform background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col ml-5 w-full max-w-[1150px] max-md:max-w-full">
        <div className="mr-6 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start mt-7 max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-medium tracking-wide leading-10 text-sky-700 w-[438px]">
                  Platform That Understands You
                </div>
                <div className="mt-3.5 text-lg font-semibold tracking-normal leading-relaxed text-cyan-900">
                  Intelligent, Intuitive, Secure
                </div>
                <div className="self-stretch mt-2.5 text-lg tracking-normal leading-8 text-black max-md:max-w-full">
                  Delivering personalized insights, native language options, and
                  robust security for seamless learning.
                </div>
                <button className="self-start px-12 py-2.5 mt-10 text-lg font-medium text-blue-300 bg-sky-700 rounded-xl max-md:px-5">
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10">
                <div className="max-md:mr-1">
                  <FeatureCard {...features[0]} />
                </div>
                <div className="mt-8">
                  <FeatureCard {...features[1]} />
                </div>
                <div className="mt-8">
                  <FeatureCard {...features[2]} />
                </div>
                <div className="mt-8">
                  <FeatureCard {...features[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
