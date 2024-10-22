import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Nunito } from "next/font/google";
import "../styles/globals.scss";

const Font = Nunito({
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-def",
	style: ["normal", "italic"],
	preload: true,
	display: "swap",
	subsets: ["latin"],
});
export const metadata = {
	title:
		"Custom PC Builds for Gamers & Businesses | High-Performance, Cost-Efficient PCs | Effective PC",
	description:
		"Looking for a custom-built PC? Effective PC specializes in high-performance, cost-efficient computers tailored for gamers, businesses, and startups. Maximize your investment with PCs designed to boost productivity, deliver top-tier performance, and save on costs. Perfect for gaming rigs, business workstations, and enterprise solutions.",
	keywords: [
		"Custom PC Builds",
		"Gaming PC",
		"Business Workstations",
		"High-Performance Computers",
		"Cost-Efficient PCs",
		"Enterprise PC Solutions",
		"Bulk PC Building",
		"Gaming Rigs",
		"Office Computers",
		"Affordable Custom PCs",
		"Productivity PCs",
		"Tailored PC Solutions",
		"PC for Startups",
		"PC Hardware Experts",
		"Business IT Solutions",
		"Workstation PCs",
		"Custom Gaming Computers",
		"Custom PC Design",
		"Effective PC",
		"Budget Gaming PCs",
	],
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={Font.variable + " antialiased"}>
			<head>
				<link
					rel="icon"
					type="image/x-icon"
					href="/favicons/favicon.ico"
				/>
				<link
					rel="icon"
					type="image/webp"
					sizes="16x16"
					href="/favicons/favicon-16x16.webp"
				/>
				<link
					rel="icon"
					type="image/webp"
					sizes="32x32"
					href="/favicons/favicon-32x32.webp"
				/>
				<link
					rel="icon"
					type="image/webp"
					sizes="48x48"
					href="/favicons/favicon-48x48.webp"
				/>
				<link
					rel="manifest"
					href="/favicons/manifest.webmanifest"
				/>
				<meta
					name="mobile-web-app-capable"
					content="yes"
				/>
				<meta
					name="theme-color"
					content="#fff"
				/>
				<meta
					name="application-name"
					content="Effective PC"
				/>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/favicons/apple-touch-icon-57x57.webp"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/favicons/apple-touch-icon-60x60.webp"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/favicons/apple-touch-icon-72x72.webp"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/favicons/apple-touch-icon-76x76.webp"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/favicons/apple-touch-icon-114x114.webp"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/favicons/apple-touch-icon-120x120.webp"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/favicons/apple-touch-icon-144x144.webp"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/favicons/apple-touch-icon-152x152.webp"
				/>
				<link
					rel="apple-touch-icon"
					sizes="167x167"
					href="/favicons/apple-touch-icon-167x167.webp"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon-180x180.webp"
				/>
				<link
					rel="apple-touch-icon"
					sizes="1024x1024"
					href="/favicons/apple-touch-icon-1024x1024.webp"
				/>
				<meta
					name="apple-mobile-web-app-capable"
					content="yes"
				/>
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta
					name="apple-mobile-web-app-title"
					content="Effective PC"
				/>
				<link
					rel="yandex-tableau-widget"
					href="/favicons/yandex-browser-manifest.json"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
				/>
				<script
					src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
					async></script>
			</head>
			<body>
				<Theme> {children}</Theme>
			</body>
		</html>
	);
}
