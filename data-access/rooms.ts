import { db } from "@/db";
import { room } from "@/db/schema";
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

export async function getRoomById(roomId: string) {
    unstable_noStore();
    return await db.query.room.findFirst({
        where: eq(room.id, roomId),
    });
}
