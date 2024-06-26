"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EraserIcon, SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const formSchema = z.object({
    search: z.string().min(0).max(50),
});

export function SearchBar() {
    const query = useSearchParams();
    const router = useRouter();
    const path = usePathname();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            search: query.get("search") || "",
        },
    });

    const search = query.get("search");

    useEffect(() => {
        form.setValue("search", search || "");
    }, [search, form]);

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (values.search) {
            router.push(`${path}/?search=${values.search}`);
        } else {
            router.push(`${path}`);
        }
    }

    function onClearSearch() {
        form.setValue("search", "");
        router.push(`${path}`);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex gap-2 items-center mt-5"
            >
                <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Filter rooms by keywords, such as typescript, nextjs, python..."
                                    className="w-[440px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">
                    <SearchIcon className="mr-2" />
                    Search
                </Button>
                {query.get("search") && (
                    <Button
                        variant="link"
                        onClick={(e) => {
                            e.preventDefault();
                            onClearSearch();
                        }}
                    >
                        <EraserIcon className="mr-2" width="18" height="18" />
                        Clear
                    </Button>
                )}
            </form>
        </Form>
    );
}
