import { auth } from "../../auth";


export async function getMyUserToken() {
    const session = await auth();
    return session?.user?.credentialToken ?? null
}
export async function getUserId() {
    const session = await auth();
    return session?.user?.id ?? null
}

