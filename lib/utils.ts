import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function splitWords(text: string, splitBy: string): string[] {
    return text
        .split(splitBy)
        .map((word) => word.trim())
        .map((word) => word);
}

export function uniqueArray(arr: any[]): any[] {
    return Array.from(new Set(arr));
}
