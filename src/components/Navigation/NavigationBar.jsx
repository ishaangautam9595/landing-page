import * as React from "react";
import NavigationLink from "./NavigationLink";
import RouteList from "../../Constants/Route.constants";
import Logo from "../../assets/Logo.png";

const navigationLinks = [
  { text: "Features", url: "#" },
  { text: "Pricing", url: `${RouteList.PRICING}` },
  { text: "Contact", url: "#" },
  { text: "Help Center", url: "#" },
];

function NavigationBar() {
  return (
    <nav className="flex flex-col px-16 pb-7 w-full bg-sky-700 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between py-2 max-w-full bg-sky-700 w-[1310px] max-md:pr-5">
        <img
          loading="lazy"
          src={Logo}
          alt=""
          className="object-contain shrink-0 max-w-full aspect-[3.82] w-[272px]"
          />
        <div className="flex flex-wrap gap-3 self-start max-md:max-w-full">
          <div className="flex flex-auto gap-7 items-center my-auto text-white min-h-[20px]">
            {navigationLinks.map((link, index) => (
              <NavigationLink key={index} text={link.text} url={link.url} />
            ))}
          </div>
          <button 
      className="overflow-hidden px-2.5 py-3 text-center text-blue-300 bg-sky-800 rounded-md"
      tabIndex={0}
    >
      Book a Demo
    </button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;