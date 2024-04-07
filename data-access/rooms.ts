import { db } from "@/db";
import { room } from "@/db/schema";
import { eq } from "drizzle-orm";
import { unstable_noStore } from "next/cache";

export async function getRooms() {
    unstable_noStore();
    return await db.query.room.findMany();
}

export async function getRoomById(roomId: string) {
    unstable_noStore();
    return await db.query.room.findFirst({
        where: eq(room.id, roomId),
    });
}
