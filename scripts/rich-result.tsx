import { ReactElement } from "react";

export default function RichResult({
	reviewRecord,
}: {
	reviewRecord: {
		avatar: string;
		name: string;
		title: string;
		quote: ReactElement;
		stars: number;
	}[];
}) {
	const JsonLD = JSON.stringify(
		{
			"@context": "https://schema.org/",
			"@type": "LocalBusiness ",
			name: "Effective PC (effectivepc.in) - Building Custom PC For Gamers and Businesses.",
			url: "https://effectivepc.in/",
			telephone: "+919488767253",
			image: ["https://effectivepc.in/brand-assets/logo/hero.webp"],
			address: {
				"@type": "PostalAddress",
				addressLocality: "Nagapattinam",
				addressRegion: "Tamil Nadu",
				postalCode: "611001",
				addressCountry: "IN",
			},
			review: [
				reviewRecord.map((record) =>
					review({ name: record.name, rate: record.stars }),
				),
			],
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: 4.8,
				bestRating: 5,
				ratingCount: reviewRecord.length,
			},
		},
		null,
		0,
	);
	return <script type="application/ld+json">{JsonLD}</script>;
}

function review({ name, rate }: { name: string; rate: number }) {
	return {
		"@type": "Review",
		reviewRating: {
			"@type": "Rating",
			ratingValue: rate,
			bestRating: 5,
		},
		author: {
			"@type": "Person",
			name: name,
		},
		publisher: {
			"@type": "Organization",
			name: "Google Business",
		},
	};
}
