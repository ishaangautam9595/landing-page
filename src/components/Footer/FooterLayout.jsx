import * as React from "react";
import { NewsletterForm } from "./NewsLetterForm";
import { ContactInfo } from "./ContactInfo";
import Logo from "../../assets/Logo.png";

export default function FooterLayout() {
  const policies = [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
    { text: "Cookie Policy", href: "/cookies" },
  ];

  const features = [
    "Adaptive Learning Gap",
    "AI Assistant Tool",
    "Self Aware Learning",
    "Edumetric AI",
  ];

  const links = [
    { text: "About us", href: "/about" },
    { text: "Career", href: "/career" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-12 pb-4 w-full bg-sky-700 bg-blend-normal max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="w-full max-w-[1227px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-10">
                    <img
                      loading="lazy"
                      src={Logo}
                      alt="Company Logo"
                      className="object-contain max-w-full aspect-[3.82] w-[172px] h-[120px]"
                    />
                    <NewsletterForm />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start mt-2 text-lg font-medium leading-none text-blue-300 max-md:mt-10">
                    <h2 className="text-lg font-semibold leading-loose text-white">
                      Features
                    </h2>
                    {features.map((feature, index) => (
                      <a
                        key={index}
                        href={`#${feature.toLowerCase().replace(/\s+/g, "-")}`}
                        className="mt-4 hover:text-white focus:text-white"
                        tabIndex="0"
                      >
                        {feature}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow mt-2 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start text-lg font-medium leading-none text-blue-300 max-md:mt-10">
                    <h2 className="self-stretch text-lg font-semibold leading-loose text-white">
                      Company
                    </h2>
                    {links.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="mt-4 hover:text-white focus:text-white"
                        tabIndex="0"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between items-start pt-9 pr-1.5 mt-14 w-full text-lg leading-tight text-blue-300 border-t border-blue-300 max-w-[1233px] max-md:mt-10 max-md:max-w-full">
        <div>© 2024 HyggeX. All rights reserved.</div>
        <nav className="flex gap-5 font-medium">
          {policies.map((policy, index) => (
            <a
              key={index}
              href={policy.href}
              className="hover:text-white focus:text-white"
              tabIndex="0"
            >
              {policy.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
