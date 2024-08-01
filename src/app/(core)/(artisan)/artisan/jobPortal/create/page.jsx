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
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

const formSchema = z.object({
    "title": z.string(),
    "description": z.string(),
    "vacany": z.coerce.number().gte(1),
    "prerequisites": z.string().email(),
    "is_active": z.boolean()
})

export default function CreateJobPost() {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            vacany: 1,
            prerequisites: "",
        },
    })

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <div className="min-h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full">
                <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-2">Hire skilled artisans</h1>
                <p className='text-center text-slate-400 mb-6'>Fill the form below to create a new Job Post.</p>

                <Form {...form}>
                    <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Title" {...field} />
                                    </FormControl>
                                    <FormDescription>

                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Job Description" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Describe about the Job, and what are your expectations with applicants.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="vacany"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Vacany</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Vacant Seats" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Number of applications you would want to receive
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="prerequisites"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prerequisites</FormLabel>
                                    <FormControl>
                                        <Textarea type="text" placeholder="Prerequisites" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Any specific skill the applicant should have ? Write it here
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="is_active"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">List now ?</FormLabel>
                                        <FormDescription className="w-[80%] lg:w-full text-xs lg:text-sm">
                                            Enabling this would immediately list the job, or else you can change it later
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}