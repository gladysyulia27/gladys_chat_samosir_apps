import { Link } from "@tanstack/react-router";

export default function CamplyCommunity() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0c0f1d] transition-colors relative overflow-hidden">
			{/* Ambient background glow */}
			<div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-blue-100/40 dark:bg-blue-900/10 blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					{/* Left Column: Copy & Button */}
					<div className="lg:col-span-5 text-left space-y-5">
						{/* Orange spark doodle */}
						<svg viewBox="0 0 32 32" className="w-8 h-8 text-[#ff7043]">
							<path
								d="M16 2 L16 10 M16 22 L16 30 M2 16 L10 16 M22 16 L30 16 M6 6 L12 12 M20 20 L26 26 M6 26 L12 20 M20 12 L26 6"
								stroke="currentColor"
								strokeWidth="3"
								strokeLinecap="round"
							/>
						</svg>

						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#11162b] dark:text-white tracking-tight leading-tight">
							Community Service <br />
							Is Calling, No Need <br />
							For Stalling.
						</h2>

						<p className="text-sm sm:text-base text-[#67718e] dark:text-neutral-400 max-w-md leading-relaxed">
							Want more fun camping, join our community to get friends to camp together and feel the
							sensation.
						</p>

						<div className="pt-2">
							<Link
								to="/dashboard"
								className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#11162b] hover:bg-[#222b4d] text-white rounded-full font-semibold text-sm shadow-[0_12px_24px_-6px_rgba(17,22,43,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer no-underline group"
							>
								<span>Join Community</span>
								<svg
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-4 h-4 transition-transform group-hover:translate-x-1"
								>
									<path
										fillRule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</Link>
						</div>
					</div>

					{/* Right Column: Social Campers Cluster matching Image 4 */}
					<div className="lg:col-span-7 relative flex items-center justify-center p-6">
						{/* Soft light card container */}
						<div className="relative w-full max-w-[540px] aspect-[16/11] rounded-[36px] bg-[#f4f7fd]/80 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-700/40 p-8 flex items-center justify-center overflow-hidden">
							{/* Subtle looped doodle line in background */}
							<svg
								viewBox="0 0 400 300"
								className="absolute inset-0 w-full h-full text-blue-200/60 dark:text-blue-900/40 stroke-current fill-none pointer-events-none"
							>
								<path
									d="M80 80 C180 20, 320 60, 340 180 C360 260, 200 280, 140 220 C80 160, 180 120, 240 160 C280 190, 290 260, 360 280"
									strokeWidth="2"
									strokeDasharray="4 4"
								/>
							</svg>

							{/* Center Main Camper Avatar */}
							<div className="relative z-20 flex flex-col items-center">
								{/* Speech Bubble "welcome!!" */}
								<div className="mb-2 px-3.5 py-1 bg-[#11162b] text-white text-[11px] font-bold rounded-full shadow-lg relative after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#11162b]">
									welcome!!
								</div>
								<div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-sky-200 p-1.5 shadow-xl ring-4 ring-white dark:ring-neutral-800">
									<img
										src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80"
										alt="Alex"
										className="w-full h-full rounded-full object-cover"
									/>
								</div>
							</div>

							{/* Surrounding Avatar 1 (Top Left, Green BG) */}
							<div className="absolute top-8 left-12 z-10 flex flex-col items-center group">
								<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 p-1 shadow-md ring-2 ring-white dark:ring-neutral-800 transition-transform group-hover:scale-110">
									<img
										src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80"
										alt="Emma"
										className="w-full h-full rounded-full object-cover"
									/>
								</div>
							</div>

							{/* Surrounding Avatar 2 (Top Right, Purple BG) with "Join Us!!" speech bubble */}
							<div className="absolute top-6 right-16 z-10 flex flex-col items-center group">
								<div className="mb-1 px-3 py-0.5 bg-[#11162b] text-white text-[9px] font-bold rounded-full shadow-md">
									Join Us!!
								</div>
								<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 p-1 shadow-md ring-2 ring-white dark:ring-neutral-800 transition-transform group-hover:scale-110">
									<img
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
										alt="Liam"
										className="w-full h-full rounded-full object-cover"
									/>
								</div>
							</div>

							{/* Surrounding Avatar 3 (Bottom Left, Pink/Peach BG) */}
							<div className="absolute bottom-10 left-16 z-10 group">
								<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-100 p-1 shadow-md ring-2 ring-white dark:ring-neutral-800 transition-transform group-hover:scale-110">
									<img
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
										alt="Sophia"
										className="w-full h-full rounded-full object-cover"
									/>
								</div>
							</div>

							{/* Surrounding Avatar 4 (Bottom Right, Yellow BG) with "Halo!!" */}
							<div className="absolute bottom-8 right-20 z-10 flex flex-col items-center group">
								<div className="mb-1 px-2.5 py-0.5 bg-[#11162b] text-white text-[9px] font-bold rounded-full shadow-md">
									Halo!!
								</div>
								<div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-amber-100 p-1 shadow-md ring-2 ring-white dark:ring-neutral-800 transition-transform group-hover:scale-110">
									<img
										src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
										alt="Lucas"
										className="w-full h-full rounded-full object-cover"
									/>
								</div>
							</div>

							{/* Floating Social Media Badges */}
							{/* Twitter / X badge */}
							<div className="absolute top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-neutral-800 shadow-md flex items-center justify-center text-[#1da1f2] z-30 transform -rotate-12 hover:scale-110 transition-transform">
								<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
									<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
								</svg>
							</div>

							{/* Instagram camera badge */}
							<div className="absolute top-1/2 left-4 -translate-y-1/2 w-9 h-9 rounded-full bg-white dark:bg-neutral-800 shadow-md flex items-center justify-center text-[#e1306c] z-30 transform rotate-6 hover:scale-110 transition-transform">
								<svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
								</svg>
							</div>

							{/* TikTok badge */}
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-neutral-800 shadow-md flex items-center justify-center text-[#000000] dark:text-white z-30 transform rotate-12 hover:scale-110 transition-transform">
								<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
									<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.34-6.32V8.71a8.31 8.31 0 0 0 4.9 1.59V6.85a4.84 4.84 0 0 1-1-.16z" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
