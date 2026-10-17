import RocketIllustration from "@/components/RocketIllustration";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "#/lib/auth-client";

export const Route = createFileRoute("/demo/better-auth")({
	validateSearch: (search: Record<string, unknown>): { mode?: string } => ({
		mode: typeof search.mode === "string" ? search.mode : undefined,
	}),
	component: BetterAuthDemo,
});

function BetterAuthDemo() {
	const navigate = useNavigate();
	const search = Route.useSearch();
	const { data: session, isPending } = authClient.useSession();
	const [isSignUp, setIsSignUp] = useState(search.mode !== "login");
	const [firstName, setFirstName] = useState("");
	const [secondName, setSecondName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	if (isPending) {
		return (
			<main className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
				<div className="h-7 w-7 animate-spin rounded-full border-2 border-neutral-300 border-t-[#313966] dark:border-neutral-700 dark:border-t-indigo-400" />
			</main>
		);
	}

	if (session?.user) {
		const role = (session.user as { role?: string }).role;
		const isAdmin = role === "admin";
		return (
			<main className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-8 bg-[#f5f7fc] dark:bg-[#0e101d]">
				<section className="w-full max-w-md space-y-6 bg-white dark:bg-[#181a2b] p-8 rounded-3xl border border-[#e4e7f2] dark:border-[#252942] shadow-xl">
					<div className="space-y-1.5 text-center">
						<p className="island-kicker mb-1">Better Auth</p>
						<h1 className="text-2xl font-bold text-[#2d3460] dark:text-white">Welcome back</h1>
						<p className="text-xs text-[var(--sea-ink-soft)]">
							You're currently signed in as {session.user.email}
						</p>
					</div>

					<div className="flex items-center gap-3 p-4 rounded-2xl border border-[var(--line)] bg-[var(--chip-bg)]">
						{session.user.image ? (
							<img
								src={session.user.image}
								alt=""
								className="h-11 w-11 rounded-full object-cover"
							/>
						) : (
							<div className="h-11 w-11 rounded-full bg-[#313966] text-white flex items-center justify-center font-bold text-base shadow-sm">
								{session.user.name?.charAt(0).toUpperCase() || "U"}
							</div>
						)}
						<div className="flex-1 min-w-0">
							<p className="text-sm font-semibold truncate text-[var(--sea-ink)]">
								{session.user.name ?? "User"}
							</p>
							<p className="text-xs text-[var(--sea-ink-soft)] truncate">{session.user.email}</p>
						</div>
						<span
							className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
								isAdmin
									? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
									: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
							}`}
						>
							{isAdmin ? "Admin" : "User"}
						</span>
					</div>

					<div className="space-y-2.5 pt-2">
						<Link
							to="/dashboard"
							className="block w-full py-3 px-4 bg-[#313966] hover:bg-[#252c52] text-white text-center font-semibold text-sm rounded-xl shadow-[0_8px_20px_-4px_rgba(49,57,102,0.35)] transition-all no-underline"
						>
							Go to Dashboard &rarr;
						</Link>
						<Link
							to="/products"
							className="block w-full py-3 px-4 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-[#2d3460] dark:text-neutral-200 text-center font-semibold text-sm rounded-xl transition-all no-underline"
						>
							View Products
						</Link>
						<button
							type="button"
							onClick={() => {
								void authClient.signOut({
									fetchOptions: {
										onSuccess: () => {
											window.location.reload();
										},
									},
								});
							}}
							className="block w-full py-3 px-4 border border-[var(--line)] bg-transparent hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 text-[var(--sea-ink-soft)] text-center font-medium text-sm rounded-xl transition-all cursor-pointer"
						>
							Sign out
						</button>
					</div>
				</section>
			</main>
		);
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			if (isSignUp) {
				const fullName =
					[firstName, secondName].filter(Boolean).join(" ") || username || email.split("@")[0];

				if (!email || !password) {
					setError("Email and password are required.");
					setLoading(false);
					return;
				}

				const result = await authClient.signUp.email({
					email,
					password,
					name: fullName,
				});
				if (result.error) {
					setError(result.error.message || "Registration failed");
					return;
				}
				navigate({ to: "/dashboard" });
			} else {
				if (!email || !password) {
					setError("Email and password are required.");
					setLoading(false);
					return;
				}

				const result = await authClient.signIn.email({
					email,
					password,
				});
				if (result.error) {
					setError(result.error.message || "Sign in failed");
					return;
				}
				navigate({ to: "/dashboard" });
			}
		} catch (err) {
			setError("An unexpected error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="min-h-[calc(100vh-80px)] py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-[#f3f5fa] dark:bg-[#0c0e1a] transition-colors">
			{/* Main Card Container */}
			<section className="max-w-4xl w-full bg-white dark:bg-[#181926] rounded-[32px] shadow-[0_20px_60px_-15px_rgba(20,25,50,0.12)] border border-[#e4e7f0] dark:border-[#222538] overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">
				{/* Left Column: Form Area */}
				<div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
					<div>
						{/* Brand Logo Header matching reference */}
						<div className="flex items-center gap-3 mb-8">
							<div className="relative w-8 h-8 flex-shrink-0">
								{/* Back square */}
								<div className="absolute top-1 left-1.5 w-6 h-6 rounded-[7px] bg-[#60699c] opacity-80 transform rotate-[-8deg]" />
								{/* Front square */}
								<div className="absolute top-0 left-0 w-6 h-6 rounded-[7px] bg-[#313966] shadow-sm transform rotate-[-2deg]" />
							</div>
							<span className="text-base font-bold tracking-tight text-[#2c335a] dark:text-neutral-100">
								yourtext
							</span>
						</div>

						{/* Form Title */}
						<h1 className="text-3xl sm:text-4xl font-bold text-[#323963] dark:text-white tracking-tight mb-8">
							{isSignUp ? "Registration Form" : "Sign In Form"}
						</h1>

						{/* Error Alert */}
						{error && (
							<div className="mb-6 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-400 text-xs font-medium">
								{error}
							</div>
						)}

						{/* Form Fields with Underline Style */}
						<form onSubmit={handleSubmit} className="space-y-6">
							{isSignUp ? (
								<>
									{/* Row 1: First Name & Second Name */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
										<div className="space-y-1">
											<label
												htmlFor="firstName"
												className="text-xs font-medium text-[#8b93a7] dark:text-neutral-400 block"
											>
												First Name
											</label>
											<input
												id="firstName"
												type="text"
												value={firstName}
												onChange={(e) => setFirstName(e.target.value)}
												placeholder="Name"
												className="w-full border-b border-[#dcdfe8] dark:border-neutral-700 focus:border-[#313966] dark:focus:border-indigo-400 pb-2 text-sm font-semibold text-[#272e4d] dark:text-neutral-100 bg-transparent outline-none transition-colors placeholder:text-[#272e4d] dark:placeholder:text-neutral-300 placeholder:font-bold"
											/>
										</div>

										<div className="space-y-1">
											<label
												htmlFor="secondName"
												className="text-xs font-medium text-[#8b93a7] dark:text-neutral-400 block"
											>
												Second Name
											</label>
											<input
												id="secondName"
												type="text"
												value={secondName}
												onChange={(e) => setSecondName(e.target.value)}
												placeholder="Name"
												className="w-full border-b border-[#dcdfe8] dark:border-neutral-700 focus:border-[#313966] dark:focus:border-indigo-400 pb-2 text-sm font-semibold text-[#272e4d] dark:text-neutral-100 bg-transparent outline-none transition-colors placeholder:text-[#272e4d] dark:placeholder:text-neutral-300 placeholder:font-bold"
											/>
										</div>
									</div>

									{/* Row 2: Username */}
									<div className="space-y-1">
										<label
											htmlFor="username"
											className="text-xs font-medium text-[#8b93a7] dark:text-neutral-400 block"
										>
											Username
										</label>
										<input
											id="username"
											type="text"
											value={username}
											onChange={(e) => setUsername(e.target.value)}
											className="w-full border-b border-[#dcdfe8] dark:border-neutral-700 focus:border-[#313966] dark:focus:border-indigo-400 pb-2 text-sm font-semibold text-[#272e4d] dark:text-neutral-100 bg-transparent outline-none transition-colors"
										/>
									</div>

									{/* Row 3: Email */}
									<div className="space-y-1">
										<label
											htmlFor="email"
											className="text-xs font-medium text-[#8b93a7] dark:text-neutral-400 block"
										>
											Email
										</label>
										<input
											id="email"
											type="email"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className="w-full border-b border-[#dcdfe8] dark:border-neutral-700 focus:border-[#313966] dark:focus:border-indigo-400 pb-2 text-sm font-semibold text-[#272e4d] dark:text-neutral-100 bg-transparent outline-none transition-colors"
										/>
									</div>

									{/* Row 4: Password */}
									<div className="space-y-1">
										<label
											htmlFor="password"
											className="text-xs font-medium text-[#8b93a7] dark:text-neutral-400 block"
										>
											Password
										</label>
										<input
											id="password"
											type="password"
											required
											minLength={8}
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="w-full border-b border-[#dcdfe8] dark:border-neutral-700 focus:border-[#313966] dark:focus:border-indigo-400 pb-2 text-sm font-semibold text-[#272e4d] dark:text-neutral-100 bg-transparent outline-none transition-colors"
										/>
									</div>

									{/* Row 5: Phone Number */}
									<div className="space-y-1">
										<label
											htmlFor="phoneNumber"
											className="text-xs font-medium text-[#8b93a7] dark:text-neutral-400 block"
										>
											Phone Number
										</label>
										<input
											id="phoneNumber"
											type="tel"
											value={phoneNumber}
											onChange={(e) => setPhoneNumber(e.target.value)}
											className="w-full border-b border-[#dcdfe8] dark:border-neutral-700 focus:border-[#313966] dark:focus:border-indigo-400 pb-2 text-sm font-semibold text-[#272e4d] dark:text-neutral-100 bg-transparent outline-none transition-colors"
										/>
									</div>
								</>
							) : (
								<>
									{/* Sign In Fields */}
									<div className="space-y-1">
										<label
											htmlFor="loginEmail"
											className="text-xs font-medium text-[#8b93a7] dark:text-neutral-400 block"
										>
											Email
										</label>
										<input
											id="loginEmail"
											type="email"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className="w-full border-b border-[#dcdfe8] dark:border-neutral-700 focus:border-[#313966] dark:focus:border-indigo-400 pb-2 text-sm font-semibold text-[#272e4d] dark:text-neutral-100 bg-transparent outline-none transition-colors"
										/>
									</div>

									<div className="space-y-1">
										<label
											htmlFor="loginPassword"
											className="text-xs font-medium text-[#8b93a7] dark:text-neutral-400 block"
										>
											Password
										</label>
										<input
											id="loginPassword"
											type="password"
											required
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											className="w-full border-b border-[#dcdfe8] dark:border-neutral-700 focus:border-[#313966] dark:focus:border-indigo-400 pb-2 text-sm font-semibold text-[#272e4d] dark:text-neutral-100 bg-transparent outline-none transition-colors"
										/>
									</div>
								</>
							)}

							{/* Pill-shaped Navy Submit Button */}
							<div className="pt-4">
								<button
									type="submit"
									disabled={loading}
									className="px-10 py-3.5 bg-[#313966] hover:bg-[#252c52] text-white rounded-full font-semibold text-sm shadow-[0_12px_24px_-6px_rgba(49,57,102,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-50"
								>
									{loading ? (
										<span className="flex items-center gap-2">
											<span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
											<span>Processing...</span>
										</span>
									) : isSignUp ? (
										"Register"
									) : (
										"Sign In"
									)}
								</button>
							</div>
						</form>
					</div>

					{/* Switch between Register and Sign In */}
					<div className="mt-8 pt-4 border-t border-neutral-100 dark:border-neutral-800">
						<button
							type="button"
							onClick={() => {
								setIsSignUp(!isSignUp);
								setError("");
							}}
							className="text-xs font-medium text-[#656e85] dark:text-neutral-400 hover:text-[#313966] dark:hover:text-white transition-colors cursor-pointer"
						>
							{isSignUp ? (
								<>
									Already have an account?{" "}
									<span className="font-semibold underline underline-offset-4 text-[#313966] dark:text-indigo-400">
										Sign In
									</span>
								</>
							) : (
								<>
									Don't have an account?{" "}
									<span className="font-semibold underline underline-offset-4 text-[#313966] dark:text-indigo-400">
										Register
									</span>
								</>
							)}
						</button>
					</div>
				</div>

				{/* Right Column: Rocket Space Illustration */}
				<div className="lg:col-span-5 relative w-full h-full min-h-[420px] lg:min-h-full flex items-stretch">
					<RocketIllustration />
				</div>
			</section>
		</main>
	);
}
