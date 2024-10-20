import Logo from "./logo";

export default function Partners() {
	return (
		<section
			className="py-[5em] bg-gray-50"
			id="partners">
			<div className="max-w-screen-xl mx-auto px-4 md:px-8">
				<div className="max-w-xl mx-auto text-center">
					<h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
						Partners
					</h3>
					<p className="text-gray-600 mt-3 text-[18px]">
						We collaborate with authorized, experienced, and trusted
						partners from leading tech brands to bring your dream PC to
						life - efficiently and effectively.
					</p>
				</div>
				<div className="mt-12 flex justify-center">
					<ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
						{/* LOGO 1 */}
						<li>
							<Logo classNames="w-28 my-auto" />
						</li>

						{/* LOGO 2 */}
						<li>
							<Logo classNames="w-28 my-auto" />
						</li>

						{/* LOGO 3 */}
						<li>
							<Logo classNames="w-28 my-auto" />
						</li>

						{/* LOGO 4 */}
						<li>
							<Logo classNames="w-28 my-auto" />
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
