import type { Product } from "@/lib/db";
import { useEffect, useRef, useState } from "react";

interface CamplyMapSearchProps {
	products: Product[];
	onSelectProduct?: (product: Product) => void;
}

interface MapLocation {
	id: string;
	name: string;
	location: string;
	price: number;
	image: string;
	rating: number;
	coords: { x: string; y: string };
	lat: number;
	lng: number;
}

const DEFAULT_LOCATIONS: MapLocation[] = [
	{
		id: "denali",
		name: "Mount Denali Cabin",
		location: "Alaska Range, USA",
		price: 89,
		image:
			"https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
		rating: 4.9,
		coords: { x: "24%", y: "22%" },
		lat: 63.069,
		lng: -151.007,
	},
	{
		id: "toba",
		name: "Lake Toba Pine Forest",
		location: "Sumatra, Indonesia",
		price: 65,
		image:
			"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
		rating: 4.8,
		coords: { x: "68%", y: "58%" },
		lat: 2.6,
		lng: 98.8,
	},
	{
		id: "rainier",
		name: "Mount Rainier Alpine",
		location: "Washington, USA",
		price: 110,
		image:
			"https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop&q=80",
		rating: 4.7,
		coords: { x: "18%", y: "45%" },
		lat: 46.852,
		lng: -121.76,
	},
	{
		id: "alps",
		name: "Swiss Alps Meadow Camp",
		location: "Valais, Switzerland",
		price: 145,
		image:
			"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=80",
		rating: 4.9,
		coords: { x: "50%", y: "30%" },
		lat: 46.0,
		lng: 7.7,
	},
	{
		id: "yosemite",
		name: "Yosemite Valley Stargaze",
		location: "California, USA",
		price: 95,
		image:
			"https://images.unsplash.com/photo-1537905569824-f89f14cceb68?w=800&auto=format&fit=crop&q=80",
		rating: 4.8,
		coords: { x: "32%", y: "65%" },
		lat: 37.865,
		lng: -119.538,
	},
];

const FALLBACK_COORDS = [
	{ lat: 40.7128, lng: -74.006 },
	{ lat: 51.5074, lng: -0.1278 },
	{ lat: -33.8688, lng: 151.2093 },
];

declare global {
	interface Window {
		google?: any;
	}
}

const googleMapsApiKey = (import.meta as { env?: Record<string, string | undefined> }).env
	?.VITE_GOOGLE_MAPS_API_KEY;

export default function CamplyMapSearch({ products, onSelectProduct }: CamplyMapSearchProps) {
	const allLocations: MapLocation[] = [
		...DEFAULT_LOCATIONS,
		...(products ?? []).map((p, index) => {
			const fallback = FALLBACK_COORDS[index % FALLBACK_COORDS.length];
			return {
				id: p.id,
				name: p.name,
				location: p.description || "Scenic Campsite",
				price: Number(p.price),
				image:
					"https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&auto=format&fit=crop&q=80",
				rating: 4.6,
				coords: { x: "50%", y: "45%" },
				lat: fallback.lat,
				lng: fallback.lng,
			};
		}),
	];

	const [selectedLocation, setSelectedLocation] = useState(DEFAULT_LOCATIONS[0].name);
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedTime, setSelectedTime] = useState("");
	const [activePin, setActivePin] = useState<MapLocation>(DEFAULT_LOCATIONS[0]);

	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	const mapInstanceRef = useRef<any>(null);
	const markersRef = useRef<any[]>([]);

	const selectLocation = (loc: MapLocation) => {
		setActivePin(loc);
		setSelectedLocation(loc.name);
		const matchedProduct = products?.find((p) => p.name === loc.name);
		if (matchedProduct && onSelectProduct) {
			onSelectProduct(matchedProduct);
		}
	};

	// Load & update the interactive Google Map when an API key is available.
	// biome-ignore lint/correctness/useExhaustiveDependencies: map initialisation intentionally runs once per location set
	useEffect(() => {
		if (!googleMapsApiKey) return;
		const container = mapContainerRef.current;
		if (!container) return;

		let cancelled = false;

		const initMap = () => {
			if (cancelled || !window.google?.maps || !mapContainerRef.current) return;

			if (!mapInstanceRef.current) {
				mapInstanceRef.current = new window.google.maps.Map(mapContainerRef.current, {
					center: { lat: activePin.lat, lng: activePin.lng },
					zoom: 4,
					mapTypeControl: false,
					streetViewControl: false,
					fullscreenControl: true,
				});
			}

			// Clear previous markers
			markersRef.current.forEach((marker) => marker.setMap(null));
			markersRef.current = allLocations.map((loc) => {
				const marker = new window.google.maps.Marker({
					position: { lat: loc.lat, lng: loc.lng },
					map: mapInstanceRef.current,
					title: loc.name,
				});
				marker.addListener("click", () => selectLocation(loc));
				return marker;
			});
		};

		if (window.google?.maps) {
			initMap();
		} else {
			const existing = document.querySelector<HTMLScriptElement>('script[data-google-maps="true"]');
			if (existing) {
				existing.addEventListener("load", initMap);
			} else {
				const script = document.createElement("script");
				script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
					googleMapsApiKey,
				)}`;
				script.async = true;
				script.defer = true;
				script.dataset.googleMaps = "true";
				script.onload = initMap;
				document.head.appendChild(script);
			}
		}

		return () => {
			cancelled = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [googleMapsApiKey, allLocations.length]);

	// Keep the map centered on the active destination.
	useEffect(() => {
		if (!googleMapsApiKey || !mapInstanceRef.current) return;
		mapInstanceRef.current.panTo({ lat: activePin.lat, lng: activePin.lng });
		mapInstanceRef.current.setZoom(5);
	}, [activePin]);

	const embedQuery = encodeURIComponent(`${activePin.name}, ${activePin.location}`);
	const embedSrc = `https://www.google.com/maps?q=${embedQuery}&output=embed`;

	const openWhatsAppBooking = (location: MapLocation, date = selectedDate, time = selectedTime) => {
		const formattedDate = date
			? (() => {
					const [year, month, day] = date.split("-");
					return `${day}/${month}/${year}`;
				})()
			: "Belum ditentukan";
		const message = [
			"Halo Camply, saya ingin booking camp.",
			`Camp: ${location.name}`,
			`Lokasi: ${location.location}`,
			`Tanggal: ${formattedDate}`,
			`Jam: ${time || "Belum ditentukan"}`,
		].join("\n");
		const whatsappUrl = `https://wa.me/6281221910971?text=${encodeURIComponent(message)}`;

		window.open(whatsappUrl, "_blank", "noopener,noreferrer");
	};

	const handleBooking = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!selectedDate || !selectedTime) return;

		const selectedCamp =
			allLocations.find((location) => location.name === selectedLocation) ?? activePin;
		openWhatsAppBooking(selectedCamp);
	};

	return (
		<section
			id="camp-map"
			className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f7f9fd] to-white dark:from-[#0c0f1d] dark:via-[#11162b] dark:to-[#0c0f1d] transition-colors relative"
		>
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					{/* Left Column: Google Map */}
					<div className="lg:col-span-7 relative flex items-center justify-center p-4">
						<div className="relative w-full aspect-[4/3] max-w-[580px] rounded-3xl bg-neutral-50/70 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-700/40 p-3 flex items-center justify-center overflow-hidden shadow-sm">
							{googleMapsApiKey ? (
								<div ref={mapContainerRef} className="w-full h-full rounded-2xl overflow-hidden" />
							) : (
								<iframe
									title={`Google Maps - ${activePin.name}`}
									src={embedSrc}
									className="w-full h-full rounded-2xl border-0"
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								/>
							)}

							{/* Floating info badge */}
							<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl bg-white/95 dark:bg-[#11162b]/95 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-700 px-4 py-2.5 shadow-lg pointer-events-none">
								<div className="min-w-0">
									<p className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
										Selected destination
									</p>
									<p className="text-xs sm:text-sm font-bold text-[#11162b] dark:text-white truncate">
										{activePin.name}
									</p>
								</div>
								<span className="text-xs sm:text-sm font-black text-[#ff7043] whitespace-nowrap">
									${activePin.price}/night
								</span>
							</div>
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
							and book now. Powered by Google Maps for accurate location discovery.
						</p>

						{/* Floating Search Pill Bar matching Image 3 */}
						<form
							onSubmit={handleBooking}
							className="grid grid-cols-1 gap-3 rounded-3xl border border-neutral-200/80 bg-white p-3 shadow-xl shadow-slate-200/50 dark:border-neutral-700 dark:bg-[#181a2b] dark:shadow-none sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center sm:p-4"
						>
							{/* Location Input / Dropdown */}
							<div className="flex min-w-0 items-center gap-3 px-3 py-1 sm:border-r sm:border-neutral-200 dark:sm:border-neutral-700">
								<div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950/40 text-[#ff7043] flex items-center justify-center flex-shrink-0">
									<svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
										<path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
										<circle cx="12" cy="10" r="3" />
									</svg>
								</div>
								<div className="text-left min-w-0">
									<label
										htmlFor="search-location-select"
										className="block whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-neutral-400"
									>
										Location
									</label>
									<select
										id="search-location-select"
										value={selectedLocation}
										onChange={(e) => {
											const val = e.target.value;
											const found = allLocations.find((l) => l.name === val);
											if (found) {
												selectLocation(found);
											} else {
												setSelectedLocation(val);
											}
										}}
										className="w-full min-w-0 cursor-pointer truncate bg-transparent text-xs font-bold text-[#11162b] outline-none dark:text-white"
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
							<div className="flex min-w-0 items-center gap-3 px-3 py-1">
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
										className="block whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-neutral-400"
									>
										Date
									</label>
									<input
										id="search-date-input"
										type="date"
										value={selectedDate}
										onChange={(e) => setSelectedDate(e.target.value)}
										required
										aria-label="Pilih tanggal booking"
										className="w-full min-w-0 bg-transparent text-xs font-bold text-[#11162b] outline-none dark:text-white"
									/>
								</div>
							</div>

							{/* Time Input */}
							<div className="flex min-w-0 items-center gap-3 px-3 py-1 sm:border-r sm:border-neutral-200 dark:sm:border-neutral-700">
								<div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950/40 text-[#ff7043] flex items-center justify-center flex-shrink-0">
									<svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
										<circle cx="12" cy="12" r="9" />
										<path d="M12 7v5l3 2" />
									</svg>
								</div>
								<div className="text-left min-w-0">
									<label
										htmlFor="search-time-input"
										className="block whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-neutral-400"
									>
										Time
									</label>
									<input
										id="search-time-input"
										type="time"
										value={selectedTime}
										onChange={(e) => setSelectedTime(e.target.value)}
										required
										aria-label="Pilih jam booking"
										className="w-full min-w-0 bg-transparent text-xs font-bold text-[#11162b] outline-none dark:text-white"
									/>
								</div>
							</div>

							{/* Circular Navy Search Button */}
							<button
								type="submit"
								aria-label="Book Now via WhatsApp"
								className="flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center self-center rounded-full bg-[#11162b] text-white shadow-md transition-transform hover:scale-105 hover:bg-[#202747]"
							>
								<svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
									<circle cx="11" cy="11" r="8" />
									<line x1="21" y1="21" x2="16.65" y2="16.65" />
								</svg>
							</button>
						</form>

						<p className="text-[11px] text-neutral-400 dark:text-neutral-500">
							Tip: pilih destinasi dari kartu di bawah untuk memperbarui peta Google secara
							otomatis.
						</p>
					</div>
				</div>

				{/* Attractive destination cards consistent with home page */}
				<div className="mt-16">
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 text-left">
						<div>
							<p className="text-xs font-bold uppercase tracking-wider text-[#0b63f6]">
								Destinasi pilihan
							</p>
							<h3 className="text-2xl sm:text-3xl font-extrabold text-[#11162b] dark:text-white tracking-tight mt-1">
								Temukan camp terbaik untuk petualanganmu
							</h3>
						</div>
						<span className="text-xs text-neutral-500 dark:text-neutral-400">
							{allLocations.length} destinasi tersedia
						</span>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
						{allLocations.map((loc) => {
							const isActive = activePin.id === loc.id;
							return (
								<article
									key={loc.id}
									onClick={() => selectLocation(loc)}
									className={`group cursor-pointer rounded-3xl overflow-hidden border bg-white dark:bg-[#16192a] transition-all duration-300 ${
										isActive
											? "border-[#0b63f6] shadow-xl shadow-blue-500/20 ring-2 ring-[#0b63f6]/30 -translate-y-1"
											: "border-neutral-200/70 dark:border-neutral-800 shadow-xs hover:shadow-lg hover:-translate-y-1"
									}`}
								>
									<div className="relative h-44 overflow-hidden">
										<img
											src={loc.image}
											alt={loc.name}
											className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
										<span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 dark:bg-neutral-900/90 text-[#11162b] dark:text-white text-xs font-bold shadow-sm">
											★ {loc.rating.toFixed(1)}
										</span>
										<span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#ff7043] text-white text-xs font-black shadow-md">
											${loc.price}/night
										</span>
									</div>
									<div className="p-5 space-y-3">
										<div>
											<h4 className="text-base font-extrabold text-[#11162b] dark:text-white leading-snug">
												{loc.name}
											</h4>
											<p className="mt-1 text-xs text-[#737c98] dark:text-neutral-400 flex items-center gap-1.5">
												<svg
													viewBox="0 0 24 24"
													className="w-3.5 h-3.5 fill-none stroke-current stroke-2 flex-shrink-0"
												>
													<path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
													<circle cx="12" cy="10" r="3" />
												</svg>
												<span className="truncate">{loc.location}</span>
											</p>
										</div>
										<div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-3">
											<span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">
												{isActive ? "Sedang dilihat di peta" : "Klik untuk lihat di peta"}
											</span>
											<button
												type="button"
												onClick={(e) => {
													e.stopPropagation();
													openWhatsAppBooking(loc);
												}}
												className="px-3.5 py-1.5 rounded-full bg-[#11162b] hover:bg-[#202747] text-white text-xs font-bold shadow-sm transition-transform hover:scale-105 cursor-pointer"
											>
												Book Now
											</button>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
