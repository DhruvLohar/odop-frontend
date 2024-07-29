"use client";
import React, { useState } from "react";
import ProductCarousel from "@/components/custom/ProductCarousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IndianRupee, ShoppingCart } from "lucide-react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Link from "next/link";

// Dummy data
const products = [
  {
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque nisi laudantium placeat perferendis dignissimos architecto unde magnam sunt debitis!",
    details: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
    ],
    artisan: {
      name: "Mr. John Doe",
      profileImage: "/artisanProfileImage1.png",
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, tenetur reprehenderit provident impedit optio delectus voluptates",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage2.png",
        "/artisanProfileImage3.png",
        "/artisanProfileImage1.png",
      ],
    },
    price: 500,
  },
  {
    title: "Product 2",
    description: "Different product description here.",
    details: [
      "Another detail 1.",
      "Another detail 2.",
      "Another detail 3.",
      "Another detail 4.",
    ],
    artisan: {
      name: "Ms. Jane Doe",
      profileImage: "/artisanProfileImage2.png",
      about: "Another artisan's description.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage2.png",
        "/artisanProfileImage3.png",
        "/artisanProfileImage1.png",
      ],
    },
    price: 700,
  },
  // Add more products as needed
];

const filterArray = ["Product Details", "About Artisan"];

function Page({ params }) {
  const title = decodeURIComponent(params.slug);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const product = products.find((product) => product.title === title);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main>
      <center className="h-fit w-full p-5">
        <section className="flex flex-col w-full space-y-4 items-start justify-center">
          <ProductCarousel />
        </section>
        <section className="flex flex-col w-full py-5 space-y-2">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-left w-full">
            {product.title}
          </h2>
          <p className="text-sm text-justify font-light text-gray-600">
            {product.description}
          </p>
        </section>
        <section className="flex flex-col w-full">
          <div
            className="relative w-full flex justify-start items-center space-x-2 py-4"
            style={{ boxShadow: "inset rgb(199 195 195) 0px -2px 0px" }}
          >
            {filterArray.map((filter, index) => (
              <div key={index}>
                <button
                  className="text-m h-full font-bold content-center flex flex-col items-center px-3"
                  onClick={() => handleClick(index)}
                >
                  {filter}
                  <span
                    className={`absolute w-[9rem] h-[3px] bottom-0 ${
                      index === activeIndex ? "bg-blue-900" : ""
                    }`}
                  ></span>
                </button>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col pb-20 w-full space-y-4">
          {activeIndex === 0 ? (
            <>
              <div className="flex flex-col space-y-4 py-4 text-left text-gray-500">
                <p className="font-base text-justify">{product.description}</p>
                <ul className="list-disc pl-5">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col w-full space-y-4">
                <Carousel opts={{ dragFree: true }}>
                  <CarouselContent className="w-full flex space-x-2 px-2 justify-start items-center">
                    {[...Array(4)].map((_, index) => (
                      <div
                        className="flex flex-col h-fit w-[80vw] lg:w-[65vh] rounded-xl lg:mx-20 bg-white p-6 border-2 space-y-4 border-gray-300 shrink-0"
                        key={index}
                      >
                        <div className="w-full h-fit flex justify-start items-center space-x-4">
                          <Avatar className="h-14 w-14">
                            <AvatarImage src={product.artisan.profileImage} />
                          </Avatar>
                          <h2 className="text-2xl font-semibold text-gray-700 content-end">
                            {product.artisan.name}
                          </h2>
                        </div>
                        <p className="text-sm h-full w-full text-left text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam harum nemo qui corrupti quasi culpa
                          officiis, provident commodi vero hic.
                        </p>
                      </div>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="flex flex-col space-y-4 py-4">
                  <h3 className="scroll-m-20 text-lg font-bold tracking-tight text-left w-full text-gray-700">
                    Other Artisans Selling The Same Product
                  </h3>
                  <div className="flex space-x-2 justify-start items-center w-full">
                    {product.artisan.otherArtisans.map((artisan, index) => (
                      <Avatar className="h-14 w-14" key={index}>
                        <AvatarImage src={artisan} />
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex space-x-6 justify-between items-center py-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={product.artisan.profileImage} />
                </Avatar>
                <div className="flex flex-col w-[75%] text-left px-2 justify-start items-start">
                  <h3 className="text-2xl font-semibold tracking-tight text-left w-full text-gray-900">
                    {product.artisan.name}
                  </h3>
                  <p className="w-full text-pretty text-sm text-gray-500">
                    {product.artisan.about}
                  </p>
                </div>
              </div>
              <Link
                className=" py-4 bg-blue-950 text-white text-xl font-bold align-middle rounded-2xl"
                href={`/productArtisan/${product.artisan.name}`}
              >
                Visit Profile
              </Link>
            </>
          )}
        </section>
      </center>
      <footer className="fixed bottom-0 w-full h-fit flex justify-between items-center bg-blue-950 p-5 text-white rounded-t-3xl">
        <span className="flex text-2xl font-bold items-center w-fit">
          <IndianRupee />
          {product.price}
        </span>
        <span className="flex text-2xl font-bold items-center space-x-2">
          <Button className="bg-white rounded-3xl p-2">
            <ShoppingCart color="#10274E" />
          </Button>
          <Button className="bg-white rounded-3xl px-6 text-blue-950 text-sm font-bold">
            Buy Now
          </Button>
        </span>
      </footer>
    </main>
  );
}

export default Page;
