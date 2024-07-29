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

const districtsList = [
  { value: "district1", label: "District 1" },
  { value: "district2", label: "District 2" },
  { value: "district3", label: "District 3" },
  { value: "district4", label: "District 4" },
  { value: "district5", label: "District 5" },
];

const cityList = [
  { value: "city1", label: "City 1" },
  { value: "city2", label: "City 2" },
  { value: "city3", label: "City 3" },
  { value: "city4", label: "City 4" },
  { value: "city5", label: "City 5" },
];

const stateList = [
  { value: "state1", label: "State 1" },
  { value: "state2", label: "State 2" },
  { value: "state3", label: "State 3" },
  { value: "state4", label: "State 4" },
  { value: "state5", label: "State 5" },
];

const cardData = [
  {
    id: 1,
    title: "Jammu Kashmir",
    description:
      "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
    images: [
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
];

export default function AllDistrictView() {
  return (
    <main>
      <center className="w-full h-fit p-5">
        <section className="w-full flex justify-between space-x-4 items-center">
          <DistrictSearch districts={districtsList} />
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <Filter />
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>Choose Your Preference</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col items-start justify-center space-y-6 py-4">
                  <div className="space-x-4 flex items-center w-full">
                    <label htmlFor="name">State</label>
                    <FilterSelect
                      placeholder="Select a State"
                      label="State"
                      options={stateList}
                    />
                  </div>
                  <div className="space-x-2 flex items-center justify-center w-full">
                    <label htmlFor="username">City</label>
                    <FilterSelect
                      placeholder="Select a City"
                      label="City"
                      options={cityList}
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </section>
        <section className="w-full flex flex-col space-y-4 py-4">
          {cardData.map((card) => (
            <Card key={card.id} className="w-full bg-gray-100">
              <Link href={`/districts/${card.title}`}>
                <CardContent>
                  <div className="w-screen -translate-x-12">
                    <ImageCollage individualCardData={card} />
                  </div>
                  <div className="flex flex-col items-start text-left space-y-2">
                    <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-justify font-normal text-gray-600">
                      {card.description}
                    </CardDescription>
                  </div>
                </CardContent>
                <CardFooter className="space-x-2">
                  {card.badges.map((badge, index) => (
                    <Badge
                      key={index}
                      className="px-3 py-2 bg-gray-300 text-black"
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
