import PopOverTrigger from "./reusable/popover-trigger";

export default function ContactBtn() {
	return PopOverTrigger({
		TriggerElem: (
			<button className="nav-btn">
				<span className="glow"></span>
				<span className="nav-btn-content">Contact Us</span>
			</button>
		),
		ContentElem: (
			<>
				<a
					className="block"
					href="tel:+918825907253">
					<span className="font-normal">Contact:</span> +91-8825907253
				</a>
				<a
					className="block"
					href="mailto:hi@effectivepc.in">
					<span className="font-normal">Email:</span> build@effectivepc.in
				</a>
			</>
		),
		contentWidth: "220px",
		contentContainerClassNames:
			"flex-col bg-black/[40%] text-tw text-sm leading-loose font-light text-center",
	});
}
