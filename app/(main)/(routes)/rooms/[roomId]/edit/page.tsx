import { getRoomById } from "@/data-access/rooms";
import { EditRoomForm } from "./_components/form";

export default async function EditRoomPage(props: {
    params: { roomId: string };
}) {
    const {
        params: { roomId },
    } = props;

    const room = await getRoomById(roomId);

    if (!room) {
        return <div>No room of this Id found</div>;
    }

    return (
        <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
            <h1 className="text-4xl font-bold">Edit Room</h1>
            <EditRoomForm room={room} />
        </div>
    );
}
