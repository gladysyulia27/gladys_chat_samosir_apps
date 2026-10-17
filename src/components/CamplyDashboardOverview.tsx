import { useState } from "react";

const overviewCards = [
	{
		title: "Fokus Camply",
		description:
			"Membuat pengalaman camping terasa lebih mudah, aman, dan nyaman untuk siapa pun yang ingin dekat dengan alam.",
		icon: "compass",
		accent: "bg-blue-50 text-[#0b63f6] dark:bg-blue-950/40 dark:text-blue-300",
	},
	{
		title: "Yang Camply sediakan",
		description:
			"Pilihan camp terkurasi, informasi lokasi dan harga, serta akses booking untuk membantu kamu menyiapkan perjalanan.",
		icon: "tent",
		accent: "bg-orange-50 text-[#ff7043] dark:bg-orange-950/40 dark:text-orange-300",
	},
	{
		title: "Berkemah bersama",
		description:
			"Bergabung dengan komunitas camper untuk berbagi cerita, menemukan teman baru, dan merencanakan petualangan berikutnya.",
		icon: "users",
		accent: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300",
	},
] as const;

function OverviewIcon({ name }: { name: (typeof overviewCards)[number]["icon"] }) {
	if (name === "compass") {
		return (
			<svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
				<circle cx="12" cy="12" r="9" />
				<path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
			</svg>
		);
	}

	if (name === "tent") {
		return (
			<svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
				<path d="m3 20 9-16 9 16M6.5 20 12 11l5.5 9M2 20h20" />
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
			<circle cx="9" cy="8" r="3" />
			<path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5a3 3 0 0 1 0 6M18 14a4 4 0 0 1 3 4v2" />
		</svg>
	);
}

export default function CamplyDashboardOverview() {
	const [showWelcome, setShowWelcome] = useState(false);

	return (
		<section
			id="camply-overview"
			className="relative overflow-hidden bg-[#f7f9fd] px-4 pb-20 pt-12 dark:bg-[#0c0f1d] sm:px-6 lg:px-8 lg:pt-16"
		>
			<div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-900/20" />
			<div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-900/10" />

			<div className="relative z-10 mx-auto max-w-7xl">
				<div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="max-w-3xl text-left">
						<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0b63f6] shadow-sm dark:border-blue-900/50 dark:bg-[#151928] dark:text-blue-300">
							<span className="h-2 w-2 rounded-full bg-[#ff7043]" />
							Tentang Camply
						</div>
						<h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-[#11162b] dark:text-white sm:text-5xl lg:text-6xl">
							Camping lebih mudah, alam lebih dekat.
						</h1>
						<p className="mt-6 max-w-2xl text-base leading-8 text-[#67718e] dark:text-neutral-300 sm:text-lg">
							Camply berfokus membantu kamu menemukan camp yang tepat, menyiapkan perjalanan dengan
							tenang, dan menikmati waktu di alam bersama komunitas yang suportif.
						</p>
						<div className="mt-8 flex flex-wrap items-center gap-4">
							<a
								href="/#camp-map"
								className="inline-flex items-center gap-2 rounded-full bg-[#11162b] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_24px_-6px_rgba(17,22,43,0.35)] transition hover:-translate-y-0.5 hover:bg-[#222b4d]"
							>
								Lihat peta camp
								<svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
									<path d="M10 3a1 1 0 0 1 1 1v9.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3V4a1 1 0 0 1 1-1Z" />
								</svg>
							</a>
							<button
								type="button"
								onClick={() => setShowWelcome((current) => !current)}
								className="text-sm font-bold text-[#0b63f6] underline-offset-4 hover:underline"
							>
								{showWelcome ? "Sembunyikan pesan" : "Kenali Camply"}{" "}
								<span aria-hidden="true">&rarr;</span>
							</button>
						</div>
						{showWelcome && (
							<p className="mt-4 max-w-xl rounded-2xl border border-blue-100 bg-white/80 px-4 py-3 text-sm font-medium text-[#53607d] shadow-sm dark:border-blue-900/50 dark:bg-[#151928] dark:text-neutral-300">
								Selamat datang di Camply. Mulai dari peta di bawah untuk menemukan tempat yang
								paling cocok untuk cerita camping kamu berikutnya.
							</p>
						)}
					</div>

					<div className="grid grid-cols-3 gap-3 text-left sm:gap-4">
						<div className="rounded-3xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-[#151928]/80 sm:p-5">
							<p className="text-2xl font-black text-[#11162b] dark:text-white sm:text-3xl">1K+</p>
							<p className="mt-1 text-[11px] font-semibold leading-4 text-[#7a849e] dark:text-neutral-400 sm:text-xs">
								Destinasi camp
							</p>
						</div>
						<div className="rounded-3xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-[#151928]/80 sm:p-5">
							<p className="text-2xl font-black text-[#11162b] dark:text-white sm:text-3xl">8K</p>
							<p className="mt-1 text-[11px] font-semibold leading-4 text-[#7a849e] dark:text-neutral-400 sm:text-xs">
								Camper aktif
							</p>
						</div>
						<div className="rounded-3xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-[#151928]/80 sm:p-5">
							<p className="text-2xl font-black text-[#11162b] dark:text-white sm:text-3xl">4.2</p>
							<p className="mt-1 text-[11px] font-semibold leading-4 text-[#7a849e] dark:text-neutral-400 sm:text-xs">
								Rating camper
							</p>
						</div>
					</div>
				</div>

				<div className="mt-14 grid gap-4 md:grid-cols-3">
					{overviewCards.map((card) => (
						<article
							key={card.title}
							className="rounded-3xl border border-neutral-200/80 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-[#151928]/80"
						>
							<div
								className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${card.accent}`}
							>
								<OverviewIcon name={card.icon} />
							</div>
							<h2 className="text-lg font-black text-[#11162b] dark:text-white">{card.title}</h2>
							<p className="mt-3 text-sm leading-7 text-[#67718e] dark:text-neutral-400">
								{card.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
