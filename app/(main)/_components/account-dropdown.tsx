"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function AccountDropdown() {
    const session = useSession();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <Image
                        src={session.data?.user.image!}
                        alt={session.data?.user.name!}
                        width={35}
                        height={35}
                        className="rounded-full md:mr-2"
                    />
                    <p className="hidden md:block">{session.data?.user.name}</p>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
