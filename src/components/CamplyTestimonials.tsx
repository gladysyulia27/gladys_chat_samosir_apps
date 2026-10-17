import { type TouchEvent, useRef, useState } from "react";

const TESTIMONIALS = [
	{
		id: 1,
		quote: "With Camply I can now fulfill my dream of camping around the world.",
		name: "Wade Warren",
		role: "Photographer",
		avatar:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
		rating: 5,
	},
	{
		id: 2,
		quote: "I think this is the best camping service I have ever tried and I recommend it to you.",
		name: "Theresa Jordan",
		role: "Traveler",
		avatar:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
		rating: 5,
	},
	{
		id: 3,
		quote: "Camply helps me a lot in finding interesting camping destinations with clear guides.",
		name: "James Wilson",
		role: "Climber",
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
		rating: 5,
	},
	{
		id: 4,
		quote: "Fun, from the city of which not too far. Beautiful views, safe and cool.",
		name: "Jhon Tosan",
		role: "Adventurer",
		avatar:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
		rating: 5,
	},
];

export default function CamplyTestimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const touchStartX = useRef<number | null>(null);

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
	};

	const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
		touchStartX.current = event.changedTouches[0]?.clientX ?? null;
	};

	const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
		if (touchStartX.current === null) return;

		const distance = event.changedTouches[0]?.clientX - touchStartX.current;
		touchStartX.current = null;
		if (!distance || Math.abs(distance) < 45) return;
		if (distance < 0) handleNext();
		else handlePrev();
	};

	// Rotate cards based on currentIndex
	const displayedTestimonials = [
		...TESTIMONIALS.slice(currentIndex),
		...TESTIMONIALS.slice(0, currentIndex),
	];

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f9fafc] to-white dark:from-[#0a0d18] dark:to-[#101426] transition-colors relative overflow-hidden">
			<div className="max-w-7xl mx-auto space-y-12">
				{/* Header with Title and Arrow Buttons matching Image 5 */}
				<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
					<div className="text-left space-y-3">
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
							Satisfied Customers <br className="hidden sm:inline" />
							Are Our Best Ads.
						</h2>
					</div>

					{/* Arrow Buttons matching screenshot */}
					<div className="flex items-center gap-3">
						<button
							type="button"
							onClick={handlePrev}
							aria-label="Previous testimonials"
							className="w-12 h-12 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-[#11162b] dark:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
						>
							&larr;
						</button>
						<button
							type="button"
							onClick={handleNext}
							aria-label="Next testimonials"
							className="w-12 h-12 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-[#11162b] dark:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
						>
							&rarr;
						</button>
					</div>
				</div>

				{/* Testimonial Cards Grid */}
				<div
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
					className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 touch-pan-x md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-4"
				>
					{displayedTestimonials.map((item) => (
						<div
							key={item.id}
							className="min-w-[85vw] snap-center p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#161a2c] border border-neutral-100 dark:border-neutral-800 shadow-md shadow-slate-100 dark:shadow-none flex flex-col justify-between text-left space-y-6 hover:-translate-y-1 transition-transform md:min-w-0"
						>
							<div className="space-y-4">
								{/* Blue Quotation Mark Icon */}
								<span className="text-3xl font-serif font-black text-[#0b63f6] leading-none block">
									“
								</span>

								{/* Quote text */}
								<p className="text-sm font-semibold text-[#1e253e] dark:text-neutral-200 leading-relaxed min-h-[72px]">
									"{item.quote}"
								</p>
							</div>

							{/* Author Info */}
							<div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
								<div className="flex items-center gap-3">
									<img
										src={item.avatar}
										alt={item.name}
										className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100 dark:ring-neutral-700"
									/>
									<div>
										<p className="text-xs font-bold text-[#11162b] dark:text-white">{item.name}</p>
										<p className="text-[11px] text-[#828ba3] dark:text-neutral-400">{item.role}</p>
									</div>
								</div>

								{/* 5 Yellow Stars */}
								<div className="flex items-center gap-0.5 text-amber-400 text-xs pl-0.5">
									{"★".repeat(item.rating)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
