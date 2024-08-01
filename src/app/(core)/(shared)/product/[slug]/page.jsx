"use client";
import React, { useState } from "react";
import ProductCarousel from "@/components/custom/ProductCarousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IndianRupee, ShoppingCart } from "lucide-react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Dummy data
const products = [
  {
    title: "Wood Craft",
    description:
      "This exquisite wooden sculpture is a testament to fine craftsmanship. Made from premium quality oak wood, it is a perfect addition to any home decor, embodying both elegance and cultural heritage.This exquisite wooden sculpture is a testament to fine craftsmanship. Made from premium quality oak wood, it is a perfect addition to any home decor, embodying both elegance and cultural heritage.",
    details: [
      { label: "Material", value: "Oak Wood" },
      { label: "Dimensions", value: "12 x 8 x 6 inches" },
      { label: "Weight", value: "2 kg" },
      { label: "Origin", value: "Bali, Indonesia" },
    ],
    artisan: {
      name: "Mr. John Doe",
      profileImage: "/artisanProfileImage1.png",
      about:
        "Mr. Arya is a master woodcarver with over 25 years of experience. His works are renowned for their intricate details and cultural significance, reflecting the rich heritage of Balinese art.",
      otherArtisans: [
        "/artisanProfileImage2.png",
        "/artisanProfileImage3.png",
        "/artisanProfileImage4.png",
      ],
    },
    price: 1200,
  },
  {
    title: "Wood Toy",
    description:
      "A delightful traditional wooden toy, crafted with care to bring joy to children and adults alike. Made from safe, non-toxic materials, this toy is both fun and educational.",
    details: [
      { label: "Material", value: "Pine Wood" },
      { label: "Dimensions", value: "6 x 4 x 3 inches" },
      { label: "Weight", value: "500 g" },
      { label: "Origin", value: "Kyoto, Japan" },
    ],
    artisan: {
      name: "Ms. Sakura Yamamoto",
      profileImage: "/artisanProfileImage2.png",
      about:
        "Ms. Yamamoto specializes in crafting traditional Japanese toys. Her creations are known for their durability and attention to detail, preserving the charm of old-world craftsmanship.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage3.png",
        "/artisanProfileImage4.png",
      ],
    },
    price: 300,
  },
  {
    title: "Wood Tabla",
    description:
      "This beautifully crafted wooden tabla is designed for music enthusiasts. It is made from high-quality teak wood, offering excellent sound resonance and durability.",
    details: [
      { label: "Material", value: "Teak Wood" },
      { label: "Dimensions", value: "14 x 14 x 12 inches" },
      { label: "Weight", value: "3 kg" },
      { label: "Origin", value: "Varanasi, India" },
    ],
    artisan: {
      name: "Mr. Ravi Shankar",
      profileImage: "/artisanProfileImage3.png",
      about:
        "Mr. Shankar is a skilled musician and craftsman from Varanasi, India. With a deep understanding of musical instruments, he ensures each piece delivers superior sound quality.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage2.png",
        "/artisanProfileImage4.png",
      ],
    },
    price: 1500,
  },
  {
    title: "Grapes",
    description:
      "Fresh, organic grapes sourced directly from local farms. These grapes are known for their sweetness and juiciness, perfect for healthy snacking or adding to your favorite dishes.",
    details: [
      { label: "Variety", value: "Thompson Seedless" },
      { label: "Weight", value: "500 g per bunch" },
      { label: "Origin", value: "Nashik, India" },
      { label: "Organic", value: "Yes" },
    ],
    artisan: {
      name: "Mr. Ajay Kumar",
      profileImage: "/artisanProfileImage4.png",
      about:
        "Ajay Kumar is a dedicated farmer from Nashik, India, specializing in organic grape cultivation. His commitment to sustainable farming practices ensures the highest quality produce.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage2.png",
        "/artisanProfileImage3.png",
      ],
    },
    price: 120,
  },
  {
    title: "Orange",
    description:
      "Juicy and tangy oranges, perfect for refreshing juices or as a healthy snack. These oranges are handpicked to ensure the best quality and flavor.",
    details: [
      { label: "Variety", value: "Nagpur Oranges" },
      { label: "Weight", value: "1 kg per dozen" },
      { label: "Origin", value: "Nagpur, India" },
      { label: "Organic", value: "Yes" },
    ],
    artisan: {
      name: "Ms. Lata Sharma",
      profileImage: "/artisanProfileImage5.png",
      about:
        "Lata Sharma is a passionate farmer from Nagpur, India, known for her expertise in cultivating high-quality oranges. She follows organic farming practices to ensure fresh and healthy produce.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage2.png",
        "/artisanProfileImage3.png",
      ],
    },
    price: 80,
  },
  {
    title: "Pineapple",
    description:
      "Sweet and tangy pineapples grown in the tropical climate of Goa. These pineapples are perfect for enjoying fresh or adding to your favorite recipes.",
    details: [
      { label: "Variety", value: "Queen Pineapple" },
      { label: "Weight", value: "1.5 kg each" },
      { label: "Origin", value: "Goa, India" },
      { label: "Organic", value: "Yes" },
    ],
    artisan: {
      name: "Mr. Rajesh Naik",
      profileImage: "/artisanProfileImage6.png",
      about:
        "Rajesh Naik is an experienced farmer from Goa, India, specializing in pineapple cultivation. His dedication to organic farming ensures the best quality fruits with rich flavor.",
      otherArtisans: [
        "/artisanProfileImage1.png",
        "/artisanProfileImage2.png",
        "/artisanProfileImage3.png",
      ],
    },
    price: 60,
  },
];

const filterArray = ["Product Details", "About Artisan"];

function Page({ params }) {
  const title = decodeURIComponent(params.slug);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const product = products.find((product) => product.title === title);
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main>
      <center className="h-fit w-full text-gray-900">
        <section className="flex flex-col lg:flex-row w-full lg:pb-16 space-y-4 lg:space-x-4  items-start lg:items-start justify-center lg:justify-start">
          <ProductCarousel />
          <div className="flex justify-center flex-col space-y-3">
            <div>
              <h2 className="scroll-m-20 text-sm lg:text-base font-extralight  lg:font-light text-left w-full">
                Category : Edibles
              </h2>
              <h2 className="scroll-m-20 text-3xl lg:text-4xl font-semibold  lg:font-bold tracking-tight text-left w-full ">
                {product.title}
              </h2>
            </div>
            <span className="hidden lg:flex text-2xl font-bold items-center justify-start w-full">
              <IndianRupee size={30} strokeWidth={3} />
              <h2 className="scroll-m-20 text-3xl lg:text-3xl font-semibold  lg:font-bold tracking-tight text-left w-full">
                {product.price}
              </h2>
            </span>

            <p className="text-sm lg:text-base text-justify lg:font-m font-light text-gray-600 lg:leading-7">
              {product.description}
            </p>

            <div className="w-full hidden lg:flex space-x-2 justify-start items-center">
              <Link href={"/payments"}>
              <Button className="px-14 ">Buy Now</Button>
              </Link>
            
              <Button className="px-14 bg-white  hover:bg-gray-100 border-blue-950 border-2 text-blue-950">
                Add To Cart
              </Button>
             
              
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full">
          <div className="relative w-full flex justify-start items-center space-x-5 py-4">
            {filterArray.map((filter, index) => (
              <div key={index}>
                <button
                  className="text-m h-full font-bold content-center flex flex-col items-center lg:text-2xl"
                  onClick={() => handleClick(index)}
                >
                  {filter}
                  <span
                    className={`absolute w-[7rem] lg:w-[12rem] h-[3px] bottom-0 ${
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
                    <li key={index}>
                      <span className="font-bold">{detail.label}</span> :{" "}
                      {detail.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col w-full space-y-4">
                <h1 className="text-start text-lg lg:text-2xl text-blue-950 lg:font-semibold font-medium tracking-tight">
                  User Reviews
                </h1>
                <Carousel opts={{ dragFree: true }}>
                  <CarouselContent className="w-full flex space-x-4 p-2 justify-start items-center">
                    {[...Array(4)].map((_, index) => (
                      <div
                        className="flex flex-col w-[80vw] lg:w-[32vw] h-fit rounded-xl bg-white p-6 border-2 space-y-4 border-gray-300 shrink-0"
                        key={index}
                      >
                        <div className="w-full h-fit flex justify-start items-center space-x-4">
                          <Avatar className="h-14 w-14">
                            <AvatarImage src={product.artisan.profileImage} />
                          </Avatar>
                          <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 content-end">
                            {product.artisan.name}
                          </h2>
                        </div>
                        <p className="text-sm lg:text-base md:text-sm  w-full text-justify text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Maxime, et dolores. Praesentium magnam eius
                          assumenda debitis possimus accusantium natus animi
                          maiores quia vero aspernatur veniam, esse unde modi
                          iure temporibus.
                        </p>
                      </div>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="flex flex-col space-y-4 py-4">
                  <h3 className="scroll-m-20 text-lg lg:text-2xl text-left lg:font-semibold font-medium tracking-tight w-full text-gray-700">
                    Other Artisans Selling The Same Product
                  </h3>
                  <div className="flex space-x-6 justify-start items-center w-full">
                    {product.artisan.otherArtisans.map((artisan, index) => (
                      <Avatar className="lg:h-24 lg:w-24 w-14 h-14" key={index}>
                        <AvatarImage className="object-cover" src={artisan} />
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex space-x-6  justify-between lg:justify-start items-center py-6 lg:px-6">
                <Avatar className="h-24 w-24 lg:h-44 lg:w-44">
                  <AvatarImage src={product.artisan.profileImage} />
                </Avatar>
                <div className="flex flex-col w-[75%] text-left px-2 justify-start items-start space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-left w-full text-gray-900">
                    {product.artisan.name}
                  </h3>
                  <p className="w-full text-pretty text-sm lg:text-lg text-gray-500">
                    {product.artisan.about}
                  </p>
                  <Link
                    className=" py-2 px-12 bg-blue-950 text-white text-lg font-bold rounded-xl hidden lg:block"
                    href={`/artisan/${product.artisan.name}`}
                  >
                    Visit Profile
                  </Link>
                </div>
              </div>
              <Link
                className=" py-3 bg-blue-950 text-white text-xl font-bold align-middle rounded-2xl lg:hidden"
                href={`/artisan/${product.artisan.name}`}
              >
                Visit Profile
              </Link>
            </>
          )}
        </section>
      </center>
      <footer className="lg:hidden fixed bottom-0 w-full h-fit flex justify-between left-0 items-center bg-blue-950 p-5 text-white rounded-t-3xl">
        <span className="flex text-2xl font-bold items-center w-fit">
          <IndianRupee />
          {product.price}
        </span>
        <span className="flex text-2xl font-bold items-center space-x-2">
          <Button className="bg-white rounded-3xl p-2">
            
              <ShoppingCart color="#10274E" />
           
          </Button>
          <Link href={"/payments"}>
            <Button className="bg-white rounded-3xl px-6 text-blue-950 text-sm font-bold">
              Buy Now
            </Button>
            </Link>
        </span>
      </footer>
    </main>
  );
}

export default Page;
