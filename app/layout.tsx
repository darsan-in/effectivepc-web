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
	title: "Effective PC",
	description: "India's best PC builder",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${globFont.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
