"use client";

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
import { Edit, GithubIcon, Power, TrashIcon } from "lucide-react";
import Link from "next/link";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTrigger,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "./ui/alert-dialog";
import { useRouter } from "next/navigation";

export type RoomCardProps = {
    room: Room;
    canEdit?: boolean;
    canDelete?: boolean;
    onDelete?: () => void;
};

export function RoomCard({
    room,
    canDelete,
    canEdit,
    onDelete,
}: RoomCardProps) {
    const router = useRouter();
    return (
        <Card>
            <CardHeader className="relative">
                <CardTitle>{room.name}</CardTitle>
                {canEdit && (
                    <Button
                        className="absolute top-1 right-3"
                        variant="outline"
                        onClick={() => router.push(`/rooms/${room.id}/edit`)}
                    >
                        <Edit className="w-4 h-4" />
                    </Button>
                )}
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
            <CardFooter className="flex gap-2">
                <Button asChild>
                    <Link href={`/rooms/${room.id}`}>
                        <Power className="mr-2 w-4 h-4" />
                        Join Room
                    </Link>
                </Button>
                {canDelete && (
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive">
                                <TrashIcon className="mr-2 w-4 h-4" />
                                Delete Room
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Are you absolutely sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will
                                    permanently remove the room and any data
                                    associated with it.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={onDelete}>
                                    Yes, delete
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </CardFooter>
        </Card>
    );
}
