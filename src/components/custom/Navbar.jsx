"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
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
const Navbar = () => {
  const [Open, setOpen] = useState(false);
  const userType = "artisan";
  const links = userType === "artisan" ? artisanLinks : userLinks;

  return (
    <>
      <div
        className={`w-full h-full flex justify-between px-6 py-3 sticky top-0 bg-${
          Open ? "transparent" : "white"
        } z-20`}
      >
        <Image src="/odopLogo.png" height={100} width={100} />
        <button onClick={() => setOpen((prev) => !prev)}>
          {Open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-align-justify"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`flex flex-col items-start justify-start absolute top-0 space-y-10 py-20 p-6 h-full w-full bg-black/80 z-10 ${
          Open ? "" : "hidden"
        }`}
      >
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={`text-2xl text-white font-black `}
            onClick={() => {
              setOpen((prev) => !prev);
              setActiveLink(link.url);
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
