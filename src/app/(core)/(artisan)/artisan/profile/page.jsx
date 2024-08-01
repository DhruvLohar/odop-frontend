"use client"

import ContactArtisanModal from "@/components/custom/modal/ContactArtisanModal";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AvatarFallback } from "@radix-ui/react-avatar";
import { Box, EllipsisVertical, Facebook, Instagram, List, LogOut, MapPin, PenTool, User } from "lucide-react";
import Link from "next/link";

function ProfileMenu() {

    const routes = [
        { title: "Edit Profile", Icon: User },
        { title: "My Orders", Icon: Box },
        { title: "Manage Products", Icon: PenTool },
        { title: "Wholesales Request", Icon: List },
    ]

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
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default function ArtisanProfile() {
    return (
        <main className="flex items-start justify-center space-x-6 mt-4">
            <section className="flex-[0.7]">
                <header className="relative mb-8">
                    <img
                        className="w-full h-[180px] rounded-3xl object-cover"
                        src="https://cdn.pixabay.com/photo/2022/05/08/16/54/artwork-7182495_1280.jpg" alt="linear gradient backcover" />

                    <div className="px-8">
                        <div className="absolute top-1/3">
                            <Avatar className="h-32 w-32 border-8 border-white lg:h-44 lg:w-44">
                                <AvatarImage
                                    className="object-cover"
                                    src={"https://media.istockphoto.com/id/990892396/photo/indian-farmer-holding-crop-plant-in-his-wheat-field.jpg?s=612x612&w=0&k=20&c=je5zLlBPEeFplzaSAg_hLryRy2r9AiajSBV_2dd3u_A="}
                                />
                                <AvatarFallback>DL</AvatarFallback>
                            </Avatar>
                        </div>

                        <div className="pl-52 mt-4">
                            <div className="w-full flex items-center justify-center">
                                <h1 className="scroll-m-20 mb-2 text-3xl font-extrabold tracking-tight lg:text-4xl">
                                    Suresh Mistry
                                </h1>

                                <div className="ml-auto flex items-center justify-center space-x-4">
                                    <Button>
                                        View Brochure
                                    </Button>
                                    <ContactArtisanModal />
                                    <ProfileMenu />
                                </div>
                            </div>
                            <p className="flex items-center text-md font-medium text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-2" />
                                Burari, Uttar Pradesh
                            </p>
                            <p className="mt-4 text-md font-medium">
                                <b className="text-lg mb-2">About Me</b>
                                <p className="text-muted-foreground">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                            </p>
                        </div>
                    </div>
                </header>
                <div className="w-full mb-8">
                    <h3 className="mb-4 scroll-m-20 text-2xl font-semibold tracking-tight">
                        Product Gallery
                    </h3>
                    <p>Idhar product gallery</p>
                </div>
                <div className="w-full mb-8">
                    <h3 className="mb-4 scroll-m-20 text-2xl font-semibold tracking-tight">
                        More Products by Artisan
                    </h3>
                    <p>Idhar product cards</p>
                </div>
            </section>
            <aside className="flex-[0.3] pt-4 h-full flex flex-col items-start space-y-8">
                <div>
                    <h4 className="font-bold text-lg mb-4">Connect on Social Network</h4>
                    <div className="space-y-4">
                        <Link
                            href={"https://instagram.com/instagram"}
                            className="flex items-center text-md font-medium text-muted-foreground hover:underline">
                            <Instagram className="w-4 h-4 mr-2" />
                            Instagram
                        </Link>
                        <Link
                            href={"https://instagram.com/instagram"}
                            className="flex items-center text-md font-medium text-muted-foreground hover:underline">
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
                                src={"https://media.istockphoto.com/id/990892396/photo/indian-farmer-holding-crop-plant-in-his-wheat-field.jpg?s=612x612&w=0&k=20&c=je5zLlBPEeFplzaSAg_hLryRy2r9AiajSBV_2dd3u_A="}
                            />
                            <AvatarFallback>DL</AvatarFallback>
                        </Avatar>
                        <p className="font-medium text-lg">John doe</p>
                    </div>
                </div>
            </aside>
        </main>
    )
}