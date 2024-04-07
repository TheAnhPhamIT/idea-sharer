"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Room } from "@/db/schema";
import { editRoomAction } from "../actions";

const formSchema = z.object({
    name: z.string().min(1).max(50),
    description: z.string().min(1).max(100),
    githubRepo: z.string().min(1).max(100),
    tags: z.string().min(1).max(100),
});

export function EditRoomForm({ room }: { room: Room }) {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: room.name,
            description: room.description || "",
            githubRepo: room.githubRepo || "",
            tags: room.tags,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        //TODO: invoke a server action to store the data in the database
        await editRoomAction(room.id, values);
        router.push("/user-rooms");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter room name"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public room name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter description for your room"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Please describe what you are be coding on, help
                                the others have a general vision about your idea
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="githubRepo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Github Repo</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your Github repo link"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Please put a link to the project you are working
                                on
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tags</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Typescript, Nextjs, Tailwind"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                List your programming languages, frameworks,
                                libraries so people can find your content.
                                Please split by comma
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Update</Button>
            </form>
        </Form>
    );
}
