"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, TrashIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { deleteUserAction } from "../actions";
import { useState } from "react";

export function AccountDropdown() {
    const session = useSession();
    const [openAlertDialog, setOpenAlertDialog] = useState(false);

    return (
        <>
            <AlertDialog
                open={openAlertDialog}
                onOpenChange={setOpenAlertDialog}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            remove your account and any data your have.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={async () => {
                                await deleteUserAction();
                                signOut({ callbackUrl: "/" });
                            }}
                        >
                            Yes, delete my account
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

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
                        <p className="hidden md:block">
                            {session.data?.user.name}
                        </p>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                    <DropdownMenuItem
                        onClick={() => signOut({ callbackUrl: "/" })}
                    >
                        <LogOutIcon className="mr-2 h-4 w-4" />
                        Sign out
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenAlertDialog(true)}>
                        <TrashIcon className="mr-2 w-4 h-4" />
                        Delete Account
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
