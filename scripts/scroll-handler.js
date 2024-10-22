function handleScroll(deltaY) {
	window.dispatchEvent(
		new WheelEvent("wheel", {
			deltaY: deltaY,
			bubbles: true,
			cancelable: true,
			view: window,
		}),
	);
}

export default () => {
	document.addEventListener("keydown", (event) => {
		switch (event.key) {
			case "ArrowUp":
				handleScroll(-100);
				break;
			case "ArrowDown":
				handleScroll(100);
				break;
			case "PageUp":
				handleScroll(-200);
				break;
			case "PageDown":
				handleScroll(200);
				break;
			case "Home":
				handleScroll(0 - document.body.scrollHeight);
				break;
			case "End":
				handleScroll(document.body.scrollHeight);
				break;
			default:
				break;
		}
	});
};

export function anchorInterceptor(lenisRef) {
	document.querySelectorAll("a[href]").forEach((anchor) => {
		anchor.addEventListener("click", function (_clickEvent) {
			const link = this.getAttribute("href");
			if (link.includes("#")) {
				lenisRef.current?.lenis?.scrollTo(link.slice(link.indexOf("#")));
			}
		});
	});
}
