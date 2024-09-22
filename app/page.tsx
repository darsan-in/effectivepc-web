"use client";
import About from "@/components/about";
import Banner from "@/components/banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Form from "@/components/form";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Testimonials from "@/components/testimonials";

export default function Home() {
	return (
		<>
			<main>
				<Banner />
				<Hero />
				<About />
				<Features />
				<Partners />
				<Testimonials />
				<FAQ />
				<Form />
			</main>
			<Footer />
		</>
	);
}
