import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.scss";

const globFont = Open_Sans({
	weight: "variable",
	style: ["normal", "italic"],
	subsets: ["latin"],
	adjustFontFallback: true,
	preload: true,
	display: "swap",
});

export const metadata: Metadata = {
	title: "Custom-Built PCs for Gamers & Businesses | Effective PC",
	description:
		"Discover custom-built PCs tailored for gamers and startups at Effective PC. We deliver high-performance, budget-friendly systems that maximize efficiency and power up your gaming or business operations. Get your custom PC today at effectivepc.in.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/x-icon"
					href="/favicons/favicon.ico"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/favicon-16x16.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="48x48"
					href="/favicons/favicon-48x48.png"
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
					href="/favicons/apple-touch-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/favicons/apple-touch-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/favicons/apple-touch-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/favicons/apple-touch-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/favicons/apple-touch-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/favicons/apple-touch-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/favicons/apple-touch-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/favicons/apple-touch-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="167x167"
					href="/favicons/apple-touch-icon-167x167.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon-180x180.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="1024x1024"
					href="/favicons/apple-touch-icon-1024x1024.png"
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
			</head>
			<body className={`${globFont.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
