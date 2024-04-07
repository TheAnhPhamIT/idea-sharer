import { useMemo } from "react";
import { Badge } from "./ui/badge";
import { splitWords, uniqueArray } from "@/lib/utils";

export function TagsList({ tags }: { tags: string | string[] }) {
    const tagsList = useMemo(() => {
        if (Array.isArray(tags)) {
            return uniqueArray(tags);
        } else {
            return uniqueArray(splitWords(tags, ","));
        }
    }, [tags]);

    return (
        <>
            {tagsList.map((tag) => (
                <Badge key="tag" className="w-fit">
                    {tag}
                </Badge>
            ))}
        </>
    );
}
