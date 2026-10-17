import { Link } from "@tanstack/react-router";
import { authClient } from "#/lib/auth-client";

export default function BetterAuthHeader() {
	const { data: session, isPending } = authClient.useSession();

	if (isPending) {
		return (
			<div className="h-8 w-8 bg-neutral-100 dark:bg-neutral-800 animate-pulse rounded-full" />
		);
	}

	if (session?.user) {
		const role = (session.user as { role?: string }).role;
		const isAdmin = role === "admin";
		return (
			<div className="flex items-center gap-2">
				{session.user.image ? (
					<img src={session.user.image} alt="" className="h-8 w-8 rounded-full" />
				) : (
					<div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-[var(--line)]">
						<span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
							{session.user.name?.charAt(0).toUpperCase() || "U"}
						</span>
					</div>
				)}
				<div className="hidden sm:flex flex-col text-left mr-1">
					<span className="text-xs font-medium text-[var(--sea-ink)] leading-none truncate max-w-[120px]">
						{session.user.name ?? session.user.email}
					</span>
					<span
						className={`text-[10px] uppercase font-bold tracking-wider leading-none mt-1 ${
							isAdmin ? "text-purple-600 dark:text-purple-400" : "text-[var(--sea-ink-soft)]"
						}`}
					>
						{isAdmin ? "Admin" : "User"}
					</span>
				</div>
				<button
					type="button"
					onClick={() => {
						void authClient.signOut({
							fetchOptions: {
								onSuccess: () => {
									window.location.href = "/";
								},
							},
						});
					}}
					className="h-8 px-3 text-xs font-medium bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors"
				>
					Sign out
				</button>
			</div>
		);
	}

	return (
		<Link
			to="/demo/better-auth"
			className="h-8 px-3 text-xs font-medium bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors inline-flex items-center"
		>
			Sign in
		</Link>
	);
}
