import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import CampChoices from "@/components/CampChoices";
import CamplyCommunity from "@/components/CamplyCommunity";
import CamplyDashboardManager from "@/components/CamplyDashboardManager";
import CamplyFAQ from "@/components/CamplyFAQ";
import CamplyHero from "@/components/CamplyHero";
import CamplyMapSearch from "@/components/CamplyMapSearch";
import CamplyStatsAndBenefits from "@/components/CamplyStatsAndBenefits";
import CamplyTestimonials from "@/components/CamplyTestimonials";

import { getServerSession } from "@/lib/server/auth";
import { deleteProduct, getProducts } from "@/lib/server/products";
import { getUsers } from "@/lib/server/users";

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
	const { user } = Route.useRouteContext();
	const isAdmin = user.role === "admin";
	const queryClient = useQueryClient();
	const deleteFn = useServerFn(deleteProduct);

	const productsQuery = useQuery({
		queryKey: ["dashboard", "products"],
		queryFn: async () => getProducts(),
	});

	const usersQuery = useQuery({
		queryKey: ["dashboard", "users"],
		queryFn: async () => getUsers(),
		enabled: isAdmin,
	});

	const products = productsQuery.data ?? [];
	const users = usersQuery.data ?? [];
	const adminCount = users.filter((u) => u.role === "admin").length;

	const handleDeleteProduct = async (id: string) => {
		if (!window.confirm("Are you sure you want to delete this camping destination?")) {
			return;
		}
		try {
			await deleteFn({ data: { id } });
			await queryClient.invalidateQueries({ queryKey: ["dashboard", "products"] });
			await queryClient.invalidateQueries({ queryKey: ["products"] });
		} catch (err) {
			alert(err instanceof Error ? err.message : "Delete failed");
		}
	};

	const scrollToSearch = () => {
		const el = document.getElementById("destinations");
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<main className="w-full min-h-screen bg-white dark:bg-[#0a0d18] transition-colors">
			{/* SECTION 1: Hero with Smartphone in Hand Mockup (Image 1) */}
			<CamplyHero isAdmin={isAdmin} userEmail={user.email} onExploreClick={scrollToSearch} />

			{/* SECTION 2: Electric Blue Stats Banner & Benefits (Image 2) */}
			<CamplyStatsAndBenefits />

			{/* SECTION 3: Interactive Destination Map & Search Bar (Image 3) */}
			<CamplyMapSearch products={products} />

			{/* SECTION 4: Community Section with Camper Circle (Image 4) */}
			<CamplyCommunity />

			{/* SECTION 5: Testimonials Slider (Image 5) */}
			<CamplyTestimonials />

			{/* SECTION 6: FAQ & Email Inquiry Section */}
			<CamplyFAQ />

			{/* SECTION 7: Camp Choices */}
			<CampChoices />

			{/* SECTION 8: Live Camp Manager (Admin & User CRUD) */}
			<CamplyDashboardManager
				products={products}
				usersCount={users.length}
				adminCount={adminCount}
				isAdmin={isAdmin}
				userEmail={user.email}
				onDeleteProduct={handleDeleteProduct}
			/>
		</main>
	);
}
