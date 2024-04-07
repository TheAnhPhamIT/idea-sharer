import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUserRooms } from "@/data-access/rooms";
import { SearchBar } from "@/components/search-bar";
import { UserRoomCard } from "./_components/user-room-card";

export default async function UserRoomsPage() {
    const rooms = await getUserRooms();

    return (
        <main className="min-h-screen p-16 mx-auto">
            <div className="flex gap-3 justify-between">
                <h1 className="text-xl md:text-4xl">Your Rooms</h1>
                <Button asChild>
                    <Link href="/create-room">Create Room</Link>
                </Button>
            </div>
            <SearchBar />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {rooms.map((room) => (
                    <UserRoomCard
                        key={room.id}
                        room={room}
                        canDelete={true}
                        canEdit={true}
                    />
                ))}
            </div>
        </main>
    );
}
