import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";
import { sleeper } from "@/lib/utils";

type EventListProps = {
    city: string;
};

export default async function EventsList({city}:EventListProps) {
  await sleeper(2000);
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await res.json();
  return (
    <section className="flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
