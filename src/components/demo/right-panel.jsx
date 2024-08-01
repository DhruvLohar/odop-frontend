import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useLocale } from "@react-aria/i18n";
import { availableTimes } from "./available-times";

export function RightPanel({
	date,
	weeksInMonth,
	handleChangeAvailableTime,
}) {
	const { locale } = useLocale();
	const [dayNumber, dayName] = date
		.toDate()
		.toLocaleDateString(locale, {
			weekday: "short",
			day: "numeric",
		})
		.split(" ");

	return (
		<Tabs
			defaultValue="12"
			className="flex flex-col gap-4 border-l w-[300px] pl-6"
		>
			<div className="flex justify-between items-center">
				<p
					aria-hidden
					className="flex-1 align-center font-bold text-md text-gray-12"
				>
					{dayName} <span className="text-gray-11">{dayNumber}</span>
				</p>
			</div>
			<ScrollArea
				type="always"
				className="h-full"
				style={{
					maxHeight: weeksInMonth > 5 ? "380px" : "320px",
				}}
			>
				<div className="grid gap-2 pr-3">
					{availableTimes.map((availableTime) => (
						<Button
							type="button"
							variant="outline"
							onClick={() =>
								handleChangeAvailableTime(
									availableTime["12"],
								)
							}
							key={availableTime["12"]}
						>
							{availableTime["12"]}
						</Button>
					))}
				</div>
			</ScrollArea>
		</Tabs>
	);
}
