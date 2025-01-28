import React from "react";
import { FaTrophy, FaRegLightbulb } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

const features = [
  { value: "200+", label: "Positive Expected Value (+EV) Bets" },
  { value: "50+", label: "Multiple Race Everyday" },
  { value: "99+", label: "Arbitrage Bets" },
  { value: "999+", label: "Recommended Tips everyday" },
];

const FeatureSection = () => {
  return (
    <section className="flex min-h-screen w-full flex-col justify-center bg-gradient-to-t from-white to-[#F6F1FB] py-8 sm:py-12 s1100:py-16">
      <div className="mx-auto mb-8 w-full px-4 text-center md:w-2/3">
        <h2 className="mb-6 text-4xl font-bold sm:mb-8 md:text-5xl s1100:mb-10">
          Unlock your betting potential with industry-leading tools.
        </h2>
        <p className="px-2 text-lg text-gray-700 sm:px-4 s1100:px-6">
          You get a betting feature, you get a betting feature, everyone gets a
          betting feature! The Dabble app is stuffed with so many features,
          youll be as entertained as a cat playing with a laser pointer.
        </p>
      </div>
      <div className="mx-auto mt-6 flex w-full flex-col items-center justify-center space-y-6 px-4 sm:mt-8 sm:space-y-8 s1100:w-10/12">
        <div className="flex w-full flex-wrap justify-center gap-6 max-s1100:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full rounded-lg border bg-white py-4 shadow-md max-s1100:w-[45%] sm:mt-10 sm:pl-10 s1100:w-[23%]"
            >
              <h3 className="border-b py-4 text-center text-3xl font-semibold sm:py-6 sm:text-6xl s1100:text-6xl">
                {feature.value}
              </h3>
              <div className="flex items-start justify-start gap-2 px-2 sm:px-4 s1100:px-6">
                <IoCheckmark
                  size={25}
                  className="my-8 min-h-6 min-w-6 text-action_ll1 max-s1100:my-10"
                />
                <p className="sm text-wrap py-6 text-Sub_Dark_color max-s1100:py-10">
                  {feature.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="h-px w-11/12 my-0 py-0 bg-gray-300"></div> */}

        {/* <Separator className="w-11/12 py-0 my-0" /> */}
        <div className="flex w-full flex-col items-center justify-center border-t border-Subtle_dark_2">
          <div className="h-10 w-px bg-Subtle_dark_2"></div>

          <div className="flex flex-col rounded-md border sm:flex-row">
            <button className="flex items-center border-b px-3 py-2 sm:border-b-0 sm:border-r sm:px-4">
              <FaTrophy className="mr-2 text-action_ll1" /> Best Top Tipper
            </button>
            <button className="flex items-center border-b px-3 py-2 sm:border-b-0 sm:border-r sm:px-4">
              <FaRegLightbulb className="mr-2 text-action_ll1" /> Free Tips
            </button>
            <button className="flex items-center px-3 py-2 sm:px-4">
              <FaRegLightbulb className="mr-2 text-action_ll1" /> Free Tips
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
