import * as React from "react";
import FooterPng from "../../assets/Footer.png";

export function NewsletterForm() {
  return (
    <div className="flex flex-col">
      <div className="pr-14 text-lg font-semibold leading-loose text-white bg-blend-normal h-[26px] max-md:pr-5 max-md:pb-24">
        Subscribe to our newsletter
      </div>
      <form className="flex flex-col mt-5 max-w-full text-lg leading-none rounded-none text-zinc-300 w-[272px]">
        <div className="flex gap-5 justify-between py-1.5 pr-1.5 pl-3.5 bg-white border border-black border-solid rounded-[70px]">
          <label htmlFor="emailInput" className="sr-only">Enter your email</label>
          <input
            type="email"
            id="emailInput"
            placeholder="Enter your email here"
            className="my-auto bg-transparent border-none outline-none"
            required
          />
          <button
            type="submit"
            aria-label="Submit email subscription"
            className="flex items-center justify-center"
          >
            <img
              loading="lazy"
              src={FooterPng}
              alt=""
              className="object-contain shrink-0 rounded-full aspect-square bg-blue-950 h-[30px] w-[30px]"
            />
          </button>
        </div>
      </form>
    </div>
  );
}