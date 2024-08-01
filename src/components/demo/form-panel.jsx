import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import { UserPlus, X } from "lucide-react";
import { useRouter } from "next/navigation";

import * as React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function FormPanel() {
  const router = useRouter();

  const [guests, setGuests] = React.useState([]);

  const addGuest = () => {
    setGuests([...guests, { email: "" }]);
  };

  const removeGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  const handleChange = (index, email) => {
    setGuests(guests.map((guest, i) => (i === index ? { email } : guest)));
  };

  const hasGuests = guests.length > 0;

  return (
    <form className="flex flex-col gap-5 w-[360px]">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Your name *</Label>
        <Input id="name" defaultValue="Damián Ricobelli" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="email">Email address *</Label>
        <Input id="email" type="email" defaultValue="dricobelli@gmail.com" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="phone">Phone number *</Label>
        <Input id="phone" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="email">Additional notes</Label>
        <Textarea
          id="notes"
          placeholder="Please share anything that will help prepare for our meeting"
        />
      </div>
      {hasGuests && (
        <>
          <Label htmlFor="email">Add guests</Label>
          <div className="flex flex-col gap-1">
            {guests.map((guest, index) => (
              <div key={index} className="flex items-center space-x-2 relative">
                <Input
                  id="guest"
                  type="email"
                  placeholder="Email"
                  value={guest.email}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <X
                      className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 size-4"
                      onClick={() => removeGuest(index)}
                    />
                  </TooltipTrigger>
                  <TooltipContent>Remove email</TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </Button>
      </div>
    </form>
  );
}
