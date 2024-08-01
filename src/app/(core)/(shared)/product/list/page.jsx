"use client"

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMemo, useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { ProductCategories, ProductRawMaterials } from "@/lib/constants/productCategories";
import { Textarea } from "@/components/ui/textarea";

const dimensionsSchema = z.object({
  width: z.string().min(1, "Width is required"),
  length: z.string().min(1, "Length is required"),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
});

const formSchema = z.object({
  "title": z.string().min(1).max(255),
  "description": z.string().min(1).max(9999),
  "back_story": z.string().min(1).optional(),
  "price": z.coerce.number().gte(1),
  "is_customizable": z.boolean(),
  "category": z.string(),
  "raw_material": z.string()
})

export default function ListProduct() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      back_story: "",
      price: 0,
      category: "food",
    },
  })

  const formOptions = useMemo(() => {
    return ProductRawMaterials[form.getValues().category]
  }, [form.getValues().category]);

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <div className="min-h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-2">List a New Product</h1>
        <p className='text-center text-slate-400 mb-6'>Fill the form below in order to list your product on the Global Marketplace</p>

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
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your product ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="back_story"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Back Story</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Backstory" {...field} />
                  </FormControl>
                  <FormDescription>
                    Any specific back story related to this product, which you would like everyone to know about!
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="is_customizable"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Is Customizable?</FormLabel>
                    <FormDescription className="text-xs">
                      Whether the user can know or add any custom build note for this product.
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

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Product Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Product Categories</SelectLabel>
                        {ProductCategories.map((item, i) => (
                          <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="raw_material"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Raw Material</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Raw Material" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Raw Materials</SelectLabel>
                        {formOptions.map(item => (
                          <SelectItem value={item.value}>{item.label}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Raw material used as base for this product.
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
  );
};

