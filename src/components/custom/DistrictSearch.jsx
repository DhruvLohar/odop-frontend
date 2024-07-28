"use client";
import React, { useState } from "react";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export default function DistrictSearch({ districts }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (value) => {
    setInputValue(value);
    setOpen(!!value);
  };

  const filteredDistricts = Array.isArray(districts)
    ? districts.filter((district) =>
        district.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];
  // console.log("filteredDistricts", filteredDistricts);
  return (
    <Command className="rounded-lg border border-primary">
      <CommandInput
        placeholder="search..."
        onValueChange={handleValueChange}
        className="text-xl items-center"
      />
      {
        <CommandList>
          {open &&
            filteredDistricts.length > 0 &&
            filteredDistricts.map((district) => (
              <CommandItem key={district.value} value={district.value}>
                {district.label}
              </CommandItem>
            ))}
        </CommandList>
      }
    </Command>
  );
}
