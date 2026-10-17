import { getServerSession } from "@/lib/server/auth";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
	beforeLoad: async () => {
		const { session } = await getServerSession();
		if (session) {
			throw redirect({ to: "/dashboard" });
		}
		throw redirect({
			to: "/demo/better-auth",
			search: { mode: "login" },
		});
	},
});
