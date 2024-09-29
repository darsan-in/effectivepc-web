import "@/styles/cube.scss";

export default function CubeSlide() {
	return (
		<div id="cube-slide">
			<div
				className="swiper"
				dir="rtl">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<img
							src="/src/front.png"
							alt="Effective PC - CPU/PC Model Front Side"
						/>
					</div>

					<div className="swiper-slide">
						<img
							src="/src/side-left.png"
							alt="Effective PC - CPU/PC Model Left Side"
						/>
					</div>

					<div className="swiper-slide">
						<img
							src="/src/back.png"
							alt="Effective PC - CPU/PC Model Back Side"
						/>
					</div>

					<div className="swiper-slide">
						<img
							src="/src/side-right.png"
							alt="Effective PC - CPU/PC Model Right Side"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
