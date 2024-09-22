import "@/styles/about-card.scss";
import CubeSlide from "./cube-slide";
import LineBG from "./line-bg";

const FeatureCard = () => (
	<div className="relative h-auto mx-auto px-4 md:px-8 z-[2] pt-[7%] bg-[#000]">
		<LineBG classNames="w-[100vw] h-[100%] left-0 top-0 z-[-2]" />
		<div className="absolute h-[100%] w-[100%] top-0 left-0 bg-[rgba(0,0,0,0.015)]"></div>
		<div
			className="w-full flex justify-center pb-[10%]"
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

			<div className="comp ml-[4%]">
				<img
					style={{ objectFit: "cover" }}
					src="/src/gamer.jpg"
					alt="gamer playing in custom built PC by effectivepc.in, without limit"
				/>
			</div>
		</div>

		<div
			className="w-full flex justify-around pb-[7.5%]"
			id="pro">
			<div className="comp">
				<img
					style={{ objectFit: "cover" }}
					src="/src/pro.jpg"
					alt="pro working in custom built PC by effectivepc.in, with peace and ease"
				/>
			</div>

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
		<section
			className="relative z-[20] pt-[8%] bg-[#121521]"
			id="about-us">
			<div className="flex mx-auto px-4 md:px-[5%] border-b border-tw/[10%]">
				<div className="w-[60%]">
					<div className="flex-col space-y-[5%]">
						<h3
							className="text-3xl neon turquoise font-semibold md:text-5xl"
							style={{
								lineHeight: "2.5ch",
							}}>
							Building Effective PCs <br />
							<span className="neon pink">for Gamers and Businesses</span>
						</h3>
						<div className="leading-loose text-tw/[90%] font-light text-[1.3ch]">
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
						className="group px-4 mt-[4%] text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center rgb-btn"
						href="#form">
						Let&apos;s Get Start Building
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
