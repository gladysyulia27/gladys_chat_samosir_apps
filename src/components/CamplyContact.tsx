import { useState } from "react";

export default function CamplyContact() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.message) return;
		setSubmitted(true);
		setForm({ name: "", email: "", message: "" });
		setTimeout(() => setSubmitted(false), 5000);
	};

	return (
		<section
			id="contact"
			className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f7f9fd] to-white dark:from-[#0a0d18] dark:via-[#0f1323] dark:to-[#0a0d18] transition-colors relative overflow-hidden"
		>
			{/* Decorative blobs */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-50 dark:bg-blue-950/20 blur-3xl opacity-60"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-orange-50 dark:bg-orange-950/20 blur-3xl opacity-50"
			/>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Section Header */}
				<div className="text-center mb-14 space-y-3">
					<div className="inline-flex items-center gap-2 mb-1">
						{/* Blue spark doodle */}
						<svg viewBox="0 0 32 32" className="w-6 h-6 text-[#0b63f6]" fill="none">
							<path
								d="M16 2 L16 10 M16 22 L16 30 M2 16 L10 16 M22 16 L30 16 M6 6 L12 12 M20 20 L26 26 M6 26 L12 20 M20 12 L26 6"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
							/>
						</svg>
						<p className="text-xs font-bold uppercase tracking-widest text-[#0b63f6]">Contact Us</p>
					</div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#11162b] dark:text-white tracking-tight leading-tight">
						Let's Plan Your{" "}
						<span className="relative inline-block">
							Adventure
							{/* Orange brush underline */}
							<svg
								viewBox="0 0 200 12"
								className="absolute -bottom-2 left-0 w-full"
								preserveAspectRatio="none"
							>
								<path
									d="M2 9 C50 3, 100 11, 150 5 C175 2, 190 8, 198 6"
									stroke="#ff7043"
									strokeWidth="3.5"
									strokeLinecap="round"
									fill="none"
								/>
							</svg>
						</span>
					</h2>
					<p className="text-sm sm:text-base text-[#67718e] dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
						Have questions about our camps or want to make a group reservation? Reach us directly or
						send a message below.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
					{/* Left: Contact Info */}
					<div className="lg:col-span-5 space-y-6">
						{/* Phone card */}
						<div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#141829] border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
							<div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center flex-shrink-0">
								<svg
									viewBox="0 0 24 24"
									className="w-5 h-5 text-[#0b63f6] fill-none stroke-current stroke-2"
								>
									<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.81 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92z" />
								</svg>
							</div>
							<div className="text-left">
								<p className="text-xs font-bold uppercase tracking-wider text-[#0b63f6] mb-1">
									Telepon
								</p>
								<a
									href="tel:+6281221910971"
									className="text-base sm:text-lg font-bold text-[#11162b] dark:text-white hover:text-[#0b63f6] dark:hover:text-[#3b82f6] transition-colors"
								>
									081221910971
								</a>
								<p className="text-xs text-[#67718e] dark:text-neutral-400 mt-0.5">
									Senin–Sabtu, 08.00–17.00 WIB
								</p>
							</div>
						</div>

						{/* Email card */}
						<div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#141829] border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
							<div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-950/40 flex items-center justify-center flex-shrink-0">
								<svg
									viewBox="0 0 24 24"
									className="w-5 h-5 text-[#ff7043] fill-none stroke-current stroke-2"
								>
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
								</svg>
							</div>
							<div className="text-left">
								<p className="text-xs font-bold uppercase tracking-wider text-[#ff7043] mb-1">
									Email
								</p>
								<a
									href="mailto:camply@gmail.com"
									className="text-base sm:text-lg font-bold text-[#11162b] dark:text-white hover:text-[#ff7043] transition-colors"
								>
									camply@gmail.com
								</a>
								<p className="text-xs text-[#67718e] dark:text-neutral-400 mt-0.5">
									Kami merespons dalam 1×24 jam
								</p>
							</div>
						</div>

						{/* Map / Location card */}
						<div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[#141829] border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
							<div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center flex-shrink-0">
								<svg
									viewBox="0 0 24 24"
									className="w-5 h-5 text-emerald-600 fill-none stroke-current stroke-2"
								>
									<path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
									<circle cx="12" cy="10" r="3" />
								</svg>
							</div>
							<div className="text-left">
								<p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
									Lokasi
								</p>
								<p className="text-base sm:text-lg font-bold text-[#11162b] dark:text-white">
									Nusantara, Indonesia
								</p>
								<p className="text-xs text-[#67718e] dark:text-neutral-400 mt-0.5">
									Tersedia di lebih dari 1K+ destinasi di seluruh Indonesia
								</p>
							</div>
						</div>

						{/* Social row */}
						<div className="flex items-center gap-3 pt-2">
							<span className="text-xs font-semibold text-[#67718e] dark:text-neutral-400">
								Follow kami:
							</span>
							{[
								{
									label: "Instagram",
									url: "https://instagram.com",
									color: "#E1306C",
									icon: (
										<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.069 1.645.069 4.851s-.011 3.587-.069 4.851c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.585-.011-4.85-.069c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.587 2.163 15.207 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.333.013 7.053.072 5.775.132 4.602.425 3.635 1.393 2.668 2.36 2.375 3.533 2.315 4.811 2.256 6.09 2.244 6.512 2.244 12c0 5.488.012 5.91.071 7.189.06 1.278.353 2.451 1.32 3.418.968.967 2.14 1.261 3.418 1.32C8.333 23.987 8.756 24 12 24s3.667-.013 4.947-.073c1.277-.06 2.45-.353 3.418-1.32.967-.967 1.26-2.14 1.32-3.418.059-1.279.071-1.701.071-7.189 0-5.488-.012-5.91-.071-7.189-.06-1.278-.353-2.451-1.32-3.418C19.398.425 18.225.132 16.947.072 15.667.013 15.244 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
										</svg>
									),
								},
								{
									label: "TikTok",
									url: "https://tiktok.com",
									color: "#000000",
									icon: (
										<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
											<path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.22 8.22 0 004.8 1.54V6.84a4.85 4.85 0 01-1.03-.15z" />
										</svg>
									),
								},
								{
									label: "Twitter/X",
									url: "https://x.com",
									color: "#1DA1F2",
									icon: (
										<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.069 2.25h6.782l4.243 5.611L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
										</svg>
									),
								},
							].map((s) => (
								<a
									key={s.label}
									href={s.url}
									target="_blank"
									rel="noreferrer"
									aria-label={s.label}
									className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:scale-110 transition-transform flex items-center justify-center"
									style={{ color: s.color }}
								>
									{s.icon}
								</a>
							))}
						</div>
					</div>

					{/* Right: Contact Form */}
					<div className="lg:col-span-7">
						<form
							onSubmit={handleSubmit}
							className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#141829] border border-neutral-200/80 dark:border-neutral-800 shadow-lg shadow-slate-100/50 dark:shadow-none space-y-5"
						>
							<h3 className="text-lg font-extrabold text-[#11162b] dark:text-white text-left">
								Kirim Pesan
							</h3>

							{submitted && (
								<div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
									<svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-shrink-0">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
											clipRule="evenodd"
										/>
									</svg>
									Pesan terkirim! Kami akan menghubungi Anda segera.
								</div>
							)}

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								{/* Name */}
								<div className="space-y-1.5 text-left">
									<label
										htmlFor="contact-name"
										className="text-xs font-bold uppercase tracking-wider text-[#67718e] dark:text-neutral-400"
									>
										Nama Lengkap
									</label>
									<input
										id="contact-name"
										type="text"
										name="name"
										required
										value={form.name}
										onChange={handleChange}
										placeholder="Budi Santoso"
										className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0f1220] text-sm text-[#11162b] dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-[#0b63f6]/30 focus:border-[#0b63f6] transition-all"
									/>
								</div>

								{/* Email */}
								<div className="space-y-1.5 text-left">
									<label
										htmlFor="contact-email"
										className="text-xs font-bold uppercase tracking-wider text-[#67718e] dark:text-neutral-400"
									>
										Alamat Email
									</label>
									<input
										id="contact-email"
										type="email"
										name="email"
										required
										value={form.email}
										onChange={handleChange}
										placeholder="budi@email.com"
										className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0f1220] text-sm text-[#11162b] dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-[#0b63f6]/30 focus:border-[#0b63f6] transition-all"
									/>
								</div>
							</div>

							{/* Message */}
							<div className="space-y-1.5 text-left">
								<label
									htmlFor="contact-message"
									className="text-xs font-bold uppercase tracking-wider text-[#67718e] dark:text-neutral-400"
								>
									Pesan
								</label>
								<textarea
									id="contact-message"
									name="message"
									required
									rows={5}
									value={form.message}
									onChange={handleChange}
									placeholder="Ceritakan kebutuhan camping Anda, pertanyaan tentang paket, atau request destinasi tertentu..."
									className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0f1220] text-sm text-[#11162b] dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-[#0b63f6]/30 focus:border-[#0b63f6] transition-all resize-none"
								/>
							</div>

							<div className="flex justify-end">
								<button
									type="submit"
									className="px-8 py-3 rounded-full bg-[#11162b] hover:bg-black dark:bg-[#0b63f6] dark:hover:bg-blue-700 text-white text-sm font-bold transition-all duration-200 shadow-md cursor-pointer flex items-center gap-2"
								>
									Kirim Pesan
									<svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
										<line x1="22" y1="2" x2="11" y2="13" />
										<polygon points="22 2 15 22 11 13 2 9 22 2" />
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
