import React from "react";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ExternalLink, IndianRupee } from "lucide-react";
import ImageCollage from "@/components/custom/ImageCollage";

const artisanInfo = [
  {
    title: "Mr. John Doe",
    profileImage: "/artisanProfileImage1.png",
    heroImage: "/artisanProfileImage1.png",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, tenetur reprehenderit provident impedit optio delectus voluptates",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    feedBacks: [
      { label: "Products Sold", value: 10 },
      { label: "Happy Customers", value: 100 },
      { label: "Happy Customers", value: 100 },
    ],
  },
  {
    title: "Ms. Jane Doe",
    profileImage: "/artisanProfileImage2.png",
    heroImage: "/artisanProfileImage2.png",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, tenetur reprehenderit provident impedit optio delectus voluptates",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    feedBacks: [
      { label: "Products Sold", value: 20 },
      { label: "Happy Customers", value: 200 },
      { label: "Happy Customers", value: 200 },
    ],
  },
];

const tipPrices = [50, 70, 90];

export default function ArtisanProfile({ params }) {
  const title = decodeURIComponent(params.id);

  const description = artisanInfo.find((artisan) => artisan.title === title);

  console.log(description)
  return (
    <main>
      <center className="w-full h-fit">
        <section className="w-full h-[25vh] lg:hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0">
            <Image
              src={description.heroImage}
              fill={true}
              className="object-cover mix-blend-overlay -z-10"
            />
          </div>
        </section>
        <section className="w-full h-fit flex flex-col lg:flex-row items-center justify-center lg:justify-evenly lg:items-start space-y-4 px-5">
          <Avatar className="h-32 w-32 relative -mt-16 lg:-mt-0 lg:h-60 lg:w-60 ">
            <AvatarImage src={description.profileImage} />
          </Avatar>
          <div className="w-full lg:w-2/3 lg:text-left lg:space-y-4 ">
            <h2 className="text-3xl lg:text-4xl text-gray-700 lg:font-bold font-semibold tracking-tight w-full">
              {description.title}
            </h2>
            <p className="text-sm  lg:text-lg text-justify text-gray-600 w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et
              expedita sequi quaerat quis quibusdam saepe ipsam repellat natus
              velit.
            </p>
            <div className="w-full  h-full flex justify-center items-start py-4">
              {description.feedBacks.map(({ label, value }, idx, arr) => (
                <div
                  key={label}
                  className={`${
                    idx < arr.length - 1 ? "border-r-[1px] " : ""
                  } border-gray-500 flex flex-col text-m lg:text-2xl lg:font-bold font-semibold justify-center items-center h-full text-center w-1/3 py-1`}
                >
                  {value}+
                  <span className="text-gray-700 text-xs font-medium lg:text-lg ">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row w-full space-y-2 lg:space-y-0 lg:space-x-5 px-12 py-5">
          <Button className=" py-6 bg-blue-950 text-white text-sm lg:text-lg font-semibold align-middle lg:rounded-lg rounded-xl w-full">
            View Brochure
          </Button>
          <Button className=" py-6 bg-blue-950 text-white text-sm lg:text-lg font-semibold align-middle lg:rounded-lg rounded-xl w-full">
            Contact For WholeSale Purchase
          </Button>
        </div>
        <section className="w-full flex flex-col p-5">
          <h2 className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight text-left w-full">
            Product Gallery
          </h2>
          <ImageCollage individualCardData={description} />
        </section>
        <section className="flex flex-col w-full p-5 space-y-2">
          <h2 className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight text-left w-full">
            Support The Artisan
          </h2>
          <div className="flex lg:flex-col lg:justify-center lg:items-start justify-between w-full text-left space-x-4 lg:space-x-0">
            <p className="text-xs text-left text-gray-600 w-full lg:text-lg">
              Support our artisans by donating to help them thrive
              <br className="lg:hidden" /> Every contribution makes a
              difference!
            </p>
            <div className="hidden lg:flex items-start justify-start space-x-4 py-2 w-full">
              {tipPrices.map((tip) => (
                <Button className="text-gray-700 bg-gray-300  rounded-full px-5 py-10 border-none flex text-xl font-bold items-center w-fit hover:text-white">
                  <IndianRupee size={24} />
                  {tip}
                </Button>
              ))}
            </div>
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <ExternalLink />
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="lg:hidden rounded-t-[2.5rem] bg-blue-950 border-none text-white px-5"
              >
                <SheetHeader>
                  <SheetTitle className="text-white w-full text-left">
                    Support The Artisan
                  </SheetTitle>
                </SheetHeader>
                <div className="flex items-start justify-start space-x-4 py-2">
                  {tipPrices.map((tip) => (
                    <Button className="text-blue-950 bg-white rounded-full p-2 border-none flex text-xs font-bold items-center w-fit hover:text-white">
                      <IndianRupee size={14} />
                      {tip}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </section>
      </center>
    </main>
  );
}