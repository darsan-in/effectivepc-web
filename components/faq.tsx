"use client";
import "@/styles/neon.scss";
import { useRef, useState } from "react";
import { phone } from "./reusable/contact-info";
const FaqsCard = ({
	faqsList,
	idx,
}: {
	faqsList: { question: string; answer: string };
	idx: number;
}) => {
	const answerElRef = useRef(null);
	const [state, setState] = useState(false);
	const [answerH, setAnswerH] = useState("0px");

	const handleOpenAnswer = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		/* @ts-ignore */
		const answerElH = answerElRef.current.childNodes[0].offsetHeight;
		setState(!state);
		setAnswerH(`${answerElH + 20}px`);
	};

	return (
		<div
			className="space-y-3 mt-5 overflow-hidden"
			key={idx}
			onClick={handleOpenAnswer}>
			<h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg font-medium">
				{faqsList.question}
				{state ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 ml-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20 12H4"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 ml-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 4v16m8-8H4"
						/>
					</svg>
				)}
			</h4>
			<div
				ref={answerElRef}
				className="duration-300"
				style={state ? { height: answerH } : { height: "0px" }}>
				<div>
					<p className="text-[1.9ch]">{faqsList.answer}</p>
				</div>
			</div>
		</div>
	);
};

export default function FAQ() {
	const faqsList: { question: string; answer: string }[] = [
		{
			question: "What kind of custom PCs does Effective PC build?",
			answer:
				"We specialize in custom-built PCs tailored to both gamers and businesses. Whether you need a high-performance gaming rig or bulk computers for your office, we design systems that maximize efficiency and fit your budget.",
		},
		{
			question: "How long does it take to build and deliver a custom PC?",
			answer:
				"Our standard build and delivery time typically ranges between 7 to 14 days, depending on the complexity of your order. For bulk or enterprise-level orders, timelines may vary, but we ensure fast and reliable service.",
		},
		{
			question: "Can I customize the components of my PC?",
			answer:
				"Yes! At Effective PC, you can choose from a wide range of hardware options to customize your PC, ensuring it meets your specific needs—whether for gaming, business, or high-demand applications.",
		},
		{
			question: "Do you offer bulk PC building services for businesses?",
			answer:
				"Absolutely! We provide bulk PC building services for businesses, helping you equip your team with cost-effective, high-performance computers designed to boost productivity and save on long-term investment.",
		},
		{
			question:
				"What kind of warranty do you offer on your custom-built PCs?",
			answer:
				"We provide a manufacturer-level warranty, meaning the warranty is applicable to the individual components used in your custom-built PC. If any component has issues, we will assist you in obtaining warranty support from the manufacturer, based on the warranty period specified by each brand.",
		},
		{
			question: "How can I place an order for a custom-built PC?",
			answer: `You can place an order by filling out the form available on our website. Additionally, you can call us ( ${phone} ) directly to request a custom-built PC and discuss your specific requirements.`,
		},
		{
			question: "Why should I choose Effective PC for my custom build?",
			answer:
				"At Effective PC, we specialize in building custom PCs tailored to your exact needs, whether you're a gamer looking for high performance or a business requiring reliable systems. We focus on maximizing value and performance within your budget.",
		},
		{
			question:
				"Do you offer custom builds for both gaming and business use?",
			answer:
				"Yes, we create custom PCs for both gamers and businesses. Our gaming PCs are optimized for top performance, while our business systems focus on reliability and efficiency.",
		},
		{
			question: "What is the process for getting a custom-built PC?",
			answer:
				"We start by understanding your requirements, budget, and performance needs. From there, we design and build a PC that perfectly suits your specifications, ensuring it’s optimized for your use case.",
		},
		{
			question:
				"What kind of support do you provide after building the PC?",
			answer:
				"We provide ongoing support for all PCs we build, including hardware troubleshooting, upgrades, and performance optimizations to ensure your system runs smoothly.",
		},
		{
			question: "How does a custom PC from Effective PC save me money?",
			answer:
				"By customizing every component based on your specific needs, we eliminate unnecessary costs and ensure that every rupee is spent effectively. This results in a high-performing PC tailored to your budget.",
		},
	];

	return (
		<section
			id="faqs"
			className="leading-relaxed mx-auto px-4 md:px-8 w-full py-[7%] bg-black text-white">
			<div className="space-y-3 text-center">
				<h1 className="text-4xl font-semibold text-accent">
					Frequently Asked Questions
				</h1>
				<p className="max-w-lg mx-auto text-lg">
					Answered all frequently asked questions, Still confused? feel
					free to contact us.
				</p>
			</div>
			<div className="mt-14 max-w-2xl mx-auto px-5">
				{faqsList.map(
					(item: { question: string; answer: string }, idx: number) => (
						// eslint-disable-next-line react/jsx-key
						<FaqsCard
							key={idx}
							idx={idx}
							faqsList={item}
						/>
					),
				)}
			</div>
		</section>
	);
}
