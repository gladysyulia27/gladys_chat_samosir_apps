import { useState } from "react";

interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

const FAQS: FAQItem[] = [
	{
		id: "what-is-camply",
		question: "What is Camply?",
		answer:
			"Camply is an all-in-one outdoor adventure and cabin reservation platform. We connect campers with over 1,000 verified campsites, eco-friendly cabins, and certified guides across the globe.",
	},
	{
		id: "how-to-book",
		question: "How to book tickets?",
		answer:
			"Simply browse our destinations, pick your check-in and check-out dates on the interactive map, select your camping gear or cabin package, and click 'Book Now' for instant confirmation.",
	},
	{
		id: "services-offered",
		question: "What kind of service will I get?",
		answer:
			"Every reservation includes 24/7 expert camp guide assistance, on-site safety briefing, emergency gear kit, clean sanitised facilities, campfire permits, and access to private camper community trails.",
	},
];

export default function CamplyFAQ() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [openId, setOpenId] = useState<string | null>("what-is-camply");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email.trim() || !email.includes("@")) return;
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 4000);
		setEmail("");
	};

	const toggleFAQ = (id: string) => {
		setOpenId((prev) => (prev === id ? null : id));
	};

	return (
		<section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#fcfdff] to-white dark:from-[#0a0d18] dark:via-[#0f1323] dark:to-[#0a0d18] transition-colors overflow-hidden">
			{/* Decorative Squiggle Doodle (Top Left matching screenshot) */}
			<div className="absolute top-8 left-4 sm:left-12 opacity-35 dark:opacity-20 pointer-events-none">
				<svg width="120" height="160" viewBox="0 0 120 160" fill="none" className="text-[#9cb3db]">
					<path
						d="M20 20 C45 10, 60 50, 40 75 C15 105, 30 145, 80 135"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="round"
					/>
				</svg>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
					{/* Left Column: Title, Subtitle, and Email Input */}
					<div className="lg:col-span-5 text-left space-y-6">
						<div className="space-y-3">
							<div className="inline-flex items-center gap-2">
								<h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#11162b] dark:text-white tracking-tight leading-tight">
									Got A Question <br />
									For Camply?
								</h2>
								{/* Orange Doodle Spark matching screenshot */}
								<span className="relative -top-6 -left-1">
									<svg viewBox="0 0 32 32" className="w-7 h-7 text-[#ff7043]" fill="none">
										<path
											d="M16 4 L18 13 L27 10 L20 17 L28 22 L18 21 L19 30 L13 22 L5 27 L9 18 L1 15 L10 13 Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
							</div>

							<p className="text-sm sm:text-base text-[#67718e] dark:text-neutral-400 max-w-sm leading-relaxed">
								If there are questions you want to ask, we will answer all your questions.
							</p>
						</div>

						{/* Newsletter / Question Email Submission Form matching screenshot */}
						<form onSubmit={handleSubmit} className="pt-2 max-w-md">
							<div className="relative flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#141829] shadow-sm hover:border-neutral-400 transition-colors p-1.5 focus-within:ring-2 focus-within:ring-[#0b63f6]/30">
								<input
									type="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter Your Email"
									className="flex-1 bg-transparent px-4 py-2.5 text-xs sm:text-sm text-[#11162b] dark:text-white placeholder:text-neutral-400 outline-none"
								/>
								<button
									type="submit"
									className="rounded-full bg-[#11162b] hover:bg-black text-white px-7 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer flex-shrink-0"
								>
									Submit
								</button>
							</div>

							{submitted && (
								<p className="mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
									<svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
											clipRule="evenodd"
										/>
									</svg>
									Thank you! We received your inquiry and will respond shortly.
								</p>
							)}
						</form>
					</div>

					{/* Right Column: FAQ Accordion List */}
					<div className="lg:col-span-7 text-left space-y-6 pt-2">
						<p className="text-sm sm:text-base text-[#67718e] dark:text-neutral-400 font-medium">
							Maybe your question is have been answered, check this out.
						</p>

						<div className="space-y-4">
							{FAQS.map((item) => {
								const isOpen = openId === item.id;
								return (
									<div
										key={item.id}
										className="border-b border-neutral-200/90 dark:border-neutral-800 pb-4 transition-colors"
									>
										<button
											type="button"
											onClick={() => toggleFAQ(item.id)}
											className="w-full flex items-center justify-between text-left py-2 text-base sm:text-lg font-bold text-[#11162b] dark:text-white hover:text-[#0b63f6] dark:hover:text-[#3b82f6] transition-colors cursor-pointer group"
										>
											<span className="flex-1 pr-4">{item.question}</span>
											<span className="text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/60 group-hover:text-[#0b63f6] transition-colors">
												{isOpen ? "−" : "+"}
											</span>
										</button>

										{isOpen && (
											<div className="pt-2 pb-1 text-xs sm:text-sm text-[#67718e] dark:text-neutral-300 leading-relaxed max-w-xl animate-fadeIn">
												{item.answer}
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Blue Stripe matching the bottom of the user's screenshot */}
			<div className="w-full h-4 bg-[#0b63f6] mt-16 rounded-t-xl" />
		</section>
	);
}
