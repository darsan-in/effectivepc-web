"use client";
import About from "@/components/about";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
	return (
		<>
			<main>
				<Hero />
				<About />
				<FAQ />
			</main>
			<Footer />
		</>
	);
}
