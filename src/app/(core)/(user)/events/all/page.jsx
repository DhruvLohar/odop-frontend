import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ImageCollage from "@/components/custom/ImageCollage";

const eventData = [
  {
    title: "Event Title 1",
    description:
      "Description for Event Title 1. This event will focus on various techniques and skills.",
    address: "1 Event Street, City 1",
    date: "2024-01-01",
    event_level: "Beginner",
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
    title: "Event Title 2",
    description:
      "Description for Event Title 2. This event will focus on various techniques and skills.",
    address: "2 Event Street, City 2",
    date: "2024-02-02",
    event_level: "Intermediate",
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
    title: "Event Title 3",
    description:
      "Description for Event Title 3. This event will focus on various techniques and skills.",
    address: "3 Event Street, City 3",
    date: "2024-03-03",
    event_level: "Advanced",
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
    title: "Event Title 4",
    description:
      "Description for Event Title 4. This event will focus on various techniques and skills.",
    address: "4 Event Street, City 4",
    date: "2024-04-04",
    event_level: "Beginner",
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
export default function AllEventView() {
  const userType = "User";

  if (userType !== "User") {
    return <div className="text-black">USER NAHI HAI TU BSDK</div>;
  }

  return (
    <main>
      <center className="w-full h-fit py-5">
        <section className="w-full justify-between items-center flex flex-wrap space-y-2 lg:space-y-0 py-2">
          {eventData.map((card) => (
            <Card
              key={card.id}
              className="w-full md:w-[32%] md:my-5 bg-gray-100"
            >
              <CardContent>
                <ImageCollage individualCardData={card} />
                <Link href={`/events/${card.title}`}>
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
