import type { Product } from "@/lib/db";
import { useState } from "react";

interface CamplyMapSearchProps {
	products: Product[];
	onSelectProduct?: (product: Product) => void;
}

const DEFAULT_LOCATIONS = [
	{
		id: "denali",
		name: "Mount Denali Cabin",
		location: "Alaska Range, USA",
		price: 89,
		image:
			"https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=400&auto=format&fit=crop&q=80",
		coords: { x: "24%", y: "22%" },
	},
	{
		id: "toba",
		name: "Lake Toba Pine Forest",
		location: "Sumatra, Indonesia",
		price: 65,
		image:
			"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&auto=format&fit=crop&q=80",
		coords: { x: "68%", y: "58%" },
	},
	{
		id: "rainier",
		name: "Mount Rainier Alpine",
		location: "Washington, USA",
		price: 110,
		image:
			"https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&auto=format&fit=crop&q=80",
		coords: { x: "18%", y: "45%" },
	},
	{
		id: "alps",
		name: "Swiss Alps Meadow Camp",
		location: "Valais, Switzerland",
		price: 145,
		image:
			"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=400&auto=format&fit=crop&q=80",
		coords: { x: "50%", y: "30%" },
	},
	{
		id: "yosemite",
		name: "Yosemite Valley Stargaze",
		location: "California, USA",
		price: 95,
		image:
			"https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=400&auto=format&fit=crop&q=80",
		coords: { x: "32%", y: "65%" },
	},
];

export default function CamplyMapSearch({ products, onSelectProduct }: CamplyMapSearchProps) {
	const allLocations = [
		...DEFAULT_LOCATIONS,
		...(products ?? []).map((p) => ({
			id: p.id,
			name: p.name,
			location: p.description || "Scenic Campsite",
			price: Number(p.price),
			image:
				"https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=400&auto=format&fit=crop&q=80",
			coords: { x: "50%", y: "45%" },
		})),
	];

	const [selectedLocation, setSelectedLocation] = useState(DEFAULT_LOCATIONS[0].name);
	const [selectedDate, setSelectedDate] = useState("18 - 22 Oct");
	const [activePin, setActivePin] = useState(DEFAULT_LOCATIONS[0]);

	return (
		<section
			id="destinations"
			className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f7f9fd] to-white dark:from-[#0c0f1d] dark:via-[#11162b] dark:to-[#0c0f1d] transition-colors relative"
		>
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					{/* Left Column: Interactive Dotted World Map with Pins */}
					<div className="lg:col-span-7 relative flex items-center justify-center p-4">
						{/* Dotted Map Canvas Background */}
						<div className="relative w-full aspect-[4/3] max-w-[580px] rounded-3xl bg-neutral-50/70 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/40 p-6 flex items-center justify-center overflow-hidden shadow-sm">
							{/* Dotted Hexagon Grid Map SVG */}
							<svg
								viewBox="0 0 800 500"
								className="w-full h-full opacity-35 dark:opacity-20 text-[#253259] fill-current pointer-events-none"
							>
								<pattern
									id="dotPattern"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<circle cx="3" cy="3" r="1.5" />
								</pattern>
								<rect width="800" height="500" fill="url(#dotPattern)" />
								{/* Stylized Continents Outlines */}
								<path
									d="M80 120 C140 90, 220 100, 280 160 C240 220, 160 260, 100 240 Z M380 100 C480 80, 560 120, 620 200 C560 280, 440 260, 390 180 Z M180 320 C240 300, 270 380, 220 440 C170 420, 150 360, 180 320 Z M520 320 C600 300, 680 360, 640 440 C580 430, 540 380, 520 320 Z"
									fill="#e2e8f0"
									className="dark:fill-[#1e293b] opacity-50"
								/>
							</svg>

							{/* Interactive Pins */}
							{DEFAULT_LOCATIONS.map((loc) => {
								const isCurrent = activePin.id === loc.id;
								return (
									<div
										key={loc.id}
										style={{ left: loc.coords.x, top: loc.coords.y }}
										className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
										onClick={() => {
											setActivePin(loc);
											setSelectedLocation(loc.name);
										}}
									>
										{/* Pulsing Beacon Dot */}
										<div className="relative flex items-center justify-center">
											<span
												className={`absolute w-12 h-12 rounded-full ${isCurrent ? "bg-[#ff7043]/30 animate-ping" : "bg-blue-400/20 group-hover:bg-[#ff7043]/30"}`}
											/>

											{/* Pin Thumbnail Badge matching screenshot */}
											<div
												className={`relative p-1 rounded-full bg-white dark:bg-neutral-800 shadow-md transition-transform duration-300 ${isCurrent ? "scale-125 ring-2 ring-[#ff7043]" : "group-hover:scale-110"}`}
											>
												<img
													src={loc.image}
													alt={loc.name}
													className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
												/>
												{/* Little pointer triangle underneath */}
												<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-neutral-800 rotate-45 shadow-xs" />
											</div>
										</div>

										{/* Floating Tooltip info on hover or active */}
										{isCurrent && (
											<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-[#11162b] text-white text-[11px] font-semibold rounded-xl whitespace-nowrap shadow-xl z-30 animate-fade-in">
												<span>{loc.name}</span>
												<span className="text-[#ffd166] ml-2">${loc.price}/night</span>
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>

					{/* Right Column: Search Bar & Copy */}
					<div className="lg:col-span-5 text-left space-y-6">
						{/* Delicate doodle line */}
						<svg viewBox="0 0 120 40" fill="none" className="w-20 h-6 text-[#0b63f6]">
							<path
								d="M10 30 C40 10, 80 35, 110 15"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeDasharray="4 4"
							/>
						</svg>

						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#11162b] dark:text-white tracking-tight leading-tight">
							Forest, Starry Night, <br />
							Campfire, What Else <br />
							Do You Need?
						</h2>

						<p className="text-sm sm:text-base text-[#67718e] dark:text-neutral-400 max-w-md">
							Explore more than 1k camping destinations, find your most comfortable place to camp
							and book now.
						</p>

						{/* Floating Search Pill Bar matching Image 3 */}
						<div className="p-3 sm:p-4 rounded-3xl bg-white dark:bg-[#181a2b] border border-neutral-200/80 dark:border-neutral-700 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
							{/* Location Input / Dropdown */}
							<div className="flex-1 flex items-center gap-3 px-3 py-1 sm:border-r border-neutral-200 dark:border-neutral-700">
								<div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950/40 text-[#ff7043] flex items-center justify-center flex-shrink-0">
									<svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
										<path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
								</div>
								<div className="text-left min-w-0">
									<label
										htmlFor="search-location-select"
										className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider"
									>
										Location ▾
									</label>
									<select
										id="search-location-select"
										value={selectedLocation}
										onChange={(e) => {
											const val = e.target.value;
											setSelectedLocation(val);
											const found = allLocations.find((l) => l.name === val);
											if (found) {
												setActivePin(found);
												const matchedProduct = products?.find((p) => p.name === val);
												if (matchedProduct && onSelectProduct) {
													onSelectProduct(matchedProduct);
												}
											}
										}}
										className="text-xs font-bold text-[#11162b] dark:text-white bg-transparent outline-none w-full cursor-pointer truncate"
									>
										{allLocations.map((loc) => (
											<option key={loc.id} value={loc.name} className="dark:bg-neutral-800">
												{loc.name}
											</option>
										))}
									</select>
								</div>
							</div>

							{/* Date Input */}
							<div className="flex-1 flex items-center gap-3 px-3 py-1">
								<div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950/40 text-[#ff7043] flex items-center justify-center flex-shrink-0">
									<svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
										<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
										<line x1="16" y1="2" x2="16" y2="6" />
										<line x1="8" y1="2" x2="8" y2="6" />
										<line x1="3" y1="10" x2="21" y2="10" />
									</svg>
								</div>
								<div className="text-left min-w-0">
									<label
										htmlFor="search-date-input"
										className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider"
									>
										Date ▾
									</label>
									<input
										id="search-date-input"
										type="text"
										value={selectedDate}
										onChange={(e) => setSelectedDate(e.target.value)}
										className="text-xs font-bold text-[#11162b] dark:text-white bg-transparent outline-none w-full"
									/>
								</div>
							</div>

							{/* Circular Navy Search Button */}
							<button
								type="button"
								onClick={() => {
									alert(`Searching for cabins in "${selectedLocation}" for "${selectedDate}"`);
								}}
								className="w-12 h-12 rounded-full bg-[#11162b] hover:bg-[#202747] text-white flex items-center justify-center shadow-md flex-shrink-0 cursor-pointer self-center transition-transform hover:scale-105"
							>
								<svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
									<circle cx="11" cy="11" r="8" />
									<line x1="21" y1="21" x2="16.65" y2="16.65" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
