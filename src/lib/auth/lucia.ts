import prisma from '@lucia-auth/adapter-prisma'
import lucia from 'lucia-auth'
import { db } from '$lib/data/db'

import { dev } from '$app/environment'

export const luciaAuth = lucia({
    adapter: prisma(db),
    env: 'DEV',// dev ? 'DEV' : 'PROD',
    transformUserData: ( userData ) => {
        return {
            username: userData.username,
            userId: userData.id,
            nickname: userData.nickname
        }
    }
})

export type Auth = typeof luciaAuth