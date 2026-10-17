import { getRequest } from "@tanstack/react-start/server";

import { auth } from "./auth";
import { type Role, getUserRole } from "./db";

export type SessionUser = {
	id: string;
	email: string;
	name: string;
	image?: string | null;
	emailVerified: boolean;
	role: Role;
	createdAt: Date | string;
	updatedAt: Date | string;
};

/**
 * Read the current better-auth session from the incoming request.
 *
 * Must only be called from server code (server functions, API route handlers,
 * or TanStack Start loaders executed on the server) because it relies on
 * `getRequest()`.
 */
export async function getCurrentSession() {
	const request = getRequest();
	const result = await auth.api.getSession({
		headers: request.headers,
	});
	if (!result?.session || !result?.user) {
		return {
			session: null,
			user: null,
			role: null,
		};
	}
	const role: Role = getUserRole(result.user.id);
	const user = {
		...result.user,
		role,
	} as SessionUser;

	return {
		session: result.session,
		user,
		role,
	};
}

export async function requireAuth() {
	const { session, user, role } = await getCurrentSession();
	if (!session || !user) {
		const err = new Error("Unauthorized") as Error & { status?: number };
		err.status = 401;
		throw err;
	}
	return { session, user, role: role as Role };
}

export async function requireAdmin() {
	const { session, user, role } = await requireAuth();
	if (role !== "admin") {
		const err = new Error("Forbidden: admin required") as Error & {
			status?: number;
		};
		err.status = 403;
		throw err;
	}
	return { session, user, role: "admin" as const };
}
