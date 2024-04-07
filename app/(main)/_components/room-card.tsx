import { TagsList } from "@/components/tags-list";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Room } from "@/db/schema";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export function RoomCard({ room }: { room: Room }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{room.name}</CardTitle>
                <CardDescription className="truncate max-h-20 h-full">
                    {room.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {!!room.githubRepo && (
                    <Link
                        href={room.githubRepo}
                        target="_blank"
                        className="flex items-center gap-2 text-sm"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon width={20} height={20} />
                        Github Project
                    </Link>
                )}
                <div className="flex flex-wrap gap-3 mt-4">
                    <TagsList tags={room.tags} />
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild>
                    <Link href={`/rooms/${room.id}`}>Join Room</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
