import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUserRooms } from "@/data-access/rooms";
import { SearchBar } from "@/components/search-bar";
import { UserRoomCard } from "./_components/user-room-card";
import Image from "next/image";
import { Plus } from "lucide-react";

export default async function UserRoomsPage({
    searchParams,
}: {
    searchParams: { search: string };
}) {
    const rooms = await getUserRooms(searchParams.search);

    return (
        <main className="min-h-screen p-16 mx-auto">
            <div className="flex gap-3 justify-between">
                <h1 className="text-xl md:text-4xl">Your Rooms</h1>
                <Button asChild>
                    <Link href="/create-room">Create Room</Link>
                </Button>
            </div>
            <SearchBar />
            {rooms.length > 0 ? (
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
            ) : (
                <div className="mt-24 flex flex-col items-center justify-center">
                    <Image
                        src="/no-data.svg"
                        alt="no rooms yet"
                        width={240}
                        height={240}
                    />
                    <p className="mt-6 text-xl">No Rooms yet!</p>
                    <Button asChild className="mt-6 text-xl">
                        <Link href="/create-room">
                            <Plus className="mr-2" />
                            Create Your Room
                        </Link>
                    </Button>
                </div>
            )}
        </main>
    );
}
