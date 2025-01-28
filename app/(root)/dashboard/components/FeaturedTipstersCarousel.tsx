"use client";
import { SwiperRef } from "swiper/react";
import { LlSlider } from "../../../components/ui/LlSlider";
import { TipstersCard } from "./TipstersCard";
import { ComponentProps, useRef } from "react";

export const FeaturedTipstersCarousel = () => {
  /**
   * Swiper settings
   */
  const sliderSettings: ComponentProps<typeof LlSlider> = {
    speed: 500,
    spaceBetween: 8, // Equivalent to spacing between slides, if needed
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2.4,
      },

      425: {
        slidesPerView: 3.2,
      },
      768: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 8,
      },
    },
    navigation: false, // Equivalent to 'arrows: false'
  };

  const sliderRef = useRef<SwiperRef>(null);

  const next = () => {
    sliderRef.current.swiper.slideNext();
  };
  const previous = () => {
    sliderRef.current.swiper.slidePrev();
  };

  return (
    <div className="mt-6 rounded-[10px] bg-mainFont p-4 lg:px-0 lg:pr-12 lg:pt-16 2xl:mt-8">
      <div className="mb-4 flex justify-between lg:mb-14">
        <div className="text-white app-text-h4 lg:pl-[41px] lg:app-text-h2">
          Featured Tipsters
        </div>
        <div className="flex items-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 cursor-pointer text-[#657786] transition-colors hover:text-white"
            onClick={previous}
          >
            <path
              d="M11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2ZM22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11ZM11.7071 7.70711C12.0976 7.31658 12.0976 6.68342 11.7071 6.29289C11.3166 5.90237 10.6834 5.90237 10.2929 6.29289L6.29289 10.2929C5.90237 10.6834 5.90237 11.3166 6.29289 11.7071L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071C12.0976 15.3166 12.0976 14.6834 11.7071 14.2929L9.41421 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H9.41421L11.7071 7.70711Z"
              fill="currentColor"
            />
          </svg>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer text-[#657786] transition-colors hover:text-white"
            onClick={next}
          >
            <path
              d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11ZM10.2929 7.70711C9.90237 7.31658 9.90237 6.68342 10.2929 6.29289C10.6834 5.90237 11.3166 5.90237 11.7071 6.29289L15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071C9.90237 15.3166 9.90237 14.6834 10.2929 14.2929L12.5858 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H12.5858L10.2929 7.70711Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="pr-1 lg:pl-[41px]">
        <LlSlider {...sliderSettings} ref={sliderRef}>
          {new Array(12).fill(null).map((_, index) => (
            <TipstersCard key={index} />
          ))}
        </LlSlider>
      </div>
    </div>
  );
};
