import H1 from "@/components/h1";
import { capitalize, getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);
  return {
    title: event.name,
  };
}
export default async function EventPage({ params }: Props) {
  const slug = params.slug;

  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center  py-14 md:py-20 ">
        <Image
          className="object-cover blur-3xl z-0 overflow-hidden"
          src={event.imageUrl}
          alt={event.name}
          fill
          quality={50}
          priority
          sizes="(max-width:1280px) 100vw, 1280px"
        />
        <div className="z-1 flex flex-col lg:flex-row  gap-6 lg:gap-x-16  relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col ">
            <p className=" text-white/70">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>

            <p className="text-white/75 whitespace-nowrap text-xl ">
              Oraganized by
              <span className="italic">{event.organizerName}</span>
            </p>

            <button
              className="bg-white/20 text-lg capitalize bg-blur
             mt-5 lg:mt-auto w-[95%] sm:w-full
             state-effects
             rounded-md border-2 py-2"
            >
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center min-h-[75vh] px-5 py-16 ">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}
function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
