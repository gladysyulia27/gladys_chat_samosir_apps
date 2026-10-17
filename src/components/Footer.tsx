import { Link } from "@tanstack/react-router";

const footerColumns = [
	{
		title: "Company",
		links: [
			{ label: "About Us", href: "/about" },
			{ label: "Features", href: "/#camp-map" },
			{ label: "News", href: "/" },
			{ label: "FAQ", href: "/#faq" },
		],
	},
	{
		title: "Resources",
		links: [
			{ label: "Events", href: "/#camp-map" },
			{ label: "Promo", href: "/#camp-map" },
			{ label: "Req Demo", href: "/contact" },
		],
	},
	{
		title: "Support",
		links: [
			{ label: "Account", href: "/demo/better-auth" },
			{ label: "Support Center", href: "/contact" },
			{ label: "Feedback", href: "/contact" },
			{ label: "Contact Us", href: "/contact" },
			{ label: "Accessibility", href: "/contact" },
		],
	},
] as const;

const socialLinks = [
	{ label: "Instagram", href: "https://instagram.com", icon: "instagram" },
	{ label: "Facebook", href: "https://facebook.com", icon: "facebook" },
	{ label: "Twitter", href: "https://x.com", icon: "twitter" },
] as const;

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
	if (name === "instagram") {
		return (
			<svg
				viewBox="0 0 24 24"
				aria-hidden="true"
				className="h-4 w-4 fill-none stroke-current stroke-2"
			>
				<rect x="3" y="3" width="18" height="18" rx="5" />
				<circle cx="12" cy="12" r="4" />
				<circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
			</svg>
		);
	}

	if (name === "facebook") {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
				<path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.6v8h2.9Z" />
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
			<path d="M18.2 3H21l-6.1 7 7.2 11h-5.6l-4.4-6.7L6.2 21H3.4l6.5-7.5L3 3h5.7l4 6.1L18.2 3Zm-1 16h1.6L8.7 4.9H7L17.2 19Z" />
		</svg>
	);
}

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-[#0759c9] px-6 pb-6 pt-12 text-white sm:px-10 lg:px-14">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.9fr_1fr] lg:gap-12">
					<div className="max-w-xs text-left">
						<Link to="/" className="inline-flex items-center gap-2 text-white no-underline">
							<svg viewBox="0 0 36 36" aria-hidden="true" className="h-7 w-7 fill-current">
								<path d="M18 4C9 4 3 13 3 24c0 5 3 8 7 8 2.5 0 4.5-4 5.5-9 1-5.5 4-5.5 5 0 1 5 3 9 5.5 9 4 0 7-3 7-8 0-11-6-20-15-20Z" />
							</svg>
							<span className="text-sm font-bold tracking-tight">Camply.</span>
						</Link>
						<p className="mt-5 max-w-[220px] text-xs leading-5 text-blue-100">
							We always make our customer happy by providing as many choices as possible.
						</p>
					</div>

					{footerColumns.map((column) => (
						<div key={column.title} className="text-left">
							<h2 className="text-xs font-bold text-white">{column.title}</h2>
							<ul className="mt-5 space-y-2.5">
								{column.links.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className="text-xs text-blue-100 no-underline transition-colors hover:text-white"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}

					<div className="text-left">
						<h2 className="text-xs font-bold text-white">Contact Info</h2>
						<a
							href="mailto:camply@gmail.com"
							className="mt-5 block text-xs text-blue-100 no-underline transition-colors hover:text-white"
						>
							camply@gmail.com
						</a>
						<div className="mt-4 flex items-center gap-2">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noreferrer"
									aria-label={social.label}
									className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0759c9] transition-transform hover:-translate-y-0.5 hover:bg-blue-100"
								>
									<SocialIcon name={social.icon} />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="mt-10 border-t border-blue-400/40 pt-4 text-center text-[11px] text-blue-100">
					Copyright © {year} Camply. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
