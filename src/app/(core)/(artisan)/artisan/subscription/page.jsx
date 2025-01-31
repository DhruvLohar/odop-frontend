"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { cn } from "@/lib/utils"


const PricingHeader = ({ title, subtitle }) => (
    <section className="w-full text-center">
        <h2 className="text-xl font-bold mb-2 lg:text-3xl">{title}</h2>
        <p className="text-xs lg:text-lg text-center text-slate-500 pt-1">{subtitle}</p>
        <br />
    </section>
)

const PricingSwitch = ({ onSwitch }) => (
    <Tabs defaultValue="0" className="w-full lg:w-40 mx-auto" onValueChange={onSwitch}>
        <TabsList className="py-6 px-2">
            <TabsTrigger value="0" className="text-base">
                Monthly
            </TabsTrigger>
            <TabsTrigger value="1" className="text-base">
                Yearly
            </TabsTrigger>
        </TabsList>
    </Tabs>
)

const PricingCard = ({ isYearly, title, monthlyPrice, yearlyPrice, description, features, actionLabel, popular, exclusive }) => (
    <Card
        className={cn(`w-full lg:w-[25rem] flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`, {
            "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
                exclusive,
        })}>
        <div>
            <CardHeader className="pb-8 pt-4">
                {isYearly && yearlyPrice && monthlyPrice ? (
                    <div className="flex justify-between">
                        <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
                        <div
                            className={cn("px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white", {
                                "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ": popular,
                            })}>
                            Save ${monthlyPrice * 12 - yearlyPrice}
                        </div>
                    </div>
                ) : (
                    <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
                )}
                <div className="flex gap-0.5">
                    <h3 className="text-3xl font-bold">{yearlyPrice && isYearly ? "$" + yearlyPrice : monthlyPrice ? "$" + monthlyPrice : "Custom"}</h3>
                    <span className="flex flex-col justify-end text-sm mb-1">{yearlyPrice && isYearly ? "/year" : monthlyPrice ? "/month" : null}</span>
                </div>
                <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                {features.map((feature) => (
                    <CheckItem key={feature} text={feature} />
                ))}
            </CardContent>
        </div>
        <CardFooter className="mt-6">
            <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                {actionLabel}
            </Button>
        </CardFooter>
    </Card>
)

const CheckItem = ({ text }) => (
    <div className="flex gap-2">
        <CheckCircle2 size={18} className="my-auto text-green-400" />
        <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
    </div>
)

export default function Subscription() {
    const [isYearly, setIsYearly] = useState(false)
    const togglePricingPeriod = (value) => setIsYearly(parseInt(value) === 1)

    const plans = [
        {
            title: "Free",
            monthlyPrice: 10,
            yearlyPrice: 100,
            description: "Essential features you need to get started",
            features: [
                "Can list product in the marketplace", 
                "Access to basic AI Features",
            ],
            actionLabel: "Current Plan",
        },
        {
            title: "Pro",
            monthlyPrice: 25,
            yearlyPrice: 250,
            description: "Perfect for owners of small & medium businessess",
            features: ["Example Feature Number 1", "Example Feature Number 2", "Example Feature Number 3"],
            actionLabel: "Get Started",
            popular: true,
        },
        {
            title: "Enterprise",
            price: "Custom",
            description: "Dedicated support and infrastructure to fit your needs",
            features: ["Example Feature Number 1", "Example Feature Number 2", "Example Feature Number 3", "Super Exclusive Feature"],
            actionLabel: "Contact Sales",
            exclusive: true,
        },
    ]
    return (
        <div className="flex flex-col items-center justify-center space-y-4 py-8">
            <PricingHeader 
                title="Pricing Plans" 
                subtitle="Choose the plan that's right for you, and boost your productivity as we take your product to a new height!"
            />

            <PricingSwitch onSwitch={togglePricingPeriod} />
            <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
                {plans.map((plan) => {
                    return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
                })}
            </section>
        </div>
    )
}