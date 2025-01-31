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

const formSchema = z.object({ "about": z.string().min(1) })

export default function ApplyForJob({ params }) {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            about: "",
        },
    })

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <div className="min-h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full">
                <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-2">Job Application Form</h1>
                <p className='text-center text-slate-400 mb-6'>Fill the form below to apply for the job.</p>

                <Form {...form}>
                    <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        <FormField
                            control={form.control}
                            name="about"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>About Me</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="About Me" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Tell us about your skills, previous experience, certificates, etc ...
                                    </FormDescription>
                                    <FormMessage />
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