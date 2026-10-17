import CamplyContact from "@/components/CamplyContact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
	component: ContactPage,
});

function ContactPage() {
	return (
		<main className="w-full min-h-[calc(100vh-80px)] bg-white dark:bg-[#0a0d18] transition-colors py-8 sm:py-12">
			<CamplyContact />
		</main>
	);
}
