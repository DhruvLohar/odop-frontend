"use client";

import React, { useState } from "react";
import { IndianRupee } from "lucide-react";

const Page = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "WoodenCraft",
      price: 56,
      quantity: 1,
      seller: "Mr. John Doe",
      image: "/districtArtisanImage1.png",
    },
    {
      id: 2,
      name: "SteelCraft",
      price: 44,
      quantity: 1,
      seller: "Mr. Sahil Doe",
      image: "/districtArtisanImage2.png",
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <main className="flex min-h-screen md:min-w-full md:w-3/5 md:px-4 px-5 flex-col md:flex-row mb-14 text-gray-900">
        <div className="w-full top-0 md:w-1/2 md:mt-0 md:mr-5">
          <div className="header mb-6 md:mb-10">
            <h1 className="mb-2 text-3xl md:text-4xl font-black">Cart</h1>
            <p className="text-sm">
              Your Cart: Save, Review, and Checkout with Ease!
            </p>
          </div>

          <div className="cart-details">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500">
                Your cart is empty.
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex items-start lg:mb-12 lg:flex-row lg:justify-center flex-col"
                >
                  <div className="flex items-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-xl object-cover"
                    />
                    <div className="gap-2 ml-8 flex flex-col mr-auto">
                      <div className="flex items-center font-bold text-xl">
                        <span>
                          <IndianRupee size={16} strokeWidth={3} />
                        </span>
                        {item.price}
                      </div>
                      <div className="font-bold text-lg">{item.name}</div>
                      <div className="flex items-center justify-between">
                        <h1 className="text-sm">Seller : {item.seller}</h1>
                      </div>
                    </div>
                  </div>

                  <div className="px-1 w-full md:w-auto flex flex-row mb-6 md:flex-col justify-between md:mt-0 mt-2 lg:ml-auto">
                    <div
                      className="flex justify-center font-light items-center cursor-pointer"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </div>
                    <div className="flex justify-center items-center ">
                      <h1
                        className="cursor-pointer"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </h1>
                      <h1 className="mx-5">{item.quantity}</h1>
                      <h1
                        className="cursor-pointer"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </h1>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="hidden md:block w-[0.5px] h-80 bg-black mx-14"></div>

        <div className="w-full md:w-1/3 md:pl-10 mt-12 md:mt-0 justify-start gap-10 flex flex-col">
          <h1 className="font-bold text-3xl">Calculated Costing</h1>
          <div className="w-full mt-2">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-md">Subtotal (with discount)</h1>
              <div>₹{calculateTotal()}</div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-md">Shipping</h1>
              <span>FREE</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold">Order Total</h1>
              <div>₹{calculateTotal()}</div>
            </div>
          </div>
          <div
            className={`w-full h-16 rounded-full flex justify-center items-center ${
              cartItems.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-700"
            }`}
          >
            <h1 className="text-white text-xl">
              {cartItems.length === 0 ? "Checkout (Disabled)" : "Checkout"}
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
