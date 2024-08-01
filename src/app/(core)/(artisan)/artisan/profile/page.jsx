"use client";

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
import { logout } from "@/lib/auth";

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

export default function ArtisanProfile() {
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

                <div className="lg:ml-auto flex flex-row items-center justify-center space-x-4 ml-6">
                  <Button>View Brochure</Button>
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
        <div className="w-full mb-8 lg:text-left text-center">
          <h3 className="mb-4 scroll-m-20 text-2xl font-semibold tracking-tight">
            Product Gallery
          </h3>
          <p>Idhar product gallery</p>
        </div>
        <div className="w-full mb-8 lg:text-left text-center">
          <h3 className="mb-4 scroll-m-20 text-2xl font-semibold tracking-tight">
            More Products by Artisan
          </h3>
          <p>Idhar product cards</p>
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
  );
}
