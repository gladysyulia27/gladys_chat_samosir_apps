import CamplyDashboardOverview from "@/components/CamplyDashboardOverview";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
	return (
		<main className="w-full min-h-screen bg-white dark:bg-[#0a0d18] transition-colors">
			<CamplyDashboardOverview />
		</main>
	);
}
