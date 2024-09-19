import "@/styles/about-card.scss";

const FeatureCard = () => (
	<div className="relative h-auto mx-auto px-4 md:px-8">
		{/* <RGBBG classNames="w-[100vw] h-[100%] left-0 top-0 z-[-2]" /> */}
		<div
			className="w-full flex pt-[15%] justify-around text-[13px]"
			id="gamer">
			<div className="card">
				<h2>For Gamers</h2>
				<ul>
					<li>
						<strong>Custom-Built for Maximum Performance:</strong> Get the
						ultimate gaming experience with PCs tailored for speed,
						graphics, and efficiency.
					</li>
					<li>
						<strong>Top-Tier Gaming Specs:</strong> We build systems
						designed to handle the most demanding games with ease.
					</li>
					<li>
						<strong>Future-Proofing:</strong> Stay ahead of the curve with
						PCs that are built to last, ready for future upgrades and new
						technologies.
					</li>
					<li>
						<strong>Tailored to Your Playstyle:</strong> Whether you need
						fast frame rates or immersive visuals, we build to match your
						specific gaming preferences.
					</li>
				</ul>
			</div>

			<div className="comp"></div>
		</div>

		<div
			className="w-full flex pt-[15%] justify-around text-[13px] pb-10"
			id="pro">
			<div className="comp"></div>

			<div className="card">
				<h2>For Businesses</h2>
				<ul>
					<li>
						<strong>Save Investment Capital:</strong> Get custom PCs built
						to your exact needs, ensuring your capital is used wisely,
						leaving more for other critical business areas.
					</li>
					<li>
						<strong>Tailored to Business Requirements:</strong> We design
						systems specifically for your operational needs, enhancing
						efficiency and scalability.
					</li>
					<li>
						<strong>Cost-Efficient Solutions:</strong> No unnecessary
						add-ons—just what your business needs for optimal performance
						and budget control.
					</li>
					<li>
						<strong>Boost Productivity:</strong> Our PCs are built for
						speed and reliability, helping your business stay productive
						and focus on growth.
					</li>
				</ul>
			</div>
		</div>
	</div>
);

export default function About() {
	return (
		<section className="max-w-screen-xl relative z-[20]">
			<div className="flex mx-auto px-4 md:px-8">
				<div className="w-[60%]">
					<div className="py-4">
						<h3
							className="text-3xl neon turquoise font-semibold md:text-5xl"
							style={{ lineHeight: "3ch" }}>
							Building Effective Custom PCs <br />
							<span className="neon pink">for Gamers and Businesses</span>
						</h3>
						<div className="leading-loose text-tw/[90%] font-light text-[1.3ch]">
							<p>
								At <strong>Effective PC</strong>, we build{" "}
								<strong>custom PCs</strong> tailored to your exact
								needs—whether you&apos;re a <strong>gamer</strong> chasing
								peak performance or a <strong>business</strong> seeking
								reliable, cost-effective systems. Our expert-built rigs{" "}
								<strong>maximize efficiency and value</strong> without the
								extra costs.
							</p>
							<p className="mt-3">
								From <strong>high-performance gaming setups</strong> to{" "}
								<strong>productivity-boosting business machines</strong>,
								we craft systems designed to deliver{" "}
								<strong>exceptional results</strong>. With Effective PC,
								you get a <strong>personalized solution</strong> that
								combines top performance with{" "}
								<strong>smart savings</strong>, ensuring you get the{" "}
								<strong>best return on your investment</strong>.
							</p>
						</div>
					</div>
					<a
						className="group px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center rgb-btn"
						href="#form">
						Try it out
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 ml-1 duration-150 group-hover:translate-x-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</a>
				</div>
			</div>

			<FeatureCard />
		</section>
	);
}
