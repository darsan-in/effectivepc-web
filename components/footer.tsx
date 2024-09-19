import { FaInstagram } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import Logo from "./logo";

export default function Footer() {
	const socialLinks: { href: string; Icon: IconType }[] = [
		{
			href: "https://www.instagram.com/effectivepc.in/",
			Icon: FaInstagram,
		},
	];

	const footerNavs = [
		{
			href: "#/about",
			name: "About",
		},
		{
			href: "/#partners",
			name: "Partners",
		},
		{
			href: "/#faq",
			name: "FAQ",
		},
		{
			href: "/blogs",
			name: "Blogs",
		},
		{
			href: "/support",
			name: "Support",
		},
	];

	return (
		<footer className="px-4 pb-5 pt-[5%] mx-auto md:px-8 z-[2] relative leading-loose tracking-widest space-y-20 bg-black text-tw border-t border-tw/[30%]">
			<div className="max-w-lg sm:mx-auto sm:text-center">
				<Logo classNames="text-[#f00] w-[250px] mx-auto" />
				<p className="leading-relaxed mt-2 text-[15px] font-light">
					We delivers custom-built computers tailored for gamers and
					businesses. Whether you need a powerful gaming rig or bulk
					systems for your startup, we provide top-tier PCs that maximize
					performance and cost-efficiency. Unlock more with the perfect
					PC—designed to fit your needs and budget.
				</p>
			</div>
			<ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
				{footerNavs.map((item, idx) => (
					<li
						key={idx}
						className="text-gray-300 hover:text-gray-400">
						<a
							className="nav-btn"
							href={item.href}>
							<span className="glow"></span>
							<span className="nav-btn-content">{item.name}</span>
						</a>
					</li>
				))}
			</ul>
			<div className="mt-8 items-center justify-between sm:flex">
				<p className="mt-4 sm:mt-0 text-sm">
					&copy; 2024 Effective PC All rights reserved.
				</p>
				<div className="mt-6 sm:mt-0">
					<nav className="flex items-center space-x-4">
						{socialLinks.map((link, idx) => (
							<a
								className="border rounded-full flex items-center justify-center sm-btn flex justify-center items-center"
								key={idx}
								href={link.href}
								target="_blank">
								<link.Icon className="text-tw svg-icon w-[70%] h-[70%] m-auto" />
							</a>
						))}
					</nav>
				</div>
			</div>
			<style jsx>{`
				.svg-icon path,
				.svg-icon polygon,
				.svg-icon rect {
					fill: currentColor;
				}
			`}</style>
		</footer>
	);
}
