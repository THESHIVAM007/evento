import clsx, { ClassValue } from "clsx";
import {twMerge} from "tailwind-merge";
import { EventoEvent } from "./types";

export function cn(...classes:ClassValue[]) {
    return twMerge(clsx(classes))
}
export function sleeper(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const capitalize=(str:string)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvents(city:string){
    const res = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
      );
      const events: EventoEvent[] = await res.json();
      return events;
}
export async function getEvent(slug:string){
    const res = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
      );
      const event: EventoEvent = await res.json();
      return event;
}