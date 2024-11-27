import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
export function sleeper(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
  });
  return events;
}
export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug: slug },
  }); //await

  return event;
}
