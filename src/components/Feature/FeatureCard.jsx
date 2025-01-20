export default function FeatureCard({ title, description, icon }) {
    return (
      <div className="flex flex-col grow items-center text-center max-md:mt-10">
        <img loading="lazy" src={icon} alt="" className="object-contain w-16 aspect-square" />
        <div className="mt-6 text-2xl font-semibold leading-none text-sky-800">
          {title}
        </div>
        <div className="mt-4 text-lg font-medium leading-6 text-sky-800">
          {description}
        </div>
      </div>
    );
  }