// routes/login/+page.server.ts
import { fail, redirect } from "@sveltejs/kit";
import { luciaAuth } from "$lib/auth/lucia";
import type { PageServerLoad, Actions } from "./$types";

// If the user exists, redirect authenticated users to the profile page.
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) throw redirect(302, "/");
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
		)
			return fail(400);
		try {
			const user = await luciaAuth.authenticateUser("username", username, password);
			const session = await luciaAuth.createSession(user.userId);
			locals.setSession(session);
		} catch {
			// invalid credentials
			return fail(400);
		}
	}
};