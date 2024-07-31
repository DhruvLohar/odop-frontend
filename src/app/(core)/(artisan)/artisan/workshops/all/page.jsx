import React from "react";
import DistrictSearch from "@/components/custom/DistrictSearch";
import { Button } from "@/components/ui/button";
import FilterSelect from "@/components/custom/Select";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ImageCollage from "@/components/custom/ImageCollage";

const cardData = [
  {
    id: 1,
    title: "Jammu Kashmir",
    date: "29th January 2024",
    description:
      "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Wooden Toy Art", "Craftsmanship"],
  },
  {
    id: 2,
    title: "District 2",
    date: "21st March 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Pottery", "Handmade"],
  },
  {
    id: 3,
    title: "District 3",
    date: "23rd April 2024",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Textile", "Weaving"],
  },
  {
    id: 5,
    date: "4th June 2024",
    title: "Jammu Kashmir",
    description:
      "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
    badges: ["Wooden Toy Art", "Craftsmanship"],
  },
];

export default function AllWorkshopView() {
  return (
    <main>
      <center className="w-full h-fit">
        <section className="w-full justify-between items-center flex flex-wrap space-y-2 lg:space-y-0 py-2">
          {cardData.map((card) => (
            <Card
              key={card.id}
              className="w-full md:w-[32%] md:my-4 bg-gray-100"
            >
              <Link href={`/artisan/workshops/${card.title}`}>
                <CardContent>
                  <ImageCollage individualCardData={card} />
                  <div className="flex flex-col items-start text-left px-3 py-2">
                    <CardTitle className="scroll-m-20 text-lg font-semibold tracking-tight w-full flex justify-between items-center mb-4">
                      <p className="scroll-m-20 text-xl font-semibold tracking-tight">
                        {card.title}
                      </p>
                      <p className="font-semibold text-xs text-slate-400">
                        {card.date}
                      </p>
                    </CardTitle>
                    <CardDescription className="text-justify text-sm md:text-xs font-normal text-gray-600 mb-2">
                      {card.description}
                    </CardDescription>
                  </div>
                </CardContent>
                <CardFooter className="px-2 space-x-2">
                  {card.badges.map((badge, index) => (
                    <Badge
                      key={index}
                      className="px-3 py-2 text-xs bg-gray-300 text-black"
                    >
                      {badge}
                    </Badge>
                  ))}
                </CardFooter>
              </Link>
            </Card>
          ))}
        </section>
      </center>
    </main>
  );
}
