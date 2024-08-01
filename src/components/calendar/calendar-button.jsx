import { cn } from "@/lib/utils";
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useRef } from "react";

export function Button(
	props,
) {
	const ref = useRef(null);
	const { buttonProps } = useButton(props, ref);
	const { focusProps, isFocusVisible } = useFocusRing();
	return (
		<button
			type="button"
			{...mergeProps(buttonProps, focusProps)}
			ref={ref}
			className={cn(
				"p-2 rounded-lg outline-none text-gray-12",
				props.isDisabled ? "text-gray-7" : "hover:bg-gray-4 active:bg-gray-5",
				isFocusVisible && "ring-2 ring-offset-2 ring-gray-9",
			)}
		>
			{props.children}
		</button>
	);
}
