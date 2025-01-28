"use client";
import { ComponentProps } from "react";
import { LlSlider } from "../../../components/ui/LlSlider";

export const BrandCarousel = () => {
  const settings: ComponentProps<typeof LlSlider> = {
    speed: 500,
    slidesPerView: 2.6,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 7,
      },
    },
  };

  return (
    <LlSlider {...settings}>
      {new Array(20).fill(null).map((_, index) => (
        <img
          key={index}
          className="inline"
          alt=""
          src="/img/sample-sponsor.svg"
        />
      ))}
    </LlSlider>
  );
};
