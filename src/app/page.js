import { MapPin, IndianRupee } from "lucide-react";
import { CarouselPlugin } from "@/components/custom/AutoPlayCarousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Link from "next/link";
import HomePageExplore from "@/components/custom/HomePageExplore";

// Dummy user data
const userData = {
  name: "John Doe",
  location: "Ratnagiri, Maharashtra",
  nearbyProducts: [
    {
      id: 1,
      name: "Mango",
      location: "Ratnagiri, Maharashtra",
      price: 200,
      imageUrl: "/districtArtisanImage1.png",
    },
    {
      id: 2,
      name: "Banana",
      location: "Pune, Maharashtra",
      price: 50,
      imageUrl: "/districtArtisanImage2.png",
    },
    {
      id: 3,
      name: "Apple",
      location: "Shimla, Himachal Pradesh",
      price: 150,
      imageUrl: "/districtArtisanImage3.png",
    },
    {
      id: 4,
      name: "Grapes",
      location: "Nashik, Maharashtra",
      price: 120,
      imageUrl: "/districtArtisanImage4.png",
    },
    {
      id: 5,
      name: "Orange",
      location: "Nagpur, Maharashtra",
      price: 80,
      imageUrl: "/districtArtisanImage1.png",
    },
    {
      id: 6,
      name: "Pineapple",
      location: "Goa",
      price: 60,
      imageUrl: "/districtArtisanImage2.png",
    },
  ],
  exploreCategories: {
    Edibles: [
      {
        id: 1,
        name: "Mango",
        location: "Ratnagiri, Maharashtra",
        price: 200,
        imageUrl: "/districtArtisanImage1.png",
      },
      {
        id: 2,
        name: "Banana",
        location: "Pune, Maharashtra",
        price: 50,
        imageUrl: "/districtArtisanImage2.png",
      },
      {
        id: 3,
        name: "Apple",
        location: "Shimla, Himachal Pradesh",
        price: 150,
        imageUrl: "/districtArtisanImage3.png",
      },
      {
        id: 4,
        name: "Grapes",
        location: "Nashik, Maharashtra",
        price: 120,
        imageUrl: "/districtArtisanImage4.png",
      },
    ],
    Clothing: [
      {
        id: 1,
        name: "Saree",
        location: "Chennai, Tamil Nadu",
        price: 1200,
        imageUrl: "/districtArtisanImage1.png",
      },
      {
        id: 2,
        name: "Kurta",
        location: "Delhi",
        price: 800,
        imageUrl: "/districtArtisanImage2.png",
      },
      {
        id: 3,
        name: "T-shirt",
        location: "Mumbai, Maharashtra",
        price: 500,
        imageUrl: "/districtArtisanImage3.png",
      },
      {
        id: 4,
        name: "Jeans",
        location: "Bangalore, Karnataka",
        price: 1000,
        imageUrl: "/districtArtisanImage4.png",
      },
    ],
    Handicrafts: [
      {
        id: 1,
        name: "Clay Pot",
        location: "Jaipur, Rajasthan",
        price: 300,
        imageUrl: "/districtArtisanImage1.png",
      },
      {
        id: 2,
        name: "Wooden Carving",
        location: "Mysore, Karnataka",
        price: 1500,
        imageUrl: "/districtArtisanImage2.png",
      },
      {
        id: 3,
        name: "Bamboo Basket",
        location: "Kolkata, West Bengal",
        price: 250,
        imageUrl: "/districtArtisanImage3.png",
      },
      {
        id: 4,
        name: "Terracotta Sculpture",
        location: "Guwahati, Assam",
        price: 2000,
        imageUrl: "/districtArtisanImage4.png",
      },
    ],
  },
};

export default function Home() {
  const { name, location, nearbyProducts, exploreCategories } = userData;

  return (
    <main>
      <center className="w-full h-fit">
        <section className="flex flex-col w-full px-5 space-y-2 text-left py-4">
          <h2 className="text-3xl lg:text-4xl text-blue-950 lg:font-semibold font-medium tracking-tight">
            Good Afternoon, {name}
          </h2>
          <span className="w-fit space-x-1 flex items-center">
            <MapPin color="#9ca3af" size={16} />
            <h3 className="scroll-m-20 text-lg font-normal tracking-tight text-gray-400">
              {location}
            </h3>
          </span>
          <CarouselPlugin />
        </section>
        <section className="flex flex-col w-full px-5 space-y-2 text-left">
          <h2 className="text-3xl lg:text-4xl text-blue-950 lg:font-semibold font-medium tracking-tight">
            Products Nearby
          </h2>
          <Carousel opts={{ dragFree: true }}>
            <CarouselContent className="w-full flex space-x-4 p-5">
              {nearbyProducts.map((product) => (
                <Card
                  key={product.id}
                  className="w-[46vw] lg:w-[30vw] border-none shadow-none flex-shrink-0"
                >
                  <Link href={`/product/${product.name}`}>
                    <CardHeader className="h-[20vh] lg:h-[45vh] w-full relative">
                      <Image
                        src={product.imageUrl}
                        fill={true}
                        className="object-cover rounded-lg"
                        alt={product.name}
                      />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start text-left w-full py-4 px-0 space-y-1">
                      <h4 className="scroll-m-20 text-lg lg:text-2xl font-medium tracking-tight">
                        {product.name}
                      </h4>
                      <span className="w-full space-x-1 flex items-center">
                        <MapPin color="#9ca3af" size={18} />
                        <p className="scroll-m-20 text-xs lg:text-lg font-normal tracking-tight text-gray-600">
                          {product.location}
                        </p>
                      </span>
                      <span className="w-full space-x-1 flex items-center">
                        <IndianRupee size={24} strokeWidth={2} />
                        <h2 className="scroll-m-20 text-lg lg:text-2xl font-semibold lg:font-bold tracking-tight text-left w-full">
                          {product.price}
                        </h2>
                      </span>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        <section className="flex flex-col w-full px-5 space-y-4 text-left">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl lg:text-4xl text-blue-950 lg:font-semibold font-medium tracking-tight">
              Explore
            </h2>
            <h4 className="text-xl h-fit text-left lg:text-2xl text-gray-600 lg:font-semibold font-medium">
              See More
            </h4>
          </div>
          <HomePageExplore exploreCategories={exploreCategories} />
        </section>
      </center>
    </main>
  );
}
