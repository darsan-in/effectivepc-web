import { Popover } from "@radix-ui/themes";

export default function ContactBtn() {
	return (
		<Popover.Root>
			<Popover.Trigger>
				<button className="nav-btn">
					<span className="glow"></span>
					<span className="nav-btn-content">Contact Us</span>
				</button>
			</Popover.Trigger>
			<Popover.Content
				width="220px"
				className="flex-col bg-black/[40%] text-tw text-sm leading-loose font-light text-center">
				<a
					className="block"
					href="tel:+918825907253">
					<span className="font-normal">Contact:</span> +91-8825907253
				</a>
				<a
					className="block"
					href="mailto:hi@effectivepc.in">
					<span className="font-normal">Email:</span> hi@effectivepc.in
				</a>
			</Popover.Content>
		</Popover.Root>
	);
}
