import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};
export default function EventCard({ event }: EventCardProps) {
  return (
    <Link className="h-[380px] flex-1 basis-80  max-w-[500px]" href={`/event/${event.slug}`}>
    <section
      className=" w-full h-full
     bg-white/[3%] rounded-xl overflow-hidden flex flex-col relative hover:scale-105 active:scale-[1.02] transition "
    >
      <Image
        src={event.imageUrl}
        alt={event.name}
        width={500}
        height={280}
        className="h-[60%] object-fit"
        />
      <div className="flex flex-col flex-1 justify-center items-center">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="italic text-white/75"> by {event.organizerName} </p>
        <p className="text-sm text-white/50 mt-4"> {event.location}</p>
      </div>
      <section className="absolute left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md flex flex-col items-center justify-center">
        <p className="text-xl font-bold -mb-[5px]">
          {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
          })}
        </p>
        <p className="text-xs uppercase text-accent">
          {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
        </p>
      </section>
    </section>
            </Link>
  );
}
