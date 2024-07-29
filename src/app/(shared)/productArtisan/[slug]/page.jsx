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
  const title = decodeURIComponent(params.slug);

  const description = artisanInfo.find((artisan) => artisan.title === title);

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
        <section className="w-full h-fit flex flex-col items-center justify-center space-y-4 px-5">
          <Avatar className="h-32 w-32 relative -mt-16">
            <AvatarImage src={description.profileImage} />
          </Avatar>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight  w-full">
            {description.title}
          </h2>
          <p className="text-sm text-center text-gray-600 w-full">
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
                } border-gray-500 flex flex-col text-m font-semibold justify-center items-center h-full text-center w-1/3 py-1`}
              >
                {value}+
                <span className="text-gray-700 text-xs font-medium ">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full space-y-2">
            <Button className=" py-6 bg-blue-950 text-white text-sm font-semibold align-middle rounded-xl w-full">
              View Brochure
            </Button>
            <Button className=" py-6 bg-blue-950 text-white text-sm font-semibold align-middle rounded-xl w-full">
              Contact For WholeSale Purchase
            </Button>
          </div>
        </section>
        <section className="w-full flex flex-col p-5">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-left w-full">
            Product Gallery
          </h2>
          <ImageCollage individualCardData={description} />
        </section>
        <section className="flex flex-col w-full p-5 space-y-2">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-left w-full">
            Support The Artisan
          </h2>
          <div className="flex justify-between w-full text-left space-x-4">
            <p className="text-xs text-left text-gray-600 w-full">
              Support our artisans by donating to help them thrive
              <br />
              Every contribution makes a difference!
            </p>
            <Sheet>
              <SheetTrigger asChild>
                <ExternalLink />
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="rounded-t-[2.5rem] bg-blue-950 border-none text-white px-5"
              >
                <SheetHeader>
                  <SheetTitle className="text-white w-full text-left">
                    Support The Artisan
                  </SheetTitle>
                </SheetHeader>
                <div className="flex items-start justify-start space-x-4 py-2">
                  {tipPrices.map((tip) => (
                    <Button className="text-blue-950 bg-white rounded-full p-2 border-none flex text-xs font-bold items-center w-fit">
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
