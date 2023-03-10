import { getUserDb, getUserStashDb } from "./user-db";

export async function getUser( userId: string) {

    const user = getUserDb( userId )
    
    if ( !user ) {
        throw new Error(`[Getting User] Unable to find user with id: ${userId}.`)
    }

    return user

}

export async function getUserStash( userId: string ) {

    const user = getUserStashDb( userId )

    if ( !user ) {
        throw new Error(`[Getting User] Unable to find user with id: ${userId}.`)
    }

    return user

}