import { StreamVideoPlayer } from "@/components/stream-video-player";
import { TagsList } from "@/components/tags-list";
import { getRoomById } from "@/data-access/rooms";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export default async function RoomPage(props: { params: { roomId: string } }) {
    const {
        params: { roomId },
    } = props;

    const room = await getRoomById(roomId);

    if (!room) {
        return <div>No room of this Id found</div>;
    }

    return (
        <div className="grid grid-cols-4 min-h-screen">
            <div className="col-span-3 p-4">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                    <StreamVideoPlayer room={room} />
                </div>
            </div>
            <div className="col-span-1 p-4">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
                    <h1 className="text-base">{room.name}</h1>
                    {!!room.githubRepo && (
                        <Link
                            href={room.githubRepo}
                            target="_blank"
                            className="flex items-center gap-2 text-center text-sm"
                            rel="noopener noreferrer"
                        >
                            <GithubIcon />
                            Github Project
                        </Link>
                    )}
                    <p className="text-base text-gray-600">
                        {room.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <TagsList tags={room.tags} />
                    </div>
                </div>
            </div>
        </div>
    );
}
