// import * as React from "react";
// import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { db } from "@/db";
import Link from "next/link";
import { RoomCard } from "../_components/room-card";
import { getRooms } from "@/data-access/rooms";

export default async function HomePage() {
    const rooms = await getRooms();

    return (
        <main className="min-h-screen p-16 mx-auto">
            <div className="flex gap-3 justify-between">
                <h1 className="text-xl md:text-4xl">Find Rooms</h1>
                <Button asChild>
                    <Link href="/create-room">Create Room</Link>
                </Button>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </main>
    );
}

// type AsChildProps<DefaultElementProps> =
//     | ({ asChild?: false } & DefaultElementProps)
//     | { asChild: true; children: React.ReactNode };

// type ButtonProps = AsChildProps<
//     React.ButtonHTMLAttributes<HTMLButtonElement>
// > & {
//     style?: React.CSSProperties;
//     className?: string;
// };

// function Button({ asChild, ...props }: ButtonProps) {
//     const Comp = asChild ? Slot : "button";

//     return <Comp {...props} />;
// }

// function Slot({
//     children,
//     ...props
// }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
//     if (React.isValidElement(children)) {
//         return React.cloneElement(children, {
//             ...props,
//             ...children.props,
//             style: {
//                 ...props.style,
//                 ...children.props.style,
//             },
//             className: twMerge(props.className, children.props.className),
//         });
//     }

//     if (React.Children.count(children) > 1) {
//         React.Children.only(null);
//     }

//     return null;
// }
