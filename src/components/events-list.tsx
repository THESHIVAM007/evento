
import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";

type EventListProps = {
  city: string;
};

export default async function EventsList({ city }: EventListProps) {
  const events = await getEvents(city);
  return (
    <section className="flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
