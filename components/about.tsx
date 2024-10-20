import "@/styles/about-card.scss";
import CubeSlide from "./cube-slide";

const FeatureCard = () => (
	<div className="relative h-auto mx-auto px-4 md:px-8 z-[2] bg-black">
		<div
			className="max-w-screen-2xl w-full flex flex-col lg:flex-row pb-[10%] gap-y-5 mx-auto"
			id="gamer">
			<div className="comp">
				<img
					style={{ objectFit: "cover" }}
					src="/src/gamer.jpg"
					alt="gamer playing in custom built PC by effectivepc.in, without limit"
				/>
			</div>

			<div className="card">
				<h2>For Gamers</h2>
				<ul>
					<li>
						<span>🎮</span>
						<strong>Custom-Built for Maximum Performance:</strong>
						<span>
							Get the ultimate gaming experience with PCs tailored for
							speed, graphics, and efficiency.
						</span>
					</li>
					<li>
						<span>⚙️</span>
						<strong>Top-Tier Gaming Specs:</strong>
						<span>
							We build systems designed to handle the most demanding games
							with ease.
						</span>
					</li>
					<li>
						<span>🔧</span>
						<strong>Future-Proofing:</strong>
						<span>
							Stay ahead of the curve with PCs that are built to last,
							ready for future upgrades and new technologies.
						</span>
					</li>
					<li>
						<span>🎯</span>
						<strong>Tailored to Your Playstyle:</strong>
						<span>
							Whether you need fast frame rates or immersive visuals, we
							build to match your specific gaming preferences.
						</span>
					</li>
				</ul>
			</div>
		</div>

		<div
			className="max-w-screen-2xl mx-auto w-full flex pb-[7.5%] lg:pb-0 flex-col lg:flex-row gap-y-5"
			id="pro">
			<div className="card order-2 lg:order-1">
				<h2>For Businesses</h2>
				<ul>
					<li>
						<span>💼</span>
						<strong>Save Investment Capital:</strong>
						<span>
							Get custom PCs built to your exact needs, ensuring your
							capital is used wisely, leaving more for other critical
							business areas.
						</span>
					</li>
					<li>
						<span>⚙️</span>
						<strong>Tailored to Business Requirements:</strong>
						<span>
							We design systems specifically for your operational needs,
							enhancing efficiency and scalability.
						</span>
					</li>
					<li>
						<span>💰</span>
						<strong>Cost-Efficient Solutions:</strong>
						<span>
							No unnecessary add-ons—just what your business needs for
							optimal performance and budget control.
						</span>
					</li>
					<li>
						<span>🚀</span>
						<strong>Boost Productivity:</strong>
						<span>
							Our PCs are built for speed and reliability, helping your
							business stay productive and focus on growth.
						</span>
					</li>
				</ul>
			</div>

			<div className="comp order-1 lg:order-2">
				<img
					style={{ objectFit: "cover" }}
					src="/src/pro.jpg"
					alt="pro working in custom built PC by effectivepc.in, with peace and ease"
				/>
			</div>
		</div>
	</div>
);

export default function About() {
	return (
		<section
			className="relative z-[20] pt-[8%] bg-[#080a0d]"
			id="about-us">
			<div className="flex flex-col lg:flex-row mx-auto md:px-[7%] border-b border-tw/[10%] max-w-screen-2xl px-9 w-full">
				<div className="lg:w-[60%] order-2 lg:order-1">
					<div className="flex-col space-y-[5%] w-full">
						<h3
							className="text-3xl neon turquoise font-semibold md:text-5xl"
							style={{
								lineHeight: "2.5ch",
							}}>
							Building Effective PCs <br />
							<span className="neon pink">for Gamers and Businesses</span>
						</h3>
						<div className="leading-loose text-tw/[90%] font-light text-[1.3ch] w-full">
							<p>
								At{" "}
								<strong className="font-bold">Effective PC ( EPC )</strong>
								, we specialize in building custom PCs designed precisely
								for your needs—whether it&apos;s for high-performance
								gaming or reliable business operations. We focus on
								delivering systems that provide the best combination of
								power, efficiency, and value, without unnecessary extras.
							</p>
						</div>
					</div>
					<a
						className="group px-4 mt-[6%] text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center rgb-btn mb-[20%]"
						href="#form">
						Let&apos;s Start Building
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

				<CubeSlide />
			</div>

			<FeatureCard />
		</section>
	);
}
