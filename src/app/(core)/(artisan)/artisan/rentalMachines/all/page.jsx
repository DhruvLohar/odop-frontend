import React from "react";
import MachineCard from "@/components/custom/RentalMachineCard";

const products = [
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
];

export default function AllJobPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Explore all Products</h1>
      <div className="w-full justify-start flex lg:flex-row items-center flex-wrap">
        {products.map((product) => (
          <div className="py-3" key={product.id}>
            <MachineCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
