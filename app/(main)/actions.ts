"use server";

import { deleteUser } from "@/data-access/users";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function deleteUserAction() {
    const session = await getSession();
    if (!session) {
        throw new Error("User not authenticated");
    }

    await deleteUser(session.user.id);
    revalidatePath("/");
}
