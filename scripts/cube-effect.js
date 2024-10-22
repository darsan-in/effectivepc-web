export default function CubeEffect() {
	new Swiper(".swiper", {
		effect: "cube",
		grabCursor: true,
		loop: true,
		speed: 5000,
		cubeEffect: {
			shadow: true,
			slideShadows: true,
			shadowOffset: 15,
			shadowScale: 1.5,
		},
		autoplay: {
			delay: 0,
			pauseOnMouseEnter: true,
		},
	});
}
