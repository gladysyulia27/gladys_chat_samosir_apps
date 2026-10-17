export default function CamplyStatsAndBenefits() {
	return (
		<div className="w-full">
			{/* SECTION 2A: Electric Blue Stats Banner */}
			<section className="w-full bg-[#0b63f6] text-white py-10 sm:py-12 px-4 relative overflow-hidden shadow-inner">
				{/* Subtle geometric pattern overlay */}
				<div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

				<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20 relative z-10">
					{/* Stat 1 */}
					<div className="flex flex-col items-center sm:items-start sm:px-6 pt-4 sm:pt-0">
						<span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
							10
						</span>
						<span className="text-xs sm:text-sm font-medium text-blue-100 mt-2 text-center sm:text-left">
							Years of Experience
						</span>
					</div>

					{/* Stat 2 */}
					<div className="flex flex-col items-center sm:items-start sm:px-6 pt-4 sm:pt-0">
						<span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
							1K+
						</span>
						<span className="text-xs sm:text-sm font-medium text-blue-100 mt-2 text-center sm:text-left">
							Camping Destination
						</span>
					</div>

					{/* Stat 3 */}
					<div className="flex flex-col items-center sm:items-start sm:px-6 pt-4 sm:pt-0">
						<span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
							8K
						</span>
						<span className="text-xs sm:text-sm font-medium text-blue-100 mt-2 text-center sm:text-left">
							Happy Customer
						</span>
					</div>

					{/* Stat 4 */}
					<div className="flex flex-col items-center sm:items-start sm:px-6 pt-4 sm:pt-0">
						<span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
							4,2
						</span>
						<span className="text-xs sm:text-sm font-medium text-blue-100 mt-2 text-center sm:text-left">
							Overall Rating
						</span>
					</div>
				</div>
			</section>

			{/* SECTION 2B: Benefits Section ("That The Way To Camp!") */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0c0f1d] transition-colors relative overflow-hidden">
				{/* Background subtle hexagon dots */}
				<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

				<div className="max-w-7xl mx-auto relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
						{/* Title Column */}
						<div className="lg:col-span-4 text-left space-y-3">
							{/* Blue spark doodle */}
							<svg viewBox="0 0 32 32" className="w-8 h-8 text-[#0b63f6]">
								<path
									d="M16 2 L16 10 M16 22 L16 30 M2 16 L10 16 M22 16 L30 16 M6 6 L12 12 M20 20 L26 26 M6 26 L12 20 M20 12 L26 6"
									stroke="currentColor"
									strokeWidth="3"
									strokeLinecap="round"
								/>
							</svg>

							<h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#11162b] dark:text-white tracking-tight leading-tight">
								That The Way <br />
								To Camp!
							</h2>

							<p className="text-sm sm:text-base text-[#67718e] dark:text-neutral-400 max-w-sm">
								Try a variety of benefits when using our services.
							</p>
						</div>

						{/* 3 Benefit Cards Column */}
						<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
							{/* Card 1: Lot Of Choices */}
							<div className="p-6 rounded-3xl bg-neutral-50/80 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 hover:shadow-lg transition-all text-left space-y-4 group">
								{/* 3D Globe Icon */}
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 p-3 shadow-md shadow-sky-500/20 flex items-center justify-center transform group-hover:scale-105 transition-transform">
									<svg viewBox="0 0 48 48" className="w-10 h-10 text-white fill-current">
										<circle cx="24" cy="24" r="20" fill="#48cae4" />
										<path
											d="M12 18 C16 14, 26 14, 28 20 C30 26, 22 30, 20 36 C18 40, 10 38, 8 32 C6 26, 8 22, 12 18 Z"
											fill="#90e0ef"
										/>
										<path
											d="M28 24 C34 22, 40 26, 42 32 C38 38, 30 42, 24 44 C22 38, 22 32, 28 24 Z"
											fill="#0077b6"
										/>
										<ellipse
											cx="24"
											cy="24"
											rx="20"
											ry="8"
											fill="none"
											stroke="#ffffff"
											strokeWidth="1.5"
											opacity="0.6"
										/>
									</svg>
								</div>

								<h3 className="text-lg font-extrabold text-[#11162b] dark:text-white tracking-tight">
									Lot Of Choices
								</h3>
								<p className="text-xs sm:text-sm text-[#737c98] dark:text-neutral-400 leading-relaxed">
									We have 1K+ camping destination that working with us.
								</p>
							</div>

							{/* Card 2: Best Camp Guide */}
							<div className="p-6 rounded-3xl bg-neutral-50/80 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 hover:shadow-lg transition-all text-left space-y-4 group">
								{/* 3D Suitcase Icon */}
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 p-3 shadow-md shadow-orange-500/20 flex items-center justify-center transform group-hover:scale-105 transition-transform">
									<svg viewBox="0 0 48 48" className="w-10 h-10">
										{/* Handle */}
										<rect
											x="18"
											y="6"
											width="12"
											height="6"
											rx="2"
											fill="none"
											stroke="#ffffff"
											strokeWidth="2.5"
										/>
										{/* Trunk Body */}
										<rect
											x="8"
											y="12"
											width="32"
											height="26"
											rx="5"
											fill="#f77f00"
											stroke="#d62828"
											strokeWidth="1.5"
										/>
										{/* Straps */}
										<line
											x1="16"
											y1="12"
											x2="16"
											y2="38"
											stroke="#ffffff"
											strokeWidth="2.5"
											strokeDasharray="2 2"
										/>
										<line
											x1="32"
											y1="12"
											x2="32"
											y2="38"
											stroke="#ffffff"
											strokeWidth="2.5"
											strokeDasharray="2 2"
										/>
										{/* Sticker */}
										<circle cx="24" cy="24" r="4" fill="#fcbf49" />
									</svg>
								</div>

								<h3 className="text-lg font-extrabold text-[#11162b] dark:text-white tracking-tight">
									Best Camp Guide
								</h3>
								<p className="text-xs sm:text-sm text-[#737c98] dark:text-neutral-400 leading-relaxed">
									Our camp guide is ready to guide you anytime & anywhere.
								</p>
							</div>

							{/* Card 3: Easy Booking */}
							<div className="p-6 rounded-3xl bg-neutral-50/80 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 hover:shadow-lg transition-all text-left space-y-4 group">
								{/* 3D Ticket Icon */}
								<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 p-3 shadow-md shadow-blue-500/20 flex items-center justify-center transform group-hover:scale-105 transition-transform">
									<svg viewBox="0 0 48 48" className="w-10 h-10">
										{/* Boarding Pass Ticket */}
										<rect
											x="6"
											y="14"
											width="36"
											height="20"
											rx="3"
											fill="#3a86ff"
											stroke="#ffffff"
											strokeWidth="1.5"
										/>
										<text x="10" y="24" fill="#ffffff" fontSize="7" fontWeight="bold">
											CAMP PASS
										</text>
										<line
											x1="28"
											y1="14"
											x2="28"
											y2="34"
											stroke="#ffffff"
											strokeWidth="1.5"
											strokeDasharray="2 2"
										/>
										{/* Barcode */}
										<rect x="31" y="18" width="1.5" height="12" fill="#ffffff" />
										<rect x="34" y="18" width="2" height="12" fill="#ffffff" />
										<rect x="38" y="18" width="1.5" height="12" fill="#ffffff" />
									</svg>
								</div>

								<h3 className="text-lg font-extrabold text-[#11162b] dark:text-white tracking-tight">
									Easy Booking
								</h3>
								<p className="text-xs sm:text-sm text-[#737c98] dark:text-neutral-400 leading-relaxed">
									Instant reservations for cabins and camp gear with zero hassle.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
