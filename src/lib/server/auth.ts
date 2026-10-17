import { createServerFn } from "@tanstack/react-start";

import { auth } from "@/lib/auth";
import {
	SEED_ADMIN_EMAIL,
	SEED_ADMIN_PASSWORD,
	SEED_TEST_EMAIL,
	SEED_TEST_PASSWORD,
	SEED_TEST_PHONE,
	SEED_TEST_USERNAME,
	db,
} from "@/lib/db";
import { getCurrentSession } from "@/lib/session";

/**
 * Server-only session lookup. Safe to call from TanStack Router `beforeLoad`
 * (which runs on the client during client navigation) because server
 * functions always execute on the server.
 */
export const getServerSession = createServerFn({ method: "GET" }).handler(async () => {
	return getCurrentSession();
});

/**
 * One-time development seed: creates the administrator account (password
 * hashed by Better Auth) and seeds sample products. Idempotent.
 *
 * Called from the client via `useServerFn(seedAdmin)` on the /setup page.
 */
export const seedAdmin = createServerFn({ method: "POST" }).handler(async () => {
	const hasAdmin = db.user.some((u) => {
		const role = db.userRole.find((r) => r.userId === u.id)?.role;
		return role === "admin";
	});
	const hasTestUser = db.user.some((u) => u.email === SEED_TEST_EMAIL);
	const existingAdminUser = db.user.find((u) => u.email === SEED_ADMIN_EMAIL);

	if (!existingAdminUser) {
		await auth.api.signUpEmail({
			body: {
				email: SEED_ADMIN_EMAIL,
				password: SEED_ADMIN_PASSWORD,
				name: "Administrator",
			},
			headers: new Headers(),
		});
	}

	const adminUser = db.user.find((u) => u.email === SEED_ADMIN_EMAIL);
	if (adminUser) {
		const existing = db.userRole.find((r) => r.userId === adminUser.id);
		if (existing) {
			existing.role = "admin";
		} else {
			db.userRole.push({ userId: adminUser.id, role: "admin" });
		}
	}

	if (!hasTestUser) {
		await auth.api.signUpEmail({
			body: {
				email: SEED_TEST_EMAIL,
				password: SEED_TEST_PASSWORD,
				name: SEED_TEST_USERNAME,
				username: SEED_TEST_USERNAME,
				phoneNumber: SEED_TEST_PHONE,
			},
			headers: new Headers(),
		});
	}

	const now = new Date().toISOString();
	if (db.product.length === 0) {
		const defaultCamps = [
			{
				name: "Tent Camp",
				description:
					"Traditional open-air canvas camping with campfire gear, waterproof mats, and starry night setup.",
				price: 45,
				stock: 20,
			},
			{
				name: "Glamping",
				description:
					"Luxury geodesic dome with plush queen bedding, private heated deck, and panoramic starry skylight.",
				price: 165,
				stock: 12,
			},
			{
				name: "Car Campi",
				description:
					"Overland 4x4 expedition with heavy-duty rooftop pop-up tent, awning, and mobile camp kitchen.",
				price: 115,
				stock: 8,
			},
			{
				name: "Cabin Camp",
				description:
					"Cozy handcrafted alpine timber cabin tucked in serene pine forests with stone wood-burning fireplace.",
				price: 195,
				stock: 6,
			},
		].map((p) => ({
			id: crypto.randomUUID(),
			...p,
			createdAt: now,
			updatedAt: now,
		}));
		db.product.push(...defaultCamps);
	}

	return {
		ok: true,
		alreadySeeded: hasAdmin && hasTestUser,
		admin: SEED_ADMIN_EMAIL,
		testUser: SEED_TEST_EMAIL,
	};
});
