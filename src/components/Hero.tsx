import StoreLinks from "./StoreLinks";

import Phone from "../assets/mockup.svg";
import HeroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="mt-4 relative flex h-fit max-w-7xl flex-col mx-auto items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[85vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div className="sm:w-full md:w-3/6">
        <h1 className="mx-auto mb-8 w-[12ch] text-center text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">
          Start spending the smart way
        </h1>
        <p className="mx-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">
          Take Control of Your Finances Anytime, Anywhere with kobodrop.
          Discover the Smart Way to Use Your Money!
        </p>
        <StoreLinks />
      </div>
      <div className="md:w-3/6 xl:mb-12 md:overflow-hidden">
        <img
          className="right-0 m-auto w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80"
          src={Phone}
          alt=""
        />
        <img
          className="hidden xl:flex rounded-2xl bg-blue-200 w-full h-[600px] object-cover object-left-top"
          src={HeroImg}
          alt=""
        />
      </div>
    </section>
  );
}
