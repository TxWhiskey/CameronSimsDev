import { db } from "../db";

export async function getUserDb( userId: string ) {
    return db.user.findUnique({ 
        where: { id: userId },
        include: {
            families: {
                include: {
                    family: true
                }
            }
        }
    })
};

export async function getUserStashDb( userId: string ) {
    return db.user.findUnique({
        where: { id: userId },
        include: {
            dashboards: true,
            families: true,
            modules: true,
            family_as_primary: true
        }
    })
}

export async function deleteUserDb( userId: string ) {
    return db.user.delete({ where: { id: userId }})
}
