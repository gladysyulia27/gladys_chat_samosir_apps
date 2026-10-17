import type { Product } from "@/lib/db";
import { Link } from "@tanstack/react-router";
import {
	createColumnHelper,
	flexRender,
	rowSortingFeature,
	tableFeatures,
	useTable,
} from "@tanstack/react-table";
import { useState } from "react";

interface CamplyDashboardManagerProps {
	products: Product[];
	usersCount?: number;
	adminCount?: number;
	isAdmin: boolean;
	userEmail?: string;
	onDeleteProduct?: (id: string) => Promise<void>;
}

export default function CamplyDashboardManager({
	products,
	usersCount = 0,
	adminCount = 0,
	isAdmin,
	userEmail,
	onDeleteProduct,
}: CamplyDashboardManagerProps) {
	const [viewMode, setViewMode] = useState<"table" | "grid">("table");
	const [searchQuery, setSearchQuery] = useState("");

	const filteredProducts = products.filter(
		(p) =>
			p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			p.description.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const features = tableFeatures({ rowSortingFeature });
	const columnHelper = createColumnHelper<typeof features, Product>();

	const columns = columnHelper.columns([
		columnHelper.accessor("name", {
			header: "Destination / Camp",
			cell: (info) => (
				<div className="font-semibold text-[#11162b] dark:text-white">{info.getValue()}</div>
			),
		}),
		columnHelper.accessor("description", {
			header: "Description",
			cell: (info) => (
				<span className="text-xs text-[#737c98] dark:text-neutral-400 max-w-xs line-clamp-1">
					{info.getValue()}
				</span>
			),
		}),
		columnHelper.accessor("price", {
			header: "Price",
			cell: (info) => (
				<span className="font-bold text-[#0b63f6]">${Number(info.getValue()).toFixed(2)}</span>
			),
		}),
		columnHelper.accessor("stock", {
			header: "Stock",
			cell: (info) => (
				<span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
					{info.getValue()} left
				</span>
			),
		}),
		columnHelper.display({
			id: "actions",
			header: () => (isAdmin ? "Actions" : "Status"),
			cell: (info) => {
				const product = info.row.original as Product;
				if (!isAdmin) {
					return (
						<button
							type="button"
							onClick={() => alert(`Reserved "${product.name}"!`)}
							className="px-3 py-1 rounded-full bg-[#0b63f6] hover:bg-[#0952cc] text-white text-xs font-bold transition-all cursor-pointer"
						>
							Book
						</button>
					);
				}
				return (
					<div className="flex items-center gap-3">
						<Link
							to="/products/$productId"
							params={{ productId: product.id }}
							className="text-xs font-bold text-[#0b63f6] hover:underline"
						>
							Edit
						</Link>
						{onDeleteProduct && (
							<button
								type="button"
								onClick={() => onDeleteProduct(product.id)}
								className="text-xs font-bold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
							>
								Delete
							</button>
						)}
					</div>
				);
			},
		}),
	]);

	const table = useTable({
		features,
		columns,
		data: filteredProducts,
	});

	return (
		<section
			id="destinations-management"
			className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50/70 dark:bg-[#0c0e1a] border-t border-neutral-200/60 dark:border-neutral-800 transition-colors"
		>
			<div className="max-w-7xl mx-auto space-y-8">
				{/* Top Bar: Overview Header & Admin Actions */}
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
					<div>
						<div className="flex items-center gap-2.5">
							<span className="h-2.5 w-2.5 rounded-full bg-[#0b63f6]" />
							<p className="text-xs font-bold uppercase tracking-wider text-[#0b63f6]">
								Camp Destinations Dashboard
							</p>
						</div>
						<h2 className="text-2xl sm:text-3xl font-extrabold text-[#11162b] dark:text-white tracking-tight mt-1">
							{isAdmin ? "Destinations & Inventory Management" : "Explore Camping Destinations"}
						</h2>
						<p className="text-xs sm:text-sm text-[#737c98] dark:text-neutral-400">
							{isAdmin
								? `Kelola daftar destinasi dan paket kemah real-time sebagai ${userEmail ?? "administrator"}.`
								: "Pilih dan telusuri destinasi kemah pilihan terbaik."}
						</p>
					</div>

					<div className="flex flex-wrap items-center gap-3">
						{isAdmin && (
							<>
								<Link
									to="/products/new"
									className="px-5 py-2.5 bg-[#0b63f6] hover:bg-[#0952cc] text-white text-xs font-bold rounded-full shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5 no-underline"
								>
									<span>+</span> Add Destination
								</Link>
								<Link
									to="/users"
									className="px-5 py-2.5 bg-[#11162b] hover:bg-[#202747] text-white text-xs font-bold rounded-full shadow-md transition-all no-underline"
								>
									Manage Users
								</Link>
							</>
						)}
						<div className="flex items-center bg-white dark:bg-[#16192a] border border-neutral-200 dark:border-neutral-700 rounded-full p-1 shadow-xs">
							<button
								type="button"
								onClick={() => setViewMode("table")}
								className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
									viewMode === "table"
										? "bg-[#0b63f6] text-white shadow-xs"
										: "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900"
								}`}
							>
								Table View
							</button>
							<button
								type="button"
								onClick={() => setViewMode("grid")}
								className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
									viewMode === "grid"
										? "bg-[#0b63f6] text-white shadow-xs"
										: "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900"
								}`}
							>
								Card View
							</button>
						</div>
					</div>
				</div>

				{/* Quick Stats Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
					<div className="p-5 rounded-2xl bg-white dark:bg-[#16192a] border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
						<p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
							Active Destinations
						</p>
						<p className="text-2xl sm:text-3xl font-black text-[#11162b] dark:text-white mt-1">
							{products.length}
						</p>
						<span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 inline-block">
							● Synced with Database
						</span>
					</div>

					{isAdmin ? (
						<>
							<div className="p-5 rounded-2xl bg-white dark:bg-[#16192a] border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
								<p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
									Registered Users
								</p>
								<p className="text-2xl sm:text-3xl font-black text-[#11162b] dark:text-white mt-1">
									{usersCount}
								</p>
								<span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold mt-1 inline-block">
									User Management Active
								</span>
							</div>

							<div className="p-5 rounded-2xl bg-white dark:bg-[#16192a] border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
								<p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
									Administrators
								</p>
								<p className="text-2xl sm:text-3xl font-black text-[#11162b] dark:text-white mt-1">
									{adminCount}
								</p>
								<span className="text-[10px] text-purple-600 dark:text-purple-400 font-semibold mt-1 inline-block">
									Full Access Control
								</span>
							</div>
						</>
					) : (
						<>
							<div className="p-5 rounded-2xl bg-white dark:bg-[#16192a] border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
								<p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
									Your Membership
								</p>
								<p className="text-2xl sm:text-3xl font-black text-[#11162b] dark:text-white mt-1">
									Camper
								</p>
								<span className="text-[10px] text-emerald-600 font-semibold mt-1 inline-block">
									Verified Account
								</span>
							</div>

							<div className="p-5 rounded-2xl bg-white dark:bg-[#16192a] border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
								<p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
									Booking Access
								</p>
								<p className="text-2xl sm:text-3xl font-black text-[#11162b] dark:text-white mt-1">
									Instant
								</p>
								<span className="text-[10px] text-blue-600 font-semibold mt-1 inline-block">
									Zero Booking Fees
								</span>
							</div>
						</>
					)}

					<div className="p-5 rounded-2xl bg-white dark:bg-[#16192a] border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
						<p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
							TanStack Table
						</p>
						<p className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
							Live
						</p>
						<span className="text-[10px] text-neutral-500 font-semibold mt-1 inline-block">
							Integrated in Dashboard
						</span>
					</div>
				</div>

				{/* Search & Filter Bar */}
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
					<div className="relative w-full sm:w-80">
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Cari destinasi atau camp..."
							className="w-full px-4 py-2.5 pl-9 rounded-full bg-white dark:bg-[#16192a] border border-neutral-200 dark:border-neutral-700 text-xs text-[#11162b] dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0b63f6]/40"
						/>
						<svg
							className="w-4 h-4 text-neutral-400 absolute left-3 top-3 pointer-events-none"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>

					<p className="text-xs text-neutral-500 dark:text-neutral-400 self-end sm:self-center">
						Menampilkan <strong>{filteredProducts.length}</strong> destinasi
					</p>
				</div>

				{/* Table View */}
				{viewMode === "table" ? (
					<div className="overflow-x-auto rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#16192a] shadow-xs">
						<table className="w-full text-sm border-collapse text-left">
							<thead>
								{table.getHeaderGroups().map((headerGroup) => (
									<tr
										key={headerGroup.id}
										className="border-b border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40"
									>
										{headerGroup.headers.map((header) => (
											<th
												key={header.id}
												colSpan={header.colSpan}
												className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 select-none cursor-pointer"
												onClick={header.column.getToggleSortingHandler()}
											>
												<div className="flex items-center gap-1.5">
													{flexRender(header.column.columnDef.header, header.getContext())}
													{{
														asc: " ▲",
														desc: " ▼",
													}[header.column.getIsSorted() as string] ?? null}
												</div>
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/80">
								{table.getRowModel().rows.map((row) => (
									<tr
										key={row.id}
										className="hover:bg-neutral-50/60 dark:hover:bg-neutral-800/30 transition-colors"
									>
										{row.getAllCells().map((cell) => (
											<td key={cell.id} className="px-5 py-4">
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</td>
										))}
									</tr>
								))}
								{table.getRowModel().rows.length === 0 && (
									<tr>
										<td
											colSpan={columns.length}
											className="px-5 py-8 text-center text-xs text-neutral-500"
										>
											Tidak ada destinasi yang sesuai pencarian.
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				) : (
					/* Card / Grid View */
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
						{filteredProducts.map((p) => (
							<div
								key={p.id}
								className="p-5 rounded-2xl bg-white dark:bg-[#16192a] border border-neutral-200/70 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
							>
								<div className="space-y-2">
									<div className="flex items-start justify-between gap-2">
										<h4 className="text-base font-bold text-[#11162b] dark:text-white leading-snug">
											{p.name}
										</h4>
										<span className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#0b63f6] text-xs font-bold whitespace-nowrap">
											${Number(p.price).toFixed(2)}
										</span>
									</div>
									<p className="text-xs text-[#737c98] dark:text-neutral-400 line-clamp-2">
										{p.description}
									</p>
								</div>

								<div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
									<span className="text-[11px] text-neutral-500 font-medium">
										Stock: <strong className="text-neutral-800 dark:text-white">{p.stock}</strong>{" "}
										left
									</span>

									<div className="flex items-center gap-2">
										{isAdmin ? (
											<>
												<Link
													to="/products/$productId"
													params={{ productId: p.id }}
													className="text-xs font-semibold text-[#0b63f6] hover:underline"
												>
													Edit
												</Link>
												{onDeleteProduct && (
													<button
														type="button"
														onClick={() => onDeleteProduct(p.id)}
														className="text-xs font-semibold text-red-600 hover:underline cursor-pointer"
													>
														Delete
													</button>
												)}
											</>
										) : (
											<button
												type="button"
												onClick={() => alert(`Reserved "${p.name}"!`)}
												className="px-3.5 py-1.5 rounded-full bg-[#0b63f6] hover:bg-[#0952cc] text-white text-xs font-bold shadow-xs cursor-pointer"
											>
												Book Now
											</button>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
