import { luciaAuth } from "$lib/auth/lucia";
import { seedDatabase } from "$lib/data/init-db";
import { handleHooks } from '@lucia-auth/sveltekit'

await seedDatabase()

export const handle = handleHooks( luciaAuth )