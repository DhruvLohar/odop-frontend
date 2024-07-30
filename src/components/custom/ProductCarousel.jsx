"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

export default function ProductCarousel() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const goToSlide = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Carousel setApi={setApi} className="w-full lg:w-[48vw] lg:h-[50vh]">
      <CarouselContent className="space-x-4 py-4 px-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card className="h-[35vh] lg:h-[50vh] w-[75vw] lg:w-[47vw] shrink-0 border-none shadow-none relative ">
            <Image
              src="/districtArtisanImage1.png"
              fill={true}
              className="object-cover rounded-xl"
            />
          </Card>
        ))}
      </CarouselContent>
      <div className="flex w-full space-x-3 justify-center py-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              current === index + 1 ? "bg-blue-900" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </Carousel>
  );
}
