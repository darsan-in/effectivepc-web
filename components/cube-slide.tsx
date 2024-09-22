import "@/styles/cube.scss";

export default function CubeSlide() {
	return (
		<div id="cube-slide">
			<div className="swiper">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<img
							src="./side-1.jpg"
							alt=""
						/>
					</div>

					<div className="swiper-slide">
						<img
							src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2d165721-fe2e-4cf0-a63e-20bc5bc3f847"
							alt=""
						/>
					</div>

					<div className="swiper-slide">
						<img
							src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d311d1de-7382-4c03-b083-5f7e88458158"
							alt=""
						/>
					</div>

					<div className="swiper-slide">
						<img
							src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/be223a30-52d1-4a0b-8d57-2e52f02e2245"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
