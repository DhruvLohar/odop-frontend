"use client";
import { MapPin, IndianRupee } from "lucide-react";
import React, { useState } from "react";
const filterArray = ["Edibles", "Clothing", "Handicrafts"];
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Link from "next/link";

// Dummy data
const data = {
  Edibles: [
    {
      id: 1,
      name: "Mango",
      location: "Ratnagiri, Maharashtra",
      price: 200,
      imageUrl: "/districtArtisanImage1.png",
    },
    {
      id: 2,
      name: "Banana",
      location: "Pune, Maharashtra",
      price: 50,
      imageUrl: "/districtArtisanImage2.png",
    },
    {
      id: 3,
      name: "Apple",
      location: "Shimla, Himachal Pradesh",
      price: 150,
      imageUrl: "/districtArtisanImage3.png",
    },
    {
      id: 4,
      name: "Grapes",
      location: "Nashik, Maharashtra",
      price: 120,
      imageUrl: "/districtArtisanImage4.png",
    },
  ],
  Clothing: [
    {
      id: 1,
      name: "Saree",
      location: "Chennai, Tamil Nadu",
      price: 1200,
      imageUrl: "/districtArtisanImage1.png",
    },
    {
      id: 2,
      name: "Kurta",
      location: "Delhi",
      price: 800,
      imageUrl: "/districtArtisanImage2.png",
    },
    {
      id: 3,
      name: "T-shirt",
      location: "Mumbai, Maharashtra",
      price: 500,
      imageUrl: "/districtArtisanImage3.png",
    },
    {
      id: 4,
      name: "Jeans",
      location: "Bangalore, Karnataka",
      price: 1000,
      imageUrl: "/districtArtisanImage4.png",
    },
  ],
  Handicrafts: [
    {
      id: 1,
      name: "Clay Pot",
      location: "Jaipur, Rajasthan",
      price: 300,
      imageUrl: "/districtArtisanImage1.png",
    },
    {
      id: 2,
      name: "Wooden Carving",
      location: "Mysore, Karnataka",
      price: 1500,
      imageUrl: "/districtArtisanImage2.png",
    },
    {
      id: 3,
      name: "Bamboo Basket",
      location: "Kolkata, West Bengal",
      price: 250,
      imageUrl: "/districtArtisanImage3.png",
    },
    {
      id: 4,
      name: "Terracotta Sculpture",
      location: "Guwahati, Assam",
      price: 2000,
      imageUrl: "/districtArtisanImage4.png",
    },
  ],
};

function HomePageExplore() {
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
          {data[filterArray[activeIndex]].map((product) => (
            <Card
              key={product.id}
              className="w-[47vw] lg:w-[30vw] border-none shadow-none flex-shrink-0"
            >
              <Link href={`/product/${product.id}`}>
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
