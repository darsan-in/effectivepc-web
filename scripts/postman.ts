import { FormEvent } from "react";

export default function postman(
	type: 1 | 2,
	event: FormEvent<HTMLFormElement>,
): Promise<void> {
	event.preventDefault();

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	/* @ts-ignore */
	const data: { type: number; contact: string } & {
		type: number;
		email: string;
		name: string;
		contact: string;
		message: string;
	} = {
		type: type,
	};

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	/* @ts-ignore */
	new FormData(event.target).forEach((val, key) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		/* @ts-ignore */
		data[key] = val;
	});

	return new Promise((resolve, reject) => {
		if (!isValidContact(data.contact)) {
			alert("10 Digits are required!");
			reject();
			return;
		}

		fetch(
			"https://asia-south1-bonse-430603.cloudfunctions.net/cresteem-form",
			{
				method: "POST",
				body: JSON.stringify(data),
			},
		)
			.then(() => {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				/* @ts-ignore */
				event.target.reset();
				resolve();
			})
			.catch(reject);
	});
}

function isValidContact(contact: string): boolean {
	return contact.length >= 10;
}
