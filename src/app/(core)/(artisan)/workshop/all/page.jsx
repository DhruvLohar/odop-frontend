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

const workshopData = [
  {
    title: "Workshop Title 1",
    description:
      "Description for Workshop Title 1. This workshop will focus on various techniques and skills.",
    address: "1 Workshop Street, City 1",
    date: "2024-01-01",
    workshop_level: "Beginner",
    tags: ["pottery", "beginner", "basics"],
    organizer: "Craft Guild",
    price: 100,
    is_conducted_by_artisan: true,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
  {
    title: "Workshop Title 2",
    description:
      "Description for Workshop Title 2. This workshop will focus on various techniques and skills.",
    address: "2 Workshop Street, City 2",
    date: "2024-02-02",
    workshop_level: "Intermediate",
    tags: ["weaving", "intermediate", "skills"],
    organizer: "Textile Arts Association",
    price: 150,
    is_conducted_by_artisan: true,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
  {
    title: "Workshop Title 3",
    description:
      "Description for Workshop Title 3. This workshop will focus on various techniques and skills.",
    address: "3 Workshop Street, City 3",
    date: "2024-03-03",
    workshop_level: "Advanced",
    tags: ["woodworking", "advanced", "techniques"],
    organizer: "Woodcraft Society",
    price: 200,
    is_conducted_by_artisan: false,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
  {
    title: "Workshop Title 4",
    description:
      "Description for Workshop Title 4. This workshop will focus on various techniques and skills.",
    address: "4 Workshop Street, City 4",
    date: "2024-04-04",
    workshop_level: "Beginner",
    tags: ["jewelry", "beginner", "design"],
    organizer: "Gemcraft Association",
    price: 120,
    is_conducted_by_artisan: true,
    images: [
      "/districtArtisanImage1.png",
      "/districtArtisanImage2.png",
      "/districtArtisanImage3.png",
      "/districtArtisanImage4.png",
    ],
  },
];

export default function AllWorkshopView() {
  const userType = "artisan";

  if (userType !== "artisan") {
    return <div className="text-black">ARTISAN NAHI HAI TU BSDK</div>;
  }

  return (
    <main>
      <center className="w-full h-fit py-5">
        <section className="w-full justify-between items-center flex flex-wrap space-y-2 lg:space-y-0 py-2">
          {workshopData.map((card) => (
            <Card
              key={card.id}
              className="w-full md:w-[32%] md:my-5 bg-gray-100"
            >
              <CardContent>
                <ImageCollage individualCardData={card} />
                <Link href={`/workshop/${card.title}`}>
                  <div className="flex flex-col items-start text-left px-3 py-2">
                    <CardTitle className="scroll-m-20 text-lg font-semibold tracking-tight w-full flex justify-between items-center mb-4">
                      <p className="scroll-m-20 text-xl font-semibold tracking-tight">
                        {card.title}
                      </p>
                      <p className="scroll-m-20 text-sm font-semibold tracking-tight text-slate-400">
                        {card.date}
                      </p>
                    </CardTitle>
                    <CardDescription className="text-justify text-sm md:text-xs font-normal text-gray-600 mb-2">
                      {card.description}
                    </CardDescription>
                  </div>
                </Link>
              </CardContent>
              <CardFooter className="px-2 space-x-2">
                {card.tags.map((badge, index) => (
                  <Badge
                    key={index}
                    className="px-3 py-2 text-xs bg-gray-300 text-black"
                  >
                    {badge}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </section>
      </center>
    </main>
  );
}
