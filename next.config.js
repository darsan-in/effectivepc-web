/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: {
		buildActivityPosition: "top-right",
	},
	output: "export",
	distDir: "./out",
	basePath: "",
	assetPrefix: "",
	reactStrictMode: false,
};

export default nextConfig;
