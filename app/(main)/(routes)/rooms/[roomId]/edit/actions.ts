"use server";

import { getRoomById, updateRoom } from "@/data-access/rooms";
import { Room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function editRoomAction(
    roomId: string,
    roomData: Omit<Room, "id" | "userId">
) {
    const session = await getSession();
    if (!session) {
        throw new Error("User not authenticated");
    }

    const existingRoom = await getRoomById(roomId);

    if (existingRoom?.userId !== session.user.id) {
        throw new Error("User not authorized");
    }
    const room = await updateRoom(roomId, roomData);

    revalidatePath("/user-rooms");
    revalidatePath("/");
}
