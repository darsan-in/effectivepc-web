import PopOverTrigger from "./reusable/popover-trigger";

export default function Banner() {
	const CloseBtn = ({
		onclick,
		classNames,
	}: {
		onclick: () => void;
		classNames: string;
	}) => (
		<button
			className={classNames}
			onClick={onclick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				className="w-6 h-6">
				<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
			</svg>
		</button>
	);

	const OfferAction = () =>
		PopOverTrigger({
			TriggerElem: (
				<button className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1">
					Learn more
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-5 h-5">
						<path
							fillRule="evenodd"
							d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			),
			ContentElem: (
				<>
					<CloseBtn
						classNames="absolute right-5 top-5 text-lg"
						onclick={() => {
							document.dispatchEvent(
								new KeyboardEvent("keydown", {
									key: "Escape",
									code: "Escape",
									bubbles: true,
									cancelable: true,
								}),
							);
						}}
					/>
					<p className="pb-[4%] mt-5 text-start text-[17px]">
						As part of our commitment to helping you get the best PC for
						your needs, we&apos;re offering free consultation and expert
						guidance at no additional cost. Whether you&apos;re a gamer or
						a business, we&apos;ll help you choose the perfect components
						and build the ideal system without any consultation fees.
						It&apos;s our way of ensuring you get the most value as we
						continue to grow and serve our early clients.
					</p>
					<div className="bg-gray-800 p-5 rounded-xl">
						<p className="text-[17px]">
							<span className="font-bold">Contact: </span>+91-8825907253
						</p>
						<p className="text-[17px]">
							<span className="font-bold">Email: </span>help@effectivepc.in
						</p>
					</div>
				</>
			),
			contentWidth: "auto",
			contentContainerClassNames:
				"flex-col bg-black/[90%] text-tw text-[1ch] leading-loose font-light text-center p-[5%] relative",
		});

	return (
		<div
			className="bg-[#9dc3f7]"
			id="banner">
			<div className="max-w-screen-xl mx-auto px-4 flex items-start justify-between text-black sm:items-center md:px-8 py-[0.5%]">
				<div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
					<div className="flex-none p-1.5 px-4 rounded-full bg-[#05060f] flex items-center justify-center font-medium text-sm text-tw">
						Entry Offer
					</div>
					<p className="font-medium p-2 text-[16px]">
						Free PC consultation and expert guidance to help you build the
						perfect system at no extra cost. <OfferAction />
					</p>
				</div>
				<CloseBtn
					onclick={() => {
						document.getElementById("banner")?.remove();
					}}
					classNames="p-2 rounded-lg duration-150 hover:bg-tw ring-offset-2 focus:ring"
				/>
			</div>
		</div>
	);
}
