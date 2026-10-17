import { Link } from "@tanstack/react-router";
import { authClient } from "#/lib/auth-client";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	const { data: session } = authClient.useSession();
	const role = (session?.user as { role?: string } | undefined)?.role;
	const isAdmin = role === "admin";
	const isAuthenticated = !!session?.user;

	return (
		<header className="sticky top-0 z-50 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/95 dark:bg-[#0a0d18]/95 px-4 lg:px-8 backdrop-blur-md transition-colors">
			<nav className="max-w-7xl mx-auto flex items-center justify-between gap-4 py-3.5">
				{/* Brand Logo: Camply. with Blue Tent Icon matching Image 1 */}
				<Link
					to="/"
					className="inline-flex items-center gap-2 text-xl font-black text-[#11162b] dark:text-white no-underline tracking-tight flex-shrink-0"
				>
					{/* Blue Dome Tent Arch Icon */}
					<svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 flex-shrink-0">
						<path
							d="M18 4 C9 4, 3 13, 3 24 C3 29, 6 32, 10 32 C12.5 32, 14.5 28, 15.5 23 C16.5 17.5, 19.5 17.5, 20.5 23 C21.5 28, 23.5 32, 26 32 C30 32, 33 29, 33 24 C33 13, 27 4, 18 4 Z"
							fill="#0b63f6"
						/>
					</svg>
					<span className="font-extrabold text-xl">Camply.</span>
				</Link>

				{/* Nav Links matching Image 1: Home, About, Pricing v, Contact, Blog */}
				<div className="hidden md:flex items-center gap-7 text-sm font-semibold">
					<Link
						to="/"
						className="relative py-1 text-[#11162b] dark:text-white hover:text-[#0b63f6] transition-colors"
						activeProps={{
							className:
								"text-[#0b63f6] font-bold after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-[#0b63f6] after:rounded-full",
						}}
					>
						Home
					</Link>
					<a
						href="#destinations"
						className="py-1 text-[#667085] dark:text-neutral-400 hover:text-[#11162b] dark:hover:text-white transition-colors"
					>
						About
					</a>
					<a
						href="#destinations"
						className="py-1 text-[#667085] dark:text-neutral-400 hover:text-[#11162b] dark:hover:text-white transition-colors flex items-center gap-1"
					>
						Pricing <span className="text-[10px]">▾</span>
					</a>
					<Link
						to="/contact"
						className="relative py-1 text-[#667085] dark:text-neutral-400 hover:text-[#11162b] dark:hover:text-white transition-colors"
						activeProps={{
							className:
								"text-[#0b63f6] font-bold after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-[#0b63f6] after:rounded-full",
						}}
					>
						Contact
					</Link>
					<Link
						to="/dashboard"
						className="relative py-1 text-[#667085] dark:text-neutral-400 hover:text-[#11162b] dark:hover:text-white transition-colors"
						activeProps={{
							className:
								"text-[#0b63f6] font-bold after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-[#0b63f6] after:rounded-full",
						}}
					>
						Dashboard
					</Link>
					{isAuthenticated && (
						<a
							href="/dashboard#destinations-management"
							className="py-1 text-[#667085] dark:text-neutral-400 hover:text-[#11162b] dark:hover:text-white transition-colors"
						>
							Destinations
						</a>
					)}
					{isAdmin && (
						<Link
							to="/users"
							className="py-1 text-[#667085] dark:text-neutral-400 hover:text-[#11162b] dark:hover:text-white transition-colors"
							activeProps={{ className: "text-[#0b63f6] font-bold" }}
						>
							Users
						</Link>
					)}
				</div>

				{/* Right Side: Auth Action Buttons matching Image 1 */}
				<div className="flex items-center gap-3">
					{isAuthenticated ? (
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-2 pl-2">
								<div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-xs font-bold text-[#0b63f6]">
									{session.user.name?.[0]?.toUpperCase() ||
										session.user.email?.[0]?.toUpperCase() ||
										"U"}
								</div>
								<div className="hidden lg:flex flex-col text-left">
									<span className="text-xs font-semibold text-[#11162b] dark:text-white truncate max-w-[110px]">
										{session.user.name ?? session.user.email}
									</span>
									<span className="text-[10px] uppercase font-bold tracking-wider text-purple-600 dark:text-purple-400">
										{isAdmin ? "Admin" : "Camper"}
									</span>
								</div>
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
								className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
							>
								Sign out
							</button>
						</div>
					) : (
						<div className="flex items-center gap-2">
							{/* Login Pill Button from Image 1 */}
							<Link
								to="/demo/better-auth"
								search={{ mode: "login" }}
								className="px-5 py-2 rounded-full bg-[#11162b] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
							>
								Login
							</Link>
							{/* Register Pill Button from Image 1 */}
							<Link
								to="/demo/better-auth"
								search={{ mode: "register" }}
								className="px-5 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-[#11162b] dark:text-white text-xs sm:text-sm font-semibold transition-all duration-200"
							>
								Register
							</Link>
						</div>
					)}

					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}
