import clsx, { ClassValue } from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...classes:ClassValue[]) {
    return twMerge(clsx(classes))
}
export function sleeper(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}