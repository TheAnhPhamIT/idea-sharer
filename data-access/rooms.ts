import { db } from "@/db";
import { Room, room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { eq, ilike, or } from "drizzle-orm";
import { unstable_noStore } from "next/cache";

export async function getRooms(search?: string) {
    unstable_noStore();
    const where = search
        ? or(ilike(room.tags, `%${search}%`), ilike(room.name, `%${search}%`))
        : undefined;
    return await db.query.room.findMany({
        where,
    });
}

export async function getUserRooms() {
    unstable_noStore();
    const session = await getSession();
    if (!session) {
        throw new Error("User not authorized");
    }

    return await db.query.room.findMany({
        where: eq(room.userId, session.user.id),
    });
}

export async function getRoomById(roomId: string) {
    unstable_noStore();
    return await db.query.room.findFirst({
        where: eq(room.id, roomId),
    });
}

export async function deleteRoom(roomId: string) {
    await db.delete(room).where(eq(room.id, roomId));
}

export async function updateRoom(
    roomId: string,
    data: Omit<Room, "id" | "userId">
) {
    unstable_noStore();

    const updatedRoom = await db
        .update(room)
        .set(data)
        .where(eq(room.id, roomId))
        .returning();

    return updatedRoom;
}
