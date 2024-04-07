"use client";

import { RoomCard, RoomCardProps } from "@/components/room-card";
import { deleteRoomAction } from "../actions";

export function UserRoomCard(props: RoomCardProps) {
    return (
        <RoomCard {...props} onDelete={() => deleteRoomAction(props.room.id)} />
    );
}
