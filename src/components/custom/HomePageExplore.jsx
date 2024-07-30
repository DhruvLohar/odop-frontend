"use client";
import { MapPin, IndianRupee } from "lucide-react";
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Link from "next/link";

// Dummy data

const filterArray = ["Edibles", "Clothing", "Handicrafts"];

function HomePageExplore({ exploreCategories }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="flex flex-col w-full">
      <div className="relative w-full flex justify-start items-center space-x-4">
        {filterArray.map((filter, index) => (
          <div key={index} className="flex flex-col items-start">
            <button
              className={`text-lg h-fit font-medium text-left lg:text-xl ${
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
            <Card
              key={product.id}
              className="w-[47vw] lg:w-[30vw] border-none shadow-none flex-shrink-0"
            >
              <Link href={`/product/Product 1`}>
                <CardHeader className="h-[20vh] lg:h-[45vh] w-full relative">
                  <Image
                    src={product.imageUrl}
                    fill={true}
                    className="object-cover rounded-lg"
                    alt={product.name}
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-start text-left w-full py-4 px-0 space-y-1">
                  <h4 className="scroll-m-20 text-lg lg:text-2xl font-medium tracking-tight">
                    {product.name}
                  </h4>
                  <span className="w-full space-x-1 flex items-center">
                    <MapPin color="#9ca3af" size={18} />
                    <p className="scroll-m-20 text-xs lg:text-lg font-normal tracking-tight text-gray-600">
                      {product.location}
                    </p>
                  </span>
                  <span className="w-full space-x-1 flex items-center">
                    <IndianRupee size={20} strokeWidth={2} />
                    <h2 className="scroll-m-20 text-lg lg:text-2xl font-semibold lg:font-bold tracking-tight text-left w-full">
                      {product.price}
                    </h2>
                  </span>
                </CardContent>
              </Link>
            </Card>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default HomePageExplore;
