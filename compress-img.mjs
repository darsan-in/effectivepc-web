import { compressImages } from "@cresteem/minomax";

class Compress {
	favicons() {
		// compress favicons
		compressImages("public/favicons/*png", "webp", "compressed").catch(
			console.error,
		);
	}

	svg() {
		// compress all svg
		compressImages("public/**/*svg", "svg", "compressed").catch(
			console.error,
		);
	}

	serviceImages() {
		// compress service visuals
		compressImages(
			"public/services-visuals/**/*{jpg,webp}",
			"avif",
			"compressed",
		).catch(console.error);
	}

	brandAssets() {
		// compress brand-assets non-svg
		compressImages(
			"public/brand-assets/*{png,webp}",
			"webp",
			"compressed",
		).catch(console.error);
	}
}

new Compress().favicons();
