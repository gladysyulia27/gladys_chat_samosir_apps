import { memoryAdapter } from "better-auth/adapters/memory";

export type Role = "admin" | "user";

export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	stock: number;
	createdAt: string;
	updatedAt: string;
}

export interface UserRole {
	userId: string;
	role: Role;
}

/**
 * In-memory development database.
 *
 * better-auth owns the `user`, `session`, `account` and `verification` tables
 * (managed through `memoryAdapter`). This app adds `product` and `userRole`.
 *
 * NOTE: this is memory only. Data survives within a single running server
 * process (local dev, or one warmed Vercel serverless instance) but is reset
 * on every redeploy / cold start. There is no persistent database by design.
 * See AGENTS.md for how to seed an admin account and sample data.
 */
const initialTimestamp = new Date().toISOString();

const initialProducts: Product[] = [
	{
		id: "camp-tent",
		name: "Tent Camp",
		description:
			"Traditional open-air canvas camping with campfire gear, waterproof mats, and starry night setup.",
		price: 45,
		stock: 20,
		createdAt: initialTimestamp,
		updatedAt: initialTimestamp,
	},
	{
		id: "camp-glamping",
		name: "Glamping",
		description:
			"Luxury geodesic dome with plush queen bedding, private heated deck, and panoramic starry skylight.",
		price: 165,
		stock: 12,
		createdAt: initialTimestamp,
		updatedAt: initialTimestamp,
	},
	{
		id: "camp-car-campi",
		name: "Car Campi",
		description:
			"Overland 4x4 expedition with heavy-duty rooftop pop-up tent, awning, and mobile camp kitchen.",
		price: 115,
		stock: 8,
		createdAt: initialTimestamp,
		updatedAt: initialTimestamp,
	},
	{
		id: "camp-cabin",
		name: "Cabin Camp",
		description:
			"Cozy handcrafted alpine timber cabin tucked in serene pine forests with stone wood-burning fireplace.",
		price: 195,
		stock: 6,
		createdAt: initialTimestamp,
		updatedAt: initialTimestamp,
	},
];

const memoryDb = {
	user: [] as Array<{
		id: string;
		email: string;
		name: string | null;
		image: string | null;
		emailVerified: boolean;
		emailVerifiedAt: Date | null;
		createdAt: Date;
		updatedAt: Date;
		lastSignInAt: Date | null;
	}>,
	session: [] as unknown[],
	account: [] as unknown[],
	verification: [] as unknown[],
	product: [...initialProducts] as Product[],
	userRole: [] as UserRole[],
};

export const adapter = memoryAdapter(memoryDb);
export const db = memoryDb;

export const SEED_ADMIN_EMAIL = "admin@example.com";
export const SEED_ADMIN_PASSWORD = "admin12345";

export function getUserRole(userId: string): Role {
	return db.userRole.find((r) => r.userId === userId)?.role ?? "user";
}

export function isAdmin(userId: string): boolean {
	return getUserRole(userId) === "admin";
}

export function setUserRole(userId: string, role: Role) {
	const existing = db.userRole.find((r) => r.userId === userId);
	if (existing) {
		existing.role = role;
	} else {
		db.userRole.push({ userId, role });
	}
}

export function removeUserRole(userId: string) {
	db.userRole = db.userRole.filter((r) => r.userId !== userId);
}
