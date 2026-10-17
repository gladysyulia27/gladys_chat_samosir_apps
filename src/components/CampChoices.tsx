import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface CampOption {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
}

const CAMP_OPTIONS: CampOption[] = [
	{
		id: "tent-camp",
		name: "Tent Camp",
		description:
			"Traditional open-air canvas camping with campfire gear, waterproof mats, and starry night setup.",
		price: 45,
		image:
			"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&auto=format&fit=crop&q=80",
	},
	{
		id: "glamping",
		name: "Glamping",
		description:
			"Luxury geodesic dome with plush queen bedding, private heated deck, and panoramic starry skylight.",
		price: 165,
		image:
			"https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=400&auto=format&fit=crop&q=80",
	},
	{
		id: "car-campi",
		name: "Car Campi",
		description:
			"Overland 4x4 expedition with heavy-duty rooftop pop-up tent, awning, and mobile camp kitchen.",
		price: 115,
		image:
			"https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&auto=format&fit=crop&q=80",
	},
	{
		id: "cabin-camp",
		name: "Cabin Camp",
		description:
			"Cozy handcrafted alpine timber cabin tucked in serene pine forests with stone wood-burning fireplace.",
		price: 195,
		image:
			"https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=400&auto=format&fit=crop&q=80",
	},
];

export default function CampChoices() {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const selected = CAMP_OPTIONS.find((camp) => camp.id === selectedId) ?? null;

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0d18] transition-colors">
			<div className="max-w-7xl mx-auto space-y-8">
				<div className="text-left">
					<p className="text-xs font-bold uppercase tracking-wider text-[#0b63f6]">Pilihan Camp</p>
					<h2 className="text-2xl sm:text-3xl font-extrabold text-[#11162b] dark:text-white tracking-tight mt-1">
						Pilih Jenis Camp Favoritmu
					</h2>
					<p className="text-xs sm:text-sm text-[#737c98] dark:text-neutral-400 mt-1">
						Tent Camp, Glamping, Car Campi, atau Cabin Camp — pilih sesuai gaya petualanganmu.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
					{CAMP_OPTIONS.map((camp) => {
						const isActive = selectedId === camp.id;
						return (
							<button
								key={camp.id}
								type="button"
								onClick={() => setSelectedId(camp.id)}
								className={`group text-left rounded-2xl overflow-hidden border transition-all cursor-pointer bg-white dark:bg-[#16192a] ${
									isActive
										? "border-[#0b63f6] shadow-lg shadow-blue-500/20 ring-2 ring-[#0b63f6]/30"
										: "border-neutral-200/80 dark:border-neutral-800 hover:shadow-md"
								}`}
							>
								<div className="relative h-40 overflow-hidden">
									<img
										src={camp.image}
										alt={camp.name}
										className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 text-[#0b63f6] text-xs font-bold shadow-sm">
										${camp.price}
									</span>
								</div>
								<div className="p-4 space-y-2">
									<h3 className="text-base font-bold text-[#11162b] dark:text-white">
										{camp.name}
									</h3>
									<p className="text-xs text-[#737c98] dark:text-neutral-400 line-clamp-3">
										{camp.description}
									</p>
									{isActive && (
										<span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
											Terpilih
										</span>
									)}
								</div>
							</button>
						);
					})}
				</div>

				{selected && (
					<div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/60 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
						<div>
							<p className="text-xs font-bold uppercase tracking-wider text-[#0b63f6]">
								Camp Dipilih
							</p>
							<h3 className="text-lg font-extrabold text-[#11162b] dark:text-white mt-1">
								{selected.name}
							</h3>
							<p className="text-xs text-[#737c98] dark:text-neutral-400 mt-1">
								{selected.description}
							</p>
						</div>
						<a
							href="#destinations-management"
							className="px-5 py-2.5 bg-[#0b63f6] hover:bg-[#0952cc] text-white text-xs font-bold rounded-full shadow-md shadow-blue-500/20 transition-all no-underline whitespace-nowrap"
						>
							Lihat Destinasi &rarr;
						</a>
					</div>
				)}
			</div>
		</section>
	);
}
