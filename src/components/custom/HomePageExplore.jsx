"use client";
import { MapPin, IndianRupee } from "lucide-react";
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Link from "next/link";
import ProductCard from "./ProductCard";

// Dummy data

const filterArray = ["Edibles", "Clothing", "Handicrafts"];

function HomePageExplore({ exploreCategories }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="flex justify-between items-center py-1 lg:py-3">
        <h2 className="text-lg lg:text-3xl text-blue-950 md:font-semibold font-semibold tracking-tight">
              Explore
            </h2>
            <Link href={"/product/all/"} className="text-sm h-fit text-left md:text-base text-gray-600 cursor-pointer">
              See More
            </Link>
        </div>
      <div className="relative w-full flex justify-start items-center space-x-4">
        {filterArray.map((filter, index) => (
          <div key={index} className="flex flex-col items-start">
            <button
              className={`text-xs h-fit font-medium text-left lg:text-sm ${
                index === activeIndex ? "text-[#FAA643]" : "text-gray-600"
              }`}
              onClick={() => handleClick(index)}
            >
              {filter}
            </button>
            <span
              className={`w-10 lg:w-12 h-[2px] ${
                index === activeIndex ? "bg-[#FAA643]" : ""
              }`}
            ></span>
          </div>
        ))}
      </div>
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent className="w-full flex space-x-4 p-5">
          {exploreCategories[filterArray[activeIndex]].map((product) => (
            <ProductCard product={product}/>
          ))}
        </CarouselContent>
      </Carousel>
      </>
  );
}

export default HomePageExplore;
