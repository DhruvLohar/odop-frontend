"use client";

import ImageCollage from "@/components/custom/ImageCollage";
import ContactArtisanModal from "@/components/custom/modal/ContactArtisanModal";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { logout } from "@/lib/auth";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { ExternalLink, IndianRupee } from "lucide-react";

import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  Box,
  EllipsisVertical,
  Facebook,
  Instagram,
  List,
  LogOut,
  MapPin,
  PenTool,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/custom/ProductCard";
import InputForm from "@/components/custom/BuyCoffeeInput";

const tipPrices = [50, 100, 200];

function ProfileMenu() {

  const router = useRouter()

  const routes = [
    { title: "Edit Profile", Icon: User },
    { title: "My Orders", Icon: Box, url: '/artisan/manage/orders' },
    { title: "Manage Products", Icon: PenTool, url: '/artisan/manage/inventory' },
    { title: "Get in touch requests", Icon: List, url: '/artisan/manage/contact-queries' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="text-slate-600" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {routes.map((item, i) => (
            <DropdownMenuItem key={i} className="mb-2">
              <item.Icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            await logout()
            router.push("/login")
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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
    products: [
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
    products: [
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
  },
];

export default function ArtisanProfile() {

  const description = artisanInfo.find((artisan) => artisan.title === "Mr. John Doe");

  return (
    <>
      <main className=" flex items-start justify-center lg:space-x-6 mt-4 text-gray-900 ">
        <section className="xl:flex-[0.7] ">
          <header className="relative mb-8 w-full">
            <img
              className="w-full h-[180px] rounded-3xl object-cover "
              src="https://cdn.pixabay.com/photo/2022/05/08/16/54/artwork-7182495_1280.jpg"
              alt="linear gradient backcover"
            />

            <div className="lg:px-8">
              <div className="absolute top-20 lg:top-1/3 left-[25vw] md:left-[40%] lg:left-8">
                <Avatar className="h-40 w-40 border-8 border-white lg:h-44 lg:w-44">
                  <AvatarImage
                    className="object-cover"
                    src={
                      "https://media.istockphoto.com/id/990892396/photo/indian-farmer-holding-crop-plant-in-his-wheat-field.jpg?s=612x612&w=0&k=20&c=je5zLlBPEeFplzaSAg_hLryRy2r9AiajSBV_2dd3u_A="
                    }
                  />
                  <AvatarFallback>DL</AvatarFallback>
                </Avatar>
              </div>

              <div className="lg:pl-52 lg:mt-4 mt-20">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center">
                  <h1 className="scroll-m-20 mb-4 lg:mb-2 text-3xl font-extrabold tracking-tight lg:text-4xl">
                    Suresh Mistry
                  </h1>

                  <div className="lg:ml-auto flex flex-row items-center justify-center space-x-4 ml-6">
                    <Link href={"/brochure"}>
                      <Button>View Brochure</Button>
                    </Link>

                    <ContactArtisanModal />
                    <ProfileMenu />
                  </div>
                </div>
                <p className="flex items-center justify-center lg:justify-start text-md font-medium text-muted-foreground pt-4 lg:pt-0">
                  <MapPin className="w-4 h-4 mr-2" />
                  Burari, Uttar Pradesh
                </p>
                <div className="mt-4 text-md font-medium text-center lg:text-left">
                  <b className="text-lg mb-2 font-semibold">About Me</b>
                  <p className="text-muted-foreground text-md font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col justify-center items-center space-y-3 lg:hidden ">
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-lg mb-4">
                Connect on Social Network
              </h4>
              <div className="space-x-4 flex">
                <Link
                  href={"https://instagram.com/instagram"}
                  className="flex items-center text-md font-medium text-muted-foreground hover:underline"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Link>
                <Link
                  href={"https://instagram.com/instagram"}
                  className="flex items-center text-md font-medium text-muted-foreground hover:underline"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Link>
                <Link
                  href={"https://instagram.com/instagram"}
                  className="flex items-center text-md font-medium text-muted-foreground hover:underline"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Link>
              </div>
            </div>
            <section className="pb-6 w-full">
              <h4 className="font-bold text-lg mb-4 text-center">
                Similar Artisans
              </h4>
              <div className="w-full flex justify-start items-center space-x-2">
                {Array.from({ length: 3 }).map((artisan) => (
                  <div className="flex flex-col items-center justify-center w-full">
                    <Avatar className="h-20 w-20 border-white">
                      <AvatarImage
                        className="object-cover"
                        src={
                          "https://media.istockphoto.com/id/990892396/photo/indian-farmer-holding-crop-plant-in-his-wheat-field.jpg?s=612x612&w=0&k=20&c=je5zLlBPEeFplzaSAg_hLryRy2r9AiajSBV_2dd3u_A="
                        }
                      />
                      <AvatarFallback>DL</AvatarFallback>
                    </Avatar>
                    <p className="font-medium text-lg">John doe</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
        <aside className="flex-[0.3] pt-4 h-full lg:flex flex-col items-start space-y-8 hidden">
          <div>
            <h4 className="font-bold text-lg mb-4">Connect on Social Network</h4>
            <div className="space-y-4">
              <Link
                href={"https://instagram.com/instagram"}
                className="flex items-center text-md font-medium text-muted-foreground hover:underline"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Link>
              <Link
                href={"https://instagram.com/instagram"}
                className="flex items-center text-md font-medium text-muted-foreground hover:underline"
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Similar Artisans</h4>
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-4 border-white">
                <AvatarImage
                  className="object-cover"
                  src={
                    "https://media.istockphoto.com/id/990892396/photo/indian-farmer-holding-crop-plant-in-his-wheat-field.jpg?s=612x612&w=0&k=20&c=je5zLlBPEeFplzaSAg_hLryRy2r9AiajSBV_2dd3u_A="
                  }
                />
                <AvatarFallback>DL</AvatarFallback>
              </Avatar>
              <p className="font-medium text-lg">John doe</p>
            </div>
          </div>
        </aside>
      </main>
      <section className="w-full lg:py-10 flex flex-col space-y-3 lg:space-y-6">
        <h2 className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight text-left w-full">
          Product Gallery
        </h2>
        <ImageCollage individualCardData={description} />
      </section>
      <section className="w-full flex flex-col py-4 space-y-4">
        <h3 className="scroll-m-20 text-2xl font-medium tracking-tight text-center w-full lg:text-4xl">
          Products
        </h3>
        <Carousel opts={{ dragFree: true }}>
          <CarouselContent className="w-full flex space-x-4 p-2">
            {description.products.map((item) => (
              <ProductCard product={item} />
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="flex flex-col w-full p-5 md:px-10 space-y-2">
        <h2 className="scroll-m-20 text-2xl lg:text-3xl font-semibold tracking-tight text-left w-full">
          Support The Artisan
        </h2>
        <div className="flex lg:flex-col lg:justify-center lg:items-start justify-between w-full text-left space-x-4 lg:space-x-0">
          <p className="text-xs text-left text-gray-600 w-full lg:text-lg">
            Support our artisans by donating to help them thrive
            <br className="lg:hidden" /> Every contribution makes a
            difference!
          </p>
          <div className="lg:flex lg:flex-col hidden items-start w-full justify-center space-y-2">
            <div className="flex items-start justify-start space-x-4 py-2 w-full">
              {tipPrices.map((tip) => (
                <Button className="text-gray-700 bg-gray-300  rounded-full px-5 py-10 border-none flex text-xl font-bold items-center w-fit hover:text-white">
                  <IndianRupee size={24} />
                  {tip}
                </Button>
              ))}
            </div>
            <InputForm />
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <ExternalLink />
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="lg:hidden rounded-t-[2.5rem] bg-blue-950 border-none text-white px-5"
            >
              <SheetHeader>
                <SheetTitle className="text-white w-full text-left">
                  Support The Artisan
                </SheetTitle>
              </SheetHeader>
              <div className="flex items-start justify-start space-x-4 py-4">
                {tipPrices.map((tip) => (
                  <Button className="text-blue-950 bg-white rounded-full p-2 border-none flex text-xs font-bold items-center w-fit hover:text-white">
                    <IndianRupee size={14} />
                    {tip}
                  </Button>
                ))}
              </div>
              <InputForm />
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </>
  );
}
