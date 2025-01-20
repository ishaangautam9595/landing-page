import * as React from "react";
import Brand1 from "../../assets/brand1.png";
import Brand2 from "../../assets/brand2.png";
import Brand3 from "../../assets/brand3.png";
import Brand4 from "../../assets/brand4.png";
import Brand5 from "../../assets/brand5.png";
import Brand6 from "../../assets/brand6.png";

const institutes = [
  {
    id: 1,
    src: `${Brand1}`,
    alt: "Institute logo",
    aspectRatio: "1.41",
    width: "170px",
  },
  {
    id: 2,
    src: `${Brand2}`,
    alt: "Institute logo",
    aspectRatio: "1.66",
    width: "70px",
  },
  {
    id: 3,
    src: `${Brand3}`,
    alt: "Institute logo",
    aspectRatio: "1.03",
    width: "70px",
  },
  {
    id: 4,
    src: `${Brand4}`,
    alt: "Institute logo",
    aspectRatio: "1.02",
    width: "70px",
  },
  {
    id: 5,
    src: `${Brand5}`,
    alt: "Institute logo",
    aspectRatio: "1.35",
    width: "70px",
  },
  {
    id: 6,
    src: `${Brand6}`,
    alt: "Institute logo",
    aspectRatio: "1.81",
    width: "70px",
  },
];

export function TrustedInstitutes() {
  return (
    <div className="flex gap-5 justify-between items-center self-stretch px-20 w-full text-lg font-bold leading-4 text-sky-700 bg-sky-100 max-md:px-5 max-md:max-w-full">
      <div className="my-2 z-10">
        Trusted by <br />
        leading Institutes
      </div>

      {institutes.map((institute) => (
        <>
            <img
              key={institute.id}
              loading="lazy"
              src={institute.src}
              // id="animation"
              alt={institute.alt}
              className={`object-contain shrink-0 self-stretch my-2 max-w-full bg-blend-normal aspect-[${institute.aspectRatio}] w-[${institute.width}]`}
              />
        </>
      ))}
      </div>
  );
}
