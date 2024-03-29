// routes/signup/+page.server.ts
import { fail, redirect } from "@sveltejs/kit";
import { luciaAuth } from "$lib/auth/lucia";
import type { PageServerLoad, Actions } from "./$types";

// If the user exists, redirect authenticated users to the profile page.
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) throw redirect(302, "/");
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const username = form.get("username");
		const password = form.get("password");

		// check for empty values
		if (
			!username ||
			!password ||
			typeof username !== "string" ||
			typeof password !== "string"
		) {
			return fail(400);
		}

		try {
			const user = await luciaAuth.createUser("username", username, {
				password,
				attributes: {
					username
				}
			});
			const session = await luciaAuth.createSession(user.userId);
			locals.setSession(session);
			throw redirect( 300, '/dashboard' )
		} catch {
			// username already in use
			return fail(400);
		}
	}
};