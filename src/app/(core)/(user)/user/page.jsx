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
import { Card,CardContent } from "@/components/ui/card";


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
import { useRouter } from "next/navigation";
import ProductCard from "@/components/custom/ProductCard";
import InputForm from "@/components/custom/BuyCoffeeInput";
import Link from "next/link";

const tipPrices = [50, 100, 200];

function ProfileMenu() {
  const router = useRouter();

  const routes = [
    { title: "Edit Profile", Icon: User },
    { title: "My Orders", Icon: Box, url: "/artisan/manage/orders" },
    {
      title: "Manage Products",
      Icon: PenTool,
      url: "/artisan/manage/inventory",
    },
    {
      title: "Get in touch requests",
      Icon: List,
      url: "/artisan/manage/contact-queries",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Update Profile</Button>
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
            await logout();
            router.push("/login");
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
  const description = artisanInfo.find(
    (artisan) => artisan.title === "Mr. John Doe"
  );

  return (
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

                <div className="lg:ml-auto flex flex-row items-center justify-center space-x-4">
                  <ProfileMenu />
                  
                </div>
              </div>
              <p className="flex items-center justify-center lg:justify-start text-md font-medium text-muted-foreground pt-4 lg:pt-0">
                <MapPin className="w-4 h-4 mr-2" />
                Burari, Uttar Pradesh
              </p>
              <div className="mt-4 text-md font-medium text-justify lg:text-left">
                <b className="text-lg mb-2 font-semibold ">About Me</b>
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
        <div className="flex flex-col justify-center items-center mb-5 space-y-3 xl:hidden ">
          <h2 className="font-semibold text-xl">Your current orders</h2>
        <Card className="w-full max-w-sm">
      <CardContent className="grid gap-2 p-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">Order #3102</div>
          <div className="text-sm text-muted-foreground">June 23, 2022</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Seller: Acme Inc</div>
          <div className="text-sm text-muted-foreground">Sophia Anderson</div>
        </div>
        <Link href={"/ordertracking"}>
        <Button variant="outline" className="w-full">
          View order details
        </Button>
        </Link>
        
      </CardContent>
    </Card>
        </div>
        

      </section>
      <aside className="flex-[0.3] pt-4 h-full xl:flex flex-col items-start space-y-8 hidden">
        <h2 className="font-semibold">Your Current Orders</h2>
      <Card className="w-full max-w-sm">
      <CardContent className="grid gap-2 p-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">Order #3102</div>
          <div className="text-sm text-muted-foreground">June 23, 2022</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Seller: Acme Inc</div>
          <div className="text-sm text-muted-foreground">Sophia Anderson</div>
        </div>
        <Link href={"/ordertracking"}>
        <Button variant="outline" className="w-full">
          View order details
        </Button>
        </Link>
      </CardContent>
    </Card>
      </aside>
    </main>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
