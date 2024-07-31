import { MapPin, IndianRupee } from "lucide-react";
import { CarouselPlugin } from "@/components/custom/AutoPlayCarousel";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import HomePageExplore from "@/components/custom/HomePageExplore";
import ProductCard from "@/components/custom/ProductCard";

// Dummy user data
const userData = {
  name: "John Doe",
  location: "Ratnagiri, Maharashtra",
  nearbyProducts: [
    {
      id: 1,
      name: "Wood Craft",
      location: "Ratnagiri, Maharashtra",
      price: 200,
      imageUrl: "/districtArtisanImage1.png",
    },
    {
      id: 2,
      name: "Wood Toy",
      location: "Pune, Maharashtra",
      price: 50,
      imageUrl: "/districtArtisanImage2.png",
    },
    {
      id: 3,
      name: "Wood Tabla",
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
      <center className="w-full h-fit px-5">
        <section className="flex flex-col w-full px-1 lg:px-5 text-left lg:py-4">
          <h2 className="text-lg lg:text-2xl text-blue-950 lg:font-semibold font-medium tracking-tight">
            Good Afternoon, {name}
          </h2>
          <span className="w-fit space-x-1 flex items-center">
            <MapPin color="#9ca3af" size={16} />
            <h3 className="scroll-m-20 text-sm font-normal tracking-tight text-gray-400">
              {location}
            </h3>
          </span>
          <CarouselPlugin />
        </section>
        <section className="flex flex-col w-full pt-7 md:py-7 px-1 md:px-5 text-left">
          <h2 className="text-lg md:mb-3 lg:text-3xl text-blue-950 md:font-semibold font-semibold tracking-tight">
            Products Nearby
          </h2>
          <Carousel opts={{ dragFree: true }}>
            <CarouselContent className="w-full flex space-x-4 p-3">
              {nearbyProducts.map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        <section className="flex flex-col w-full px-1 md:px-5 text-left">  
          <HomePageExplore exploreCategories={exploreCategories} />
        </section>
      </center>
    </main>
  );
}
