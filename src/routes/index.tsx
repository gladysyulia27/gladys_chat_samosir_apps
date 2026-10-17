import CamplyCommunity from "@/components/CamplyCommunity";
import CamplyFAQ from "@/components/CamplyFAQ";
import CamplyHero from "@/components/CamplyHero";
import CamplyMapSearch from "@/components/CamplyMapSearch";
import CamplyStatsAndBenefits from "@/components/CamplyStatsAndBenefits";
import CamplyTestimonials from "@/components/CamplyTestimonials";
import ScrollReveal from "@/components/ScrollReveal";
import { getProducts } from "@/lib/server/products";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { authClient } from "#/lib/auth-client";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const { data: session } = authClient.useSession();
	const role = (session?.user as { role?: string } | undefined)?.role;
	const isAdmin = role === "admin";

	const productsQuery = useQuery({
		queryKey: ["home", "products"],
		queryFn: async () => getProducts(),
	});

	const products = productsQuery.data ?? [];

	const scrollToSearch = () => {
		const el = document.getElementById("camp-map");
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<main className="w-full min-h-screen bg-white dark:bg-[#0a0d18] transition-colors">
			{/* SECTION 1: Camply Hero (Image 1) */}
			<ScrollReveal>
				<CamplyHero
					isAdmin={isAdmin}
					userEmail={session?.user?.email}
					onExploreClick={scrollToSearch}
				/>
			</ScrollReveal>

			{/* SECTION 2: Electric Blue Stats Banner & Benefits (Image 2) */}
			<ScrollReveal delay={80}>
				<CamplyStatsAndBenefits />
			</ScrollReveal>

			{/* SECTION 3: Interactive Destination Map & Search Bar (Image 3) */}
			<ScrollReveal delay={120}>
				<CamplyMapSearch products={products} />
			</ScrollReveal>

			{/* SECTION 4: Community Section with Camper Circle (Image 4) */}
			<ScrollReveal delay={80}>
				<CamplyCommunity />
			</ScrollReveal>

			{/* SECTION 5: Testimonials Slider (Image 5) */}
			<ScrollReveal delay={100}>
				<CamplyTestimonials />
			</ScrollReveal>

			{/* SECTION 6: FAQ & Email Inquiry Section (Image 6) */}
			<ScrollReveal delay={120}>
				<CamplyFAQ />
			</ScrollReveal>
		</main>
	);
}
