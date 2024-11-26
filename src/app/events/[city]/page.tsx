import H1 from "@/components/h1";

type EventsPageProps = {
  params: {
    city: string;
  };
};
export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  const res = await fetch("https://bytegrad.com/course-assets/projects/evento/api/events");
  const events = await res.json();
  console.log(events);
  
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city==="all" && "All Events" }
        {city!=="all" && `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
        </H1>
        {
          events.map((event) => (
            <section key={event.id}>{event.name}</section>
          ))
        }
    </main>
  );
}
