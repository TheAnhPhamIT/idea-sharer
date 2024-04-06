// import * as React from "react";
// import { twMerge } from "tailwind-merge";

import { db } from "@/db";

export default async function Home() {
    const rooms = await db.query.room.findMany();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {rooms.map((room) => (
                <div key={room.name}>{room.name}</div>
            ))}
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
