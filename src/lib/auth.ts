import { betterAuth } from "better-auth";
import { customSession } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";

import { adapter, getUserRole } from "./db";

export const auth = betterAuth({
	database: adapter,
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: false,
	},
	session: {
		expiresIn: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24, // 1 day
		cookieCache: {
			enabled: true,
			maxAge: 60 * 15,
		},
	},
	plugins: [
		customSession(async ({ user, session }) => {
			const role = getUserRole(user.id);
			return {
				user: {
					...user,
					role,
				},
				session,
			};
		}),
		tanstackStartCookies(),
	],
});

export default auth;
