"use client";
import React, { useState } from "react";
import ProductCarousel from "@/components/custom/ProductCarousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IndianRupee, ShoppingCart } from "lucide-react";

const filterArray = ["Product Details", "About Artisan"];

function page({ params }) {
  const title = decodeURIComponent(params.slug);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <main>
      <center className="h-fit w-full p-5">
        <section className="flex flex-col w-full space-y-4 items-start justify-center">
          <ProductCarousel />
        </section>
        <section className="flex flex-col w-full py-5 space-y-2">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-left w-full">
            {title}
          </h2>
          <p className="text-sm text-justify font-light text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi atque
            nisi laudantium placeat perferendis dignissimos architecto unde
            magnam sunt debitis!
          </p>
        </section>
        <section className="flex flex-col w-full">
          <div
            className="relative w-full flex justify-startr items-center space-x-2  py-4"
            style={{ boxShadow: "inset rgb(199 195 195) 0px -2px 0px" }}
          >
            {filterArray.map((filter, index) => (
              <div>
                <button
                  key={index}
                  className=" text-m h-full font-bold content-center flex flex-col items-center px-3"
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
        <section className="flex flex-col pb-20 w-full">
          {activeIndex === 0 ? (
            <div>product details</div>
          ) : (
            <>
              <div className="flex space-x-6 justify-between items-center py-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/artisanProfileImage1.png" />
                </Avatar>
                <div className="flex flex-col w-[75%] text-left px-2 justify-start items-start">
                  <h3 className="text-2xl font-semibold tracking-tight text-left w-full text-gray-900">
                    Mr. John Doe
                  </h3>
                  <p className="w-full text-pretty text-sm text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores, tenetur reprehenderit provident impedit optio
                    delectus voluptates
                  </p>
                </div>
              </div>
              <Button className="py-8 bg-blue-950 text-white text-xl font-bold align-middle rounded-2xl">
                Visit Profile
              </Button>
            </>
          )}
        </section>
      </center>
      <footer className="fixed bottom-0 w-full h-fit flex justify-between items-center bg-blue-950 p-5 text-white rounded-t-3xl">
        <span className="flex text-2xl font-bold items-center w-fit">
          <IndianRupee />
          500
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

export default page;
