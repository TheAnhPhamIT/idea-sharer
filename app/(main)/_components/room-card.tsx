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
                        className="flex items-center gap-2"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon />
                        Github Project
                    </Link>
                )}
            </CardContent>
            <CardFooter>
                <Button asChild>
                    <Link href={`/rooms/${room.id}`}>Join Room</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
