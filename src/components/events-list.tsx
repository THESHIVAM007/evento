import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type EventsListProps = { events: EventoEvent[] };
export default function EventsList({ events }: EventsListProps) {
  return (
    <section className="flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
