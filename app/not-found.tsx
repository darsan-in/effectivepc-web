export default function NotFound() {
	return (
		<main>
			<div className="mx-auto px-4 flex items-center justify-start h-screen md:px-8 bg-black">
				<div className="max-w-lg mx-auto space-y-3 text-center">
					<h3 className="text-indigo-600 font-semibold">404 Error</h3>
					<p className="text-white text-4xl font-semibold sm:text-5xl">
						Page not found
					</p>
					<p className="text-tw">
						Sorry, the page you are looking for could not be found.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-3">
						<a
							className="nav-btn"
							href="/">
							<span className="glow"></span>
							<span className="nav-btn-content">Go Home</span>
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
