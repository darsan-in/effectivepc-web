import { Popover } from "@radix-ui/themes";
import { ReactElement, ReactNode } from "react";

export default function PopOverTrigger({
	TriggerElem,
	ContentElem,
	contentWidth,
	contentContainerClassNames,
}: {
	TriggerElem: ReactElement | ReactNode;
	ContentElem: ReactElement | ReactNode;
	contentWidth: string;
	contentContainerClassNames: string;
}) {
	return (
		<Popover.Root>
			<Popover.Trigger>{TriggerElem}</Popover.Trigger>
			<Popover.Content
				className={contentContainerClassNames}
				width={contentWidth}>
				{ContentElem}
			</Popover.Content>
		</Popover.Root>
	);
}
