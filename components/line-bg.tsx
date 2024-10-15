"use client";
import RGBLine from "@/scripts/circuit-line-bg";
import { useEffect } from "react";

export default function RGBBG({ classNames }: { classNames: string }) {
	useEffect(() => {
		RGBLine();
	}, []);

	return (
		<canvas
			id="rgbline-bg"
			className={"absolute " + classNames}></canvas>
	);
}
