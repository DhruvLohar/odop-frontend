import React from "react";
import DistrictSearch from "@/components/custom/DistrictSearch";
import { Button } from "@/components/ui/button";
import FilterSelect from "@/components/custom/Select";
import Image from "next/image";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Filter } from "lucide-react";

const districtsList = [
    { value: "district1", label: "District 1" },
    { value: "district2", label: "District 2" },
    { value: "district3", label: "District 3" },
    { value: "district4", label: "District 4" },
    { value: "district5", label: "District 5" },
];

const cityList = [
    { value: "city1", label: "City 1" },
    { value: "city2", label: "City 2" },
    { value: "city3", label: "City 3" },
    { value: "city4", label: "City 4" },
    { value: "city5", label: "City 5" },
];

const stateList = [
    { value: "state1", label: "State 1" },
    { value: "state2", label: "State 2" },
    { value: "state3", label: "State 3" },
    { value: "state4", label: "State 4" },
    { value: "state5", label: "State 5" },
];

export default function AllDistrictView() {
    return (
        <main>
            <center className="w-full h-fit p-5">
                <section className="w-full flex justify-between space-x-4 items-center">
                    <DistrictSearch districts={districtsList} />
                    <div>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Filter />
                            </SheetTrigger>
                            <SheetContent side="bottom">
                                <SheetHeader>
                                    <SheetTitle>Filters</SheetTitle>
                                    <SheetDescription>Choose Your Preference</SheetDescription>
                                </SheetHeader>
                                <div className="flex flex-col items-start justify-center space-y-6 py-4">
                                    <div className="space-x-4 flex items-center w-full">
                                        <label htmlFor="name">State</label>
                                        <FilterSelect
                                            placeholder="Select a State"
                                            label="State"
                                            options={stateList}
                                        />
                                    </div>
                                    <div className="space-x-2 flex items-center justify-center w-full">
                                        <label htmlFor="username">City</label>
                                        <FilterSelect
                                            placeholder="Select a City"
                                            label="City"
                                            options={cityList}
                                        />
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button type="submit">Save changes</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </section>
                <section className="w-full flex flex-col lg:flex-row space-y-4 py-4">
                    <Card className="w-full lg:w-1/3">
                        <CardContent>
                            <div className="w-full flex overflow-x-auto space-x-4 py-5 flex-shrink-0">
                                <div className="h-[30vh] w-[30vw] relative flex-shrink-0">
                                    <Image
                                        src="/districtArtisanImage1.png"
                                        fill={true}
                                        className="object-cover  rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col h-[28vh] space-y-3">
                                    <div className="h-1/2 w-[30vw] relative flex-shrink-0">
                                        <Image
                                            src="/districtArtisanImage1.png"
                                            fill={true}
                                            className="object-cover  rounded-lg"
                                        />
                                    </div>
                                    <div className="h-1/2 w-[30vw] relative flex-shrink-0">
                                        <Image
                                            src="/districtArtisanImage1.png"
                                            fill={true}
                                            className="object-cover  rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="h-[30vh] w-[40vw] relative flex-shrink-0">
                                    <Image
                                        src="/districtArtisanImage1.png"
                                        fill={true}
                                        className="object-cover  rounded-lg"
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start text-left">
                            <h4 className="scroll-m-20 text-3xl font-medium tracking-tight text-dark">
                                Jammu Kashmir
                            </h4>
                            <p className=" font-extralight text-gray-600">
                                The king, seeing how much happier his subjects were, realized
                                the error of his ways and repealed the joke tax.
                            </p>
                            <div className="flex flex-row space-x-4"></div>
                        </CardFooter>
                    </Card>
                </section>
            </center>
        </main>
    )
}