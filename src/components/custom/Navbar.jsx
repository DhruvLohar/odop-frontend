"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const userType = "artisan";
  const links = userType === "artisan" ? artisanLinks : userLinks;

  return (
    <>
      <div
        className={`w-full h-full flex justify-between px-6 py-3 sticky top-0 ${
          open ? "bg-transparent" : "bg-white"
        } z-20`}
      >
        <Image src="/odopLogo.png" height={100} width={100} />
        <button onClick={() => setOpen((prev) => !prev)}>
          {open ? <X color="#ffffff" /> : <Menu />}
        </button>
      </div>
      <div
        className={`flex flex-col items-start justify-start fixed top-0 space-y-10 py-20 p-6 h-full w-full bg-black/80 z-10 ${
          open ? "" : "hidden"
        }`}
      >
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            onClick={() => {
              setOpen((prev) => !prev);
              setActiveLink(link.url);
            }}
          >
            <h2 className="scroll-m-20 text-white text-3xl font-bold tracking-tight first:mt-0">
              {link.name}
            </h2>
          </Link>
        ))}
      </div>
    </>
  );
}
