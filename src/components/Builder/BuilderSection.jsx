import * as React from "react";
import Bg from "../../assets/builderbg.png"

function BuilderSection() {
  return (
    <div className="flex relative flex-col justify-center items-center px-20 py-20 w-full min-h-[496px] max-md:px-5 max-md:max-w-full">
      
      <img
        loading="lazy"
        src={Bg}
        alt="Builder bg"
        className="object-cover absolute inset-0 fill-cyan-400 size-full"
      />
      <div className="flex relative flex-col items-center px-16 py-16 max-w-full rounded-2xl bg-indigo-50 bg-opacity-0 w-[571px] max-md:px-5">
        <h1 className="text-4xl text-white">Built by Educators</h1>
        <p className="self-stretch text-white	 px-px pb-3 mt-8 text-lg text-center leading-6 bg-white bg-opacity-0 max-md:max-w-full">
          We deeply value your teaching experience and created Adaptmate to make
          it even better. Your feedback is important to us and will helps us improve more!
        </p>
        <button 
          className="px-11 py-4 text-white mt-8 max-w-full font-medium leading-none bg-sky-700 rounded-sm w-[180px] max-md:px-5"
          onClick={() => {}}
          tabIndex={0}
          aria-label="Get Started"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default BuilderSection;