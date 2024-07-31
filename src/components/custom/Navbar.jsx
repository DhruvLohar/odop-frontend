"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Bell,BotMessageSquare } from "lucide-react";
import CartModal from "./ChatBotModal";

const userLinks = [
  { name: "My Profile", url: "/" },
  { name: "Crowd Fundings", url: "/" },
  { name: "NewsLetter", url: "/" },
  { name: "Explore Products", url: "/" },
  { name: "Bulk Orders", url: "/" },
];

const artisanLinks = [
  { name: "My Profile", url: "/" },
  { name: "My Products", url: "/" },
  { name: "Bulk Order Request", url: "/" },
  { name: "Inventory", url: "/" },
  { name: "WorkShops", url: "/" },
  { name: "Job Portal", url: "/" },
  { name: "Rental Machines", url: "/" },
  { name: "Inter District Collab", url: "/" },
  { name: "Chat Bot", url: "/" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const userType = "artisan";
  const links = userType === "artisan" ? artisanLinks : userLinks;

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartOpen]);

  return (
    <>
      <div className="w-full h-full flex justify-between items-center px-5 md:px-10 py-3 sticky top-0 bg-white z-20">
        <div className="flex items-center">
          <Image src="/odopLogo.png" height={100} width={100} alt="ODOP Logo" />
        </div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link href={link.url} key={link.url} className="text-black text-sm">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <div className="text-black px-3" onClick={() => setCartOpen(true)}>
            <BotMessageSquare />
          </div>
          <Link href={"/notification"} className="text-black text-lg">
            <Bell />
          </Link>
          <button onClick={() => setOpen((prev) => !prev)} className="ml-4 md:hidden">
            {open ? <X color="#000000" /> : <Menu />}
          </button>
        </div>
      </div>
      <div className={`fixed top-0 py-20 p-3 h-full w-full bg-black z-10 ${open ? "" : "hidden"}`}>
        {links.map((link) => (
          <div className="hover:bg-slate-950 rounded-lg w-full p-3 flex justify-start mb-1" key={link.url}>
            <Link href={link.url} onClick={() => setOpen(false)} className="text-white text-2xl font-bold">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <CartModal isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
