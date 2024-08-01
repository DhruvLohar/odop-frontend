"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Demo } from "@/components/demo"

const formSchema = z.object({ "purpose": z.string().min(20) })

export default function BookingForRentalMachine({ params }) {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            purpose: "",
        },
    })

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <div className="min-h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full">
                <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-2">Book Now.</h1>
                <p className='text-center text-slate-400 mb-6'>Fill the form below to book the machine.</p>

                <Form {...form}>
                    <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        <FormField
                            control={form.control}
                            name="purpose"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Purpose of Renting</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Purpose" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Tell us inshort the purpose of you booking this machine for rent
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="w-full my-6">
                            <h1 className="text-xl font-semibold mb-2">Select a slot</h1>
                            <p className='text-sm text-slate-400 mb-6'>You can select slots for booking your machine and the time slots marked in red are already booked and the slots in green are pending bookings requests.</p>

                            <Demo />
                        </div>

                        <Button type="submit">Submit</Button>
                    </form>

                </Form>
            </div>
        </div>
    )
}