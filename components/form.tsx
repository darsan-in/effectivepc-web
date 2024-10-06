import postman from "@/scripts/postman";
import { email, phone } from "./reusable/contact-info";

export default function Form() {
	const contactMethods = [
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
					/>
				</svg>
			),
			contact: email,
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
					/>
				</svg>
			),
			contact: phone,
		},
	];

	return (
		<section
			className="py-[7%] bg-white text-black"
			id="form">
			<div className="max-w-screen-xl mx-auto px-4 md:px-8">
				<div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
					<div className="max-w-lg space-y-3">
						<h3 className="font-semibold text-primary">Contact</h3>
						<p className="text-3xl font-semibold sm:text-4xl">
							Let us know how we can help
						</p>
						<p className="text-[1.8ch] pt-[1ch]">
							We’re here to help and answer any question you might have, We
							look forward to hearing from you! Please fill out the form,
							or us the contact information below .
						</p>
						<div>
							<ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
								{contactMethods.map((item, idx) => (
									<li
										key={idx}
										className="flex items-center gap-x-3">
										<div className="flex-none text-primary">
											{item.icon}
										</div>
										<p className="text-[2ch]">{item.contact}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
						<div
							className="w-100 py-20 hidden"
							id="form-sts">
							<p className="text-center text-black tracking-wide text-xl">
								We received your request. We&apos;ll get back to you soon.
							</p>
						</div>
						<form
							id="form-area"
							onSubmit={(event) => {
								postman(2, event)
									.then(() => {
										const formarea = document.getElementById("form-area");
										const status = document.getElementById("form-sts");

										formarea?.classList.add("hidden");
										status?.classList.remove("hidden");

										setTimeout(() => {
											formarea?.classList.remove("hidden");
											status?.classList.add("hidden");
										}, 7000);
									})
									.catch(console.warn);
							}}
							className="space-y-5">
							<div>
								<label
									className="font-medium"
									htmlFor="name">
									Name
								</label>
								<input
									id="name"
									type="text"
									required
									name="name"
									placeholder="Your name?"
									className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-black focus:border-indigo-600 shadow-sm rounded-lg"
								/>
							</div>
							<div>
								<label
									className="font-medium"
									htmlFor="email">
									Email
								</label>
								<input
									id="email"
									type="email"
									required
									name="email"
									placeholder="Example: yourname@email.com"
									className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-black focus:border-indigo-600 shadow-sm rounded-lg"
								/>
							</div>
							<div>
								<label className="font-medium">
									Phone number{" "}
									<span className="font-normal">(With Country Code)</span>
								</label>
								<input
									type="number"
									placeholder={"Example: " + phone}
									required
									name="contact"
									className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-black focus:border-indigo-600 shadow-sm rounded-lg"
								/>
							</div>
							<div>
								<label className="font-medium">Your Needs</label>
								<textarea
									placeholder="Explain your requirement"
									required
									name="message"
									className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border border-black focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
							</div>
							<button className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-red-700 active:bg-indigo-600 rounded-lg duration-150">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
