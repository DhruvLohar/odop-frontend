import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import ProductCard from "@/components/custom/ProductCard";

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
  {
    id: 7,
    name: "Orange",
    location: "Nagpur, Maharashtra",
    price: 80,
    imageUrl: "/districtArtisanImage1.png",
  },
  {
    id: 8,
    name: "Pineapple",
    location: "Goa",
    price: 60,
    imageUrl: "/districtArtisanImage2.png",
  },
];

const ProductPage = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-center text-primary">
        <div className="flex gap-2 flex-col py-4">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-primary">
            Explore Products
          </h2>
          <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
            Variety of Products Matching your needs
          </p>
        </div>
        <div className="mr-2">
          <Select>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Select A Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Product Category</SelectLabel>
                <SelectItem value="Edibles">Edibles</SelectItem>
                <SelectItem value="Handicraft">Handicraft</SelectItem>
                <SelectItem value="Clothery">Clothery</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full justify-between xl:justify-start flex lg:flex-row items-center flex-wrap">
        {products.map((product) => (
          <div className="py-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
