"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarIcon } from "lucide-react"
import { Input } from "@/components/ui/input";

import { format } from "date-fns"
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMemo, useState } from "react";
import { States, StatesAndDistrict } from "@/lib/stateDistrictData";
import { cn } from "@/lib/utils";

const ACCEPTED_IMAGE_TYPES = ['png', 'jpeg', 'jpg'];

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    contact_number: z.string().length(10),
    state: z.string(),
    district: z.string().optional(),
    gender: z.string().optional(),
    dob: z.date().optional(),
    address: z.string().optional(),
    disability: z.boolean().optional(),
    adhaar_card: z
        .any()
        .refine((files) => files?.[0]?.size <= 2 * 1024 * 1024, `Max image size is 2MB.`),
    pan_card: z
        .any()
        .refine((files) => files?.[0]?.size <= 2 * 1024 * 1024, `Max image size is 2MB.`)
});

export default function RegisterArtisan() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedState, setSelectedState] = useState("");
    const [date, setDate] = useState(new Date())

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            contact_number: "",
            state: "",
            district: "",
            gender: "",
            dob: "",
            address: "",
            disability: false,
            adhaar_card: "",
            pan_card: "",
        },
    });

    const formOptions = useMemo(() => {
        const item = StatesAndDistrict.find(item => item.state === selectedState);
        return item ? item.districts : [];
    }, [selectedState]);

    const handleStateChange = (value) => {
        setSelectedState(value);
        form.setValue("state", value);
        form.setValue("district", ""); // Reset district when state changes
    };

    function handleDatePicker(value) {
        setDate(value)
        form.setValue("date", value)
    }

    function onSubmit(values) {
        // Handle final form submission
        console.log(values);
    }

    return (
        <main className="h-screen flex flex-col items-center justify-around py-8 px-6">
            <Image
                src={"/odopLogo.png"}
                width={200}
                height={100}
                className="mb-8"
            />

            <div className="w-full flex flex-col items-start">
                <h4 className="scroll-m-20 text-slate-400 text-2xl font-semibold tracking-tight mb-4">
                    {currentStep < 3 ? `0${currentStep}` : "03"}
                </h4>
                <h1 className="scroll-m-20 text-3xl mb-2 font-semibold tracking-tight lg:text-5xl">
                    {currentStep === 1 ? "Personal Information" : currentStep === 2 ? "Additional Details" : "Documents"}
                </h1>
                <p className="text-md text-slate-500 mb-8">
                    {currentStep === 1 && "Fill in your basic details below."}
                    {currentStep === 2 && "Provide additional information about yourself."}
                    {currentStep === 3 && "Upload the required documents."}
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
                        {currentStep === 1 && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="contact_number"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Contact Number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}

                        {currentStep === 2 && (
                            <>
                                <FormField
                                    name="state"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Select
                                                    onValueChange={handleStateChange}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select State" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Select State</SelectLabel>
                                                            {States.map((item, i) => (
                                                                <SelectItem key={i} value={item}>{item}</SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="district"
                                    control={form.control}
                                    render={(field) => (
                                        <FormItem>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    disabled={!selectedState}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select District" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Select District</SelectLabel>
                                                            {formOptions.map(district => (
                                                                <SelectItem key={district} value={district}>{district}</SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={(field) => (
                                        <FormItem>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select Gender" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Select Gender</SelectLabel>
                                                            <SelectItem value={"male"}>Male</SelectItem>
                                                            <SelectItem value={"female"}>Female</SelectItem>
                                                            <SelectItem value={"other"}>Other</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="dob"
                                    render={({ onChange, value }) => (
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[280px] justify-start text-left font-normal",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={handleDatePicker}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder="Address" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="disability"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center justify-between">
                                            <FormLabel>Disability</FormLabel>
                                            <FormControl>
                                                <Input type="checkbox" {...field} className="w-6 h-6" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}

                        {currentStep === 3 && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="adhaar_card"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type="file" accept=".jpg,.jpeg,.png" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="pan_card"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type="file" accept=".jpg,.jpeg,.png" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}

                        <div className="flex justify-between mt-8">
                            {currentStep > 1 && (
                                <Button
                                    type="button"
                                    onClick={() => setCurrentStep((prev) => prev - 1)}
                                >
                                    Previous
                                </Button>
                            )}
                            {currentStep < 3 ? (
                                <Button
                                    type="button"
                                    onClick={() => setCurrentStep((prev) => prev + 1)}
                                >
                                    Next
                                </Button>
                            ) : (
                                <Button type="submit">Submit</Button>
                            )}
                        </div>
                    </form>
                </Form>
            </div>
        </main>
    );
}
