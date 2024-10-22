import "@/styles/cube.scss";

export default function CubeSlide() {
	return (
		<div
			id="cube-slide"
			className="order-1 lg:order-2 lg:w-[40%]"
			data-aos="zoom-in"
			data-aos-delay="660">
			<div
				className="swiper"
				dir="rtl">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<img
							src="/src/front.avif"
							alt="Effective PC - CPU/PC Model Front Side"
						/>
					</div>

					<div className="swiper-slide">
						<img
							src="/src/side-left.avif"
							alt="Effective PC - CPU/PC Model Left Side"
						/>
					</div>

					<div className="swiper-slide">
						<img
							src="/src/back.avif"
							alt="Effective PC - CPU/PC Model Back Side"
						/>
					</div>

					<div className="swiper-slide">
						<img
							src="/src/side-right.avif"
							alt="Effective PC - CPU/PC Model Right Side"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
