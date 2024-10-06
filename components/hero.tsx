"use client";
import CubeEffect from "@/scripts/cube-effect";
import heroVisualInit from "@/scripts/hero-visuals";
import "@/styles/hero.scss";
import { useEffect, useState } from "react";
import ContactBtn from "./cantact-btn";
import HeroLogo from "./herologo";
import Logo from "./logo";

export default function Hero() {
	const [state, setState] = useState(false);

	const navigation = [
		{ title: "About", path: "/#about-us" },
		{ title: "Partners", path: "/#partners" },
		{ title: "FAQ", path: "/#faqs" },
		{ title: "Shop", path: "/shop" },
		{ title: "Blogs", path: "/blogs" },
	];

	const Brand = () => (
		<div className="flex items-center justify-between py-5 lg:hidden">
			<Logo classNames="text-white w-[150px] block lg:hidden" />

			<div className="lg:hidden">
				<button
					className="menu-btn text-gray-400 hover:text-gray-300"
					onClick={() => setState(!state)}>
					{state ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					)}
				</button>
			</div>
		</div>
	);

	useEffect(() => {
		heroVisualInit({ id: "particleCanvas" });
		/* for footer */
		heroVisualInit({ id: "footerBg" });
		CubeEffect();

		document.onclick = (e) => {
			const target = e.target;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			/* @ts-ignore */
			if (!target.closest(".menu-btn")) setState(false);
		};
	}, []);
	return (
		<section
			id="hero"
			className="w-[100%] h-[40em] lg:h-[110vh] relative">
			<canvas id="particleCanvas"></canvas>

			<header>
				<h2>
					<div className={`lg:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
						<Brand />
					</div>
				</h2>
				<div className="mid-spot"></div>
				<nav
					className={`pb-5 md:text-sm ${
						state
							? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 lg:mx-0 lg:mt-0 lg:relative lg:bg-transparent"
							: ""
					}`}>
					<div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 lg:flex lg:px-8">
						<Brand />
						<div
							className={`flex-1 items-center mt-8 lg:mt-0 lg:flex ${
								state ? "block" : "hidden"
							} `}>
							<ul className="flex-1 justify-end items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
								{navigation.map((item, idx) => {
									return (
										<li
											key={idx}
											className="text-gray-300 hover:text-gray-400">
											<a
												className="nav-btn"
												href={item.path}>
												<span className="glow"></span>
												<span className="nav-btn-content">
													{item.title}
												</span>
											</a>
										</li>
									);
								})}

								<li>
									<ContactBtn />
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<div className="spotlight">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</header>

			<div className="accent-lines">
				<div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className="heroSubP">
				<p>Tailored for Gamers. Optimized for Businesses.</p>
			</div>
			<div className="hero hidden lg:block">
				<div className="heroT">
					<HeroLogo classNames="text-accent w-[50%] mx-auto" />
				</div>
			</div>

			<div
				className="relative flex-col justify-center items-center"
				style={{ top: "12.6em" }}>
				<p className="heroP">
					Get the best value with custom-built PCs
					<br /> designed to meet your needs and budget.
				</p>
				<a
					href="#form"
					className="rgb-btn z-[200] mx-auto mt-9 w-[190px] h-[40px] flex items-center justify-center">
					Build Yours Today
				</a>
			</div>

			<div className="mountains">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</section>
	);
}
