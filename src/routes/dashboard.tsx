import { useQuery } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";

import CamplyMapSearch from "@/components/CamplyMapSearch";
import ScrollReveal from "@/components/ScrollReveal";

import { getServerSession } from "@/lib/server/auth";
import { getProducts } from "@/lib/server/products";

export const Route = createFileRoute("/dashboard")({
	beforeLoad: async () => {
		const { session, user } = await getServerSession();
		if (!session || !user) {
			throw redirect({
				to: "/demo/better-auth",
				search: { mode: "login" },
			});
		}
		return { session, user };
	},
	component: Dashboard,
});

function Dashboard() {
	const productsQuery = useQuery({
		queryKey: ["dashboard", "products"],
		queryFn: async () => getProducts(),
	});

	const products = productsQuery.data ?? [];

	return (
		<main className="w-full min-h-screen bg-white dark:bg-[#0a0d18] transition-colors">
			{/* Dashboard: map and destination choices only */}
			<div id="camp-map">
				<ScrollReveal>
					<CamplyMapSearch products={products} />
				</ScrollReveal>
			</div>
		</main>
	);
}
