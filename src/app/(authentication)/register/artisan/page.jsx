"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useMemo, useState } from "react";
import stateDistrictData from "@/lib/stateDistrictData";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    contact_number: z.string().length(10),

    district: z.string(),
    state: z.string(),
})

export default function RegisterArtisan() {

    // info,  
    const [formState, setFormState] = useState("info")

    const [selectState, setSelectedState] = useState("Assam")

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            contact_number: "",
            state: "apple",
            district: "",
        },
    })

    const formOptions = useMemo(() => {
        const item = stateDistrictData.find(item => item.state === selectState)

        return item
    }, [form])

    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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
                <h1 className="scroll-m-20 text-3xl mb-2 font-semibold tracking-tight lg:text-5xl">
                    Personal Information
                </h1>
                <p className="text-md text-slate-500 mb-8">
                    {console.log(formOptions)}
                    Fill correct details below to create your account in few seconds!
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
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

                        <FormField
                            name="state"
                            control={form.control}
                            render={({ field }) => (
                                <Select {...field}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a fruit" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />

                        <FormField
                            name="district"
                            control={form.control}
                            render={({ field }) => (
                                <Select {...field}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a district" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select District</SelectLabel>
                                            {formOptions.districts.map((district => (
                                                <SelectItem key={district} value={district}>{district}</SelectItem>
                                            )))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <Button className="w-full py-6 rounded-lg text-md mt-8" type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </main>
    )
}