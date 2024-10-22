"use client";
import About from "@/components/about";
import Banner from "@/components/banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Form from "@/components/form";
import Hero from "@/components/hero";
/* import Partners from "@/components/partners"; */
import Testimonials from "@/components/testimonials";

import scrollHandler, {
	anchorInterceptor,
} from "@/scripts/scroll-handler.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "lenis/dist/lenis.css";
import ReactLenis from "lenis/react";
import { useEffect, useRef } from "react";

export default function Home() {
	const lenisRef = useRef(null);
	useEffect(() => {
		AOS.init({ mirror: true, duration: 1000, delay: 250 });

		scrollHandler();

		anchorInterceptor(lenisRef);
	}, []);

	return (
		<ReactLenis
			root={true}
			ref={lenisRef}
			autoRaf={true}
			options={{ duration: 4.5, smoothWheel: true }}>
			<main>
				<Banner />
				<Hero />
				<About />
				<Features />
				{/* <Partners /> */}
				<Testimonials />
				<FAQ />
				<Form />
			</main>
			<Footer />
		</ReactLenis>
	);
}
