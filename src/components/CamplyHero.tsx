export default function CamplyHero({
	isAdmin,
	userEmail,
	onExploreClick,
}: {
	isAdmin?: boolean;
	userEmail?: string | null;
	onExploreClick?: () => void;
}) {
	return (
		<section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#fbfcfe] via-[#f4f7fc] to-[#ffffff] dark:from-[#0a0d18] dark:via-[#101426] dark:to-[#0a0d18] transition-colors">
			{/* Ambient background glow and soft orbital circles */}
			<div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-3xl pointer-events-none" />
			<div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-orange-100/40 dark:bg-orange-900/10 blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					{/* Left Column: Hero Text & Call to Action */}
					<div className="lg:col-span-6 space-y-6 text-left">
						{/* Playful blue doodle swirl above heading */}
						<div className="relative inline-block">
							<svg viewBox="0 0 100 45" fill="none" className="w-16 h-8 text-[#0b63f6] -mb-2 ml-16">
								<path
									d="M10 35 C25 10, 45 5, 55 25 C65 42, 80 15, 95 10"
									stroke="currentColor"
									strokeWidth="3.5"
									strokeLinecap="round"
								/>
								<path
									d="M20 20 L25 10"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
								/>
								<path
									d="M32 15 L38 8"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
								/>
								<path
									d="M48 18 L50 6"
									stroke="currentColor"
									strokeWidth="2.5"
									strokeLinecap="round"
								/>
							</svg>

							{/* Big Catchy Title */}
							<h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#11162b] dark:text-white leading-[1.12] tracking-tight">
								Cabin In The <br className="hidden sm:inline" />
								Woods But In <br className="hidden sm:inline" />
								<span className="relative inline-block mt-1">
									A Good Way!
									{/* Hand-drawn orange underline brush matching screenshot */}
									<svg
										className="absolute -bottom-2 left-0 w-full h-3 text-[#ff7043]"
										viewBox="0 0 260 12"
										fill="none"
										preserveAspectRatio="none"
									>
										<path
											d="M4 8 C60 3, 170 3, 256 7"
											stroke="currentColor"
											strokeWidth="5"
											strokeLinecap="round"
										/>
									</svg>
								</span>
							</h1>
						</div>

						{/* Subtitle */}
						<p className="text-base sm:text-lg text-[#67718e] dark:text-neutral-300 max-w-lg leading-relaxed pt-2">
							Now you can enjoy camping anywhere and anytime and of course it's safe with us.
						</p>

						{/* Actions */}
						<div className="pt-2 flex flex-wrap items-center gap-4">
							<button
								type="button"
								onClick={onExploreClick}
								className="px-8 py-3.5 bg-[#11162b] hover:bg-[#202747] text-white rounded-full font-semibold text-sm shadow-[0_12px_24px_-6px_rgba(17,22,43,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
							>
								Get Started
							</button>
						</div>

						{/* User Status Badge */}
						{userEmail && (
							<div className="pt-2 flex items-center gap-2">
								<span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
								<span className="text-xs text-[#7e88a2] dark:text-neutral-400">
									Signed in as{" "}
									<strong className="text-[#11162b] dark:text-white">{userEmail}</strong>
									{isAdmin ? " (Administrator)" : " (Camp Enthusiast)"}
								</span>
							</div>
						)}
					</div>

					{/* Right Column: Hand Holding Smartphone Mockup */}
					<div className="lg:col-span-6 relative flex justify-center items-center">
						{/* Concentric dashed orbital ring behind phone */}
						<div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-blue-200/70 dark:border-blue-900/40 pointer-events-none animate-spin-slow" />
						<div className="absolute w-[320px] h-[320px] rounded-full border border-blue-100/60 dark:border-blue-900/20 pointer-events-none" />

						{/* Floating Fluffy Clouds */}
						<div className="absolute -top-4 -left-6 z-20 pointer-events-none drop-shadow-md">
							<svg
								viewBox="0 0 100 50"
								className="w-24 h-12 text-white dark:text-neutral-800 fill-current opacity-90"
							>
								<path d="M20 38 A14 14 0 0 1 20 18 A16 16 0 0 1 45 12 A18 18 0 0 1 78 18 A14 14 0 0 1 85 38 Z" />
							</svg>
						</div>
						<div className="absolute top-1/3 -right-8 z-20 pointer-events-none drop-shadow-md">
							<svg
								viewBox="0 0 100 50"
								className="w-20 h-10 text-white dark:text-neutral-800 fill-current opacity-85"
							>
								<path d="M20 38 A14 14 0 0 1 20 18 A16 16 0 0 1 45 12 A18 18 0 0 1 78 18 A14 14 0 0 1 85 38 Z" />
							</svg>
						</div>

						{/* Smartphone Container with 3D Hand silhouette effect */}
						<div className="relative z-10 w-[290px] sm:w-[320px] transition-transform duration-500 hover:scale-[1.02]">
							{/* Soft phone shadow */}
							<div className="absolute inset-x-6 -bottom-6 h-10 bg-black/25 dark:bg-black/50 blur-xl rounded-full" />

							{/* Phone Outer Shell */}
							<div className="relative rounded-[46px] p-3.5 bg-gradient-to-b from-[#252834] via-[#151722] to-[#0c0d14] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.45)] border-[4px] border-[#383d4f]">
								{/* Screen Bezel & Dynamic Island Notch */}
								<div className="relative bg-[#ffffff] dark:bg-[#151928] rounded-[36px] overflow-hidden border border-neutral-200 dark:border-neutral-700/60 aspect-[9/19] flex flex-col justify-between text-left select-none">
									{/* Top Notch / Status Bar */}
									<div className="px-5 pt-3 pb-1 flex justify-between items-center bg-white dark:bg-[#151928] text-xs font-semibold text-neutral-800 dark:text-neutral-200">
										<span>9:41</span>
										{/* Pill Notch */}
										<div className="w-20 h-4 bg-black rounded-full mx-auto" />
										<div className="flex items-center gap-1 text-[10px]">
											<span>5G</span>
											<span className="h-2.5 w-4 rounded-sm border border-current inline-block relative after:absolute after:right-0 after:top-0.5 after:bottom-0.5 after:w-2 after:bg-current" />
										</div>
									</div>

									{/* Mobile App Header */}
									<div className="px-4 py-2.5 flex items-center justify-between">
										<button
											type="button"
											className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300"
										>
											<svg
												viewBox="0 0 24 24"
												className="w-4 h-4 fill-none stroke-current stroke-2"
											>
												<line x1="4" y1="7" x2="20" y2="7" />
												<line x1="4" y1="12" x2="16" y2="12" />
												<line x1="4" y1="17" x2="12" y2="17" />
											</svg>
										</button>

										<div className="flex items-center gap-1.5">
											<img
												src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
												alt="Christian"
												className="w-7 h-7 rounded-full object-cover border border-white shadow-sm"
											/>
											<span className="text-xs font-bold text-neutral-800 dark:text-neutral-100">
												Christian
											</span>
										</div>
									</div>

									{/* Mobile App Body Content */}
									<div className="px-4 space-y-3 flex-1 overflow-hidden">
										<h2 className="text-base font-extrabold text-[#11162b] dark:text-white leading-tight">
											Create Your <br />
											Own Camp Story.
										</h2>

										{/* Section: Recommended */}
										<div className="space-y-1.5">
											<div className="flex justify-between items-center text-[10px]">
												<span className="font-bold text-neutral-700 dark:text-neutral-300">
													Recommended
												</span>
												<span className="text-[#0b63f6] font-semibold cursor-pointer">
													See All &gt;
												</span>
											</div>

											{/* Horizontal Mini Cards */}
											<div className="grid grid-cols-2 gap-2">
												{/* Card 1: Mount Denali */}
												<div className="rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-100 dark:border-neutral-700/60 shadow-xs">
													<div className="h-16 relative bg-gradient-to-tr from-amber-400 via-orange-300 to-sky-300 overflow-hidden flex items-center justify-center">
														{/* Mountain & Tent Illustration inside card */}
														<svg viewBox="0 0 100 60" className="w-full h-full object-cover">
															<polygon points="10,60 40,20 70,60" fill="#2d6a4f" opacity="0.8" />
															<polygon points="40,60 70,15 100,60" fill="#1b4332" />
															<polygon points="50,60 62,38 74,60" fill="#ff7043" />
														</svg>
														<span className="absolute top-1 right-1 px-1.5 py-0.5 rounded-full bg-white/90 text-[8px] font-bold text-neutral-800">
															★ 4.9
														</span>
													</div>
													<div className="p-1.5">
														<p className="text-[10px] font-bold text-neutral-900 dark:text-white truncate">
															Mount Denali
														</p>
														<p className="text-[8px] text-neutral-500 dark:text-neutral-400">
															$89 / night
														</p>
													</div>
												</div>

												{/* Card 2: Mount Lore */}
												<div className="rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-100 dark:border-neutral-700/60 shadow-xs">
													<div className="h-16 relative bg-gradient-to-tr from-teal-400 via-emerald-300 to-sky-200 overflow-hidden flex items-center justify-center">
														<svg viewBox="0 0 100 60" className="w-full h-full object-cover">
															<polygon points="0,60 30,25 60,60" fill="#1b4965" />
															<polygon points="35,60 65,18 95,60" fill="#2c7da0" />
															<rect x="55" y="42" width="16" height="18" fill="#ffd166" />
														</svg>
														<span className="absolute top-1 right-1 px-1.5 py-0.5 rounded-full bg-white/90 text-[8px] font-bold text-neutral-800">
															★ 4.8
														</span>
													</div>
													<div className="p-1.5">
														<p className="text-[10px] font-bold text-neutral-900 dark:text-white truncate">
															Mount Lore
														</p>
														<p className="text-[8px] text-neutral-500 dark:text-neutral-400">
															$65 / night
														</p>
													</div>
												</div>
											</div>
										</div>

										{/* Section: My Schedule */}
										<div className="space-y-1.5">
											<div className="flex justify-between items-center text-[10px]">
												<span className="font-bold text-neutral-700 dark:text-neutral-300">
													My Schedule
												</span>
												<span className="text-[#0b63f6] font-semibold cursor-pointer">
													See All &gt;
												</span>
											</div>

											{/* Schedule Card: Mount Elbrus */}
											<div className="p-2 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-100 dark:border-neutral-700/60 flex items-center gap-2">
												<div className="w-9 h-9 rounded-lg bg-emerald-500 overflow-hidden flex-shrink-0">
													<img
														src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=80&auto=format&fit=crop&q=80"
														alt="Elbrus"
														className="w-full h-full object-cover"
													/>
												</div>
												<div className="flex-1 min-w-0">
													<p className="text-[10px] font-bold text-neutral-900 dark:text-white truncate">
														Mount Elbrus
													</p>
													<p className="text-[8px] text-neutral-500">14 Oct • 3 Days</p>
												</div>
												<span className="px-2 py-0.5 rounded-full bg-[#0b63f6] text-white text-[8px] font-bold">
													Active
												</span>
											</div>
										</div>
									</div>

									{/* Mobile App Bottom Floating Dock */}
									<div className="p-2.5 bg-white/95 dark:bg-[#151928]/95 backdrop-blur-xs border-t border-neutral-100 dark:border-neutral-800 flex justify-around items-center relative">
										<button type="button" className="text-[#0b63f6]">
											<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
												<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
											</svg>
										</button>
										<button type="button" className="text-neutral-400">
											<svg
												viewBox="0 0 24 24"
												className="w-4 h-4 fill-none stroke-current stroke-2"
											>
												<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
											</svg>
										</button>

										{/* Center Prominent Orange Explore Button */}
										<button
											type="button"
											className="w-9 h-9 rounded-full bg-[#ff7043] text-white flex items-center justify-center shadow-md transform -translate-y-2"
										>
											<svg
												viewBox="0 0 24 24"
												className="w-4 h-4 fill-none stroke-current stroke-2"
											>
												<circle cx="11" cy="11" r="8" />
												<line x1="21" y1="21" x2="16.65" y2="16.65" />
											</svg>
										</button>

										<button type="button" className="text-neutral-400">
											<svg
												viewBox="0 0 24 24"
												className="w-4 h-4 fill-none stroke-current stroke-2"
											>
												<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
												<line x1="16" y1="2" x2="16" y2="6" />
												<line x1="8" y1="2" x2="8" y2="6" />
												<line x1="3" y1="10" x2="21" y2="10" />
											</svg>
										</button>
										<button type="button" className="text-neutral-400">
											<svg
												viewBox="0 0 24 24"
												className="w-4 h-4 fill-none stroke-current stroke-2"
											>
												<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
												<circle cx="12" cy="7" r="4" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
