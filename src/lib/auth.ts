import { betterAuth } from "better-auth";
import { customSession } from "better-auth/plugins";
import { tanstackStartCookies } from "better-auth/tanstack-start";

import { adapter, getUserRole } from "./db";

const isProduction = process.env.NODE_ENV === "production";
const configuredBaseURL = process.env.BETTER_AUTH_URL?.trim();
const authBaseURL = (configuredBaseURL ?? "http://localhost:3000")
	.replaceAll("\\", "")
	.replace(/\/$/, "");
const authSecret = process.env.BETTER_AUTH_SECRET ?? "camply-local-development-secret-change-me";

try {
	new URL(authBaseURL);
} catch {
	throw new Error(`Invalid BETTER_AUTH_URL: ${configuredBaseURL ?? authBaseURL}`);
}

if (isProduction && !process.env.BETTER_AUTH_SECRET) {
	throw new Error("BETTER_AUTH_SECRET must be configured in production.");
}

export const auth = betterAuth({
	database: adapter,
	baseURL: authBaseURL,
	secret: authSecret,
	trustedOrigins: [
		authBaseURL,
		...(isProduction ? [] : ["http://localhost:*", "http://127.0.0.1:*", "http://[::1]:*"]),
	],
	user: {
		additionalFields: {
			username: {
				type: "string",
				required: false,
			},
			phoneNumber: {
				type: "string",
				required: false,
			},
		},
	},
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
