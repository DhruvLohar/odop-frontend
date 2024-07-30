import { MapPin, IndianRupee } from "lucide-react";
import { CarouselPlugin } from "@/components/custom/AutoPlayCarousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Link from "next/link";
import HomePageExplore from "@/components/custom/HomePageExplore";

export default function Home() {
  return (
    <main>
      <center className="w-full h-fit">
        <section className="flex flex-col w-full px-5 space-y-2 text-left py-4">
          <h2 className="text-3xl lg:text-4xl text-blue-950 lg:font-semibold font-medium tracking-tight ">
            Good Afternoon, User
          </h2>
          <span className="w-fit space-x-1 flex items-center">
            <MapPin color="#9ca3af" size={16} />
            <h3 className="scroll-m-20 text-lg font-normal tracking-tight text-gray-400">
              Ratnagiri, Maharashtra
            </h3>
          </span>
          <CarouselPlugin />
        </section>
        <section className="flex flex-col w-full px-5 space-y-2 text-left">
          <h2 className="text-3xl lg:text-4xl text-blue-950 lg:font-semibold font-medium tracking-tight ">
            Products Nearby
          </h2>
          <Carousel opts={{ dragFree: true }}>
            <CarouselContent className="w-full flex space-x-4 p-5">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card
                  key={`product ${index + 1}`}
                  className="w-[46vw] lg:w-[30vw] border-none shadow-none flex-shrink-0"
                >
                  <Link href={`/product/product 1`}>
                    <CardHeader className="h-[20vh] lg:h-[45vh] w-full relative">
                      <Image
                        src="/districtArtisanImage1.png"
                        fill={true}
                        className="object-cover rounded-lg"
                        alt={`product ${index + 1}`}
                      />
                    </CardHeader>
                    <CardContent className="flex flex-col items-start text-left w-full py-4 px-0 space-y-1">
                      <h4 className="scroll-m-20 text-lg lg:text-2xl font-medium tracking-tight">
                        Product {index + 1}
                      </h4>
                      <span className="w-full space-x-1 flex items-center">
                        <MapPin color="#9ca3af" size={18} />
                        <p className="scroll-m-20 text-xs lg:text-lg font-normal tracking-tight text-gray-600">
                          Ratnagiri, Maharashtra
                        </p>
                      </span>
                      <span className="w-full space-x-1 flex items-center">
                        <IndianRupee size={24} strokeWidth={2} />
                        <h2 className="scroll-m-20 text-lg lg:text-2xl font-semibold lg:font-bold tracking-tight text-left w-full">
                          {(index + 1) * 100}
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
            <h2 className="text-3xl lg:text-4xl text-blue-950 lg:font-semibold font-medium tracking-tight ">
              Explore
            </h2>
            <h4 className="text-xl h-fit   text-left lg:text-2xl text-gray-600 lg:font-semibold font-medium">
              See More
            </h4>
          </div>
          <HomePageExplore />
        </section>
      </center>
    </main>
  );
}
