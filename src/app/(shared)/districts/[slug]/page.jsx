import ImageCollage from "@/components/custom/ImageCollage";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

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
    artisanImages: [
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
      "/artisanProfileImage3.png",
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
    ],
    productBriefData: [
      {
        id: 1,
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage1.png",
      },
      {
        id: 2,
        title: "Product 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage2.png",
      },
      {
        id: 3,
        title: "Product 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage3.png",
      },
      {
        id: 4,
        title: "Product 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage4.png",
      },
      {
        id: 5,
        title: "Product 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage1.png",
      },
    ],
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
    artisanImages: [
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
      "/artisanProfileImage3.png",
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
    ],
    productBriefData: [
      {
        id: 1,
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage1.png",
      },
      {
        id: 2,
        title: "Product 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage2.png",
      },
      {
        id: 3,
        title: "Product 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage3.png",
      },
      {
        id: 4,
        title: "Product 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage4.png",
      },
      {
        id: 5,
        title: "Product 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage1.png",
      },
    ],
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
    artisanImages: [
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
      "/artisanProfileImage3.png",
      "/artisanProfileImage1.png",
      "/artisanProfileImage2.png",
    ],
    productBriefData: [
      {
        id: 1,
        title: "Product 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage1.png",
      },
      {
        id: 2,
        title: "Product 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage2.png",
      },
      {
        id: 3,
        title: "Product 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage3.png",
      },
      {
        id: 4,
        title: "Product 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage4.png",
      },
      {
        id: 5,
        title: "Product 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/districtArtisanImage1.png",
      },
    ],
  },
];

export default function DistrictView({ params }) {
  const individualCardData = cardData.find(
    (card) => card.title === decodeURIComponent(params.slug)
  );

  return (
    <main>
      <center className="w-full h-fit p-5 space-y-4">
        <section className="w-full flex flex-col  space-y-4">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-left w-full">
            {individualCardData.title}
          </h2>
          <p className="text-left font-normal text-gray-600">
            {individualCardData.description}
          </p>
          <ImageCollage individualCardData={individualCardData} />
        </section>
        <section className="flex flex-col space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-left w-full">
            Artisans
          </h3>
          <div className="flex space-x-3 justify-evenly items-center w-full">
            {individualCardData.artisanImages
              .slice(0, 5)
              .map((artisan, index) => (
                <Avatar className="h-14 w-14" key={index}>
                  <AvatarImage src={artisan} />
                </Avatar>
              ))}
          </div>
        </section>
        <section className="w-full flex flex-col ">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-left w-full">
            Products
          </h3>
          <Carousel opts={{ dragFree: true }}>
            <CarouselContent className="w-full flex space-x-4 py-5 px-2">
              {individualCardData.productBriefData.map((item) => (
                <Card
                  key={item.id}
                  className="w-[35vw] border-none shadow-none flex-shrink-0"
                >
                  <Link href={`/product/${item.title}`}>
                    <CardHeader className="h-[20vh] w-full relative">
                      <Image
                        src={item.image}
                        fill={true}
                        className="object-cover rounded-lg"
                        alt={item.title}
                      />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start text-left w-full px-0 py-4 space-y-2">
                      <CardTitle className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-700">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-justify font-normal text-xxs text-gray-600">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
      </center>
    </main>
  );
}
