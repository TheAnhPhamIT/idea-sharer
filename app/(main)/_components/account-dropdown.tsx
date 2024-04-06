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
import { LogInIcon, LogOutIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function AccountDropdown() {
    const session = useSession();
    const isLoggedIn = !!session.data;
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
                {isLoggedIn ? (
                    <DropdownMenuItem onClick={() => signOut()}>
                        <LogOutIcon className="mr-2 h-4 w-4" />
                        Sign out
                    </DropdownMenuItem>
                ) : (
                    <DropdownMenuItem onClick={() => signIn("google")}>
                        <LogInIcon className="mr-2 h-4 w-4" />
                        Sign in
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
