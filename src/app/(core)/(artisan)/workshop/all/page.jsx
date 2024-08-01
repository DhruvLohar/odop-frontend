import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import ImageCollage from "@/components/custom/ImageCollage";

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

  const Component = ({ card }) => {
    return (
      <Card className="w-full lg:w-[31%] max-w-lg overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl content-start my-8">
        <ImageCollage individualCardData={card} />
        <div className="p-4">
          <div className="mb-4 flex items-center gap-2">
            {card.tags.map((badge) => (
              <div
                className={`rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground`}
                key={badge}
              >
                {badge}
              </div>
            ))}
          </div>
          <h3 className="mb-2 text-lg font-bold text-left">{card.title}</h3>
          <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{card.date}</span>
            <Separator orientation="vertical" className="h-4" />
            <Clock className="h-4 w-4" />
            <span>9:00 AM - 5:00 PM</span>
          </div>
          <p className="mb-4 text-muted-foreground text-xs text-justify">
            {card.description}
          </p>
          <Link href={`${card.title}`} className="w-full">
            <Button className="w-full">Register Now</Button>
          </Link>
        </div>
      </Card>
    );
  };

  return (
    <main>
      <center className="w-full h-fit py-5 text-gray-900">
        <div className="flex flex-col gap-10">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              WorkShops For You!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              Educating and Enhancing your Skills
            </p>
          </div>
        </div>
        <section className="w-full justify-between items-center flex flex-col lg:flex-row lg:flex-wrap space-y-2 lg:space-y-0 py-2">
          {workshopData.map((card) => (
            <Component card={card} key={card.title} />
          ))}
        </section>
      </center>
    </main>
  );
}
