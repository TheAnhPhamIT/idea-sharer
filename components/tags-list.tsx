"use client";

import { useMemo } from "react";
import { Badge } from "./ui/badge";
import { splitWords, uniqueArray } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export function TagsList({ tags }: { tags: string | string[] }) {
    const router = useRouter();
    const path = usePathname();

    const tagsList = useMemo(() => {
        if (Array.isArray(tags)) {
            return uniqueArray(tags);
        } else {
            return uniqueArray(splitWords(tags, ","));
        }
    }, [tags]);

    console.log(path);

    return (
        <>
            {tagsList.map((tag) => (
                <button
                    key={tag}
                    onClick={() => {
                        router.push(`${path}/?search=${tag}`);
                    }}
                >
                    <Badge className="w-fit cursor-pointer">{tag}</Badge>
                </button>
            ))}
        </>
    );
}
