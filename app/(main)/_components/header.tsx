"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { AccountDropdown } from "@/app/(main)/_components/account-dropdown";
import Image from "next/image";
import Link from "next/link";
import { LogInIcon } from "lucide-react";

export function Header() {
    const session = useSession();
    return (
        <header className="container mx-auto bg-gray-100 dark:bg-gray-900 py-4">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex gap-2 items-center text-xl">
                    <Image
                        src="/icon.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="rounded"
                    />
                    <span className="hidden md:block">Idea Sharer</span>
                </Link>
                <div className="flex gap-2 md:gap-4 items-center">
                    {session.data ? (
                        <AccountDropdown />
                    ) : (
                        <Button onClick={() => signIn()} variant="link">
                            <LogInIcon className="mr-2" /> Sign In
                        </Button>
                    )}
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
