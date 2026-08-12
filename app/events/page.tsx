import type { Metadata } from "next"
import EventCarousel from "@/components/EventCarousel"
import { pastEvents } from "@/lib/data/events"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events hosted by UofT Blockchain Society at the University of Toronto.",
}

const EventsPage = () => {
  return (
    <main>
      <section className="px-0 pb-[2.8rem] pt-[4.6rem] text-center">
        <div className="mx-auto w-full max-w-[1160px] px-5">
          <p className="mb-[1.15rem] text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#7a6b91]">
            Events & calendar
          </p>
          <h1 className="m-0 font-display text-[clamp(3.4rem,11.5vw,7.8rem)] uppercase leading-[0.9] tracking-[0.05em] text-[#2e1d46]">
            Events Calendar
          </h1>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-container px-5">
          <div className="mb-[1.7rem] flex max-w-[34rem] flex-col gap-1.5">
            <h2 className="m-0 font-display text-2xl text-[#322247]">Upcoming Events</h2>
          </div>
          <p className="mt-3 w-fit rounded-pill border border-[#cec1f6] bg-[linear-gradient(130deg,#f4efff,#ebe2ff)] px-5 py-[0.95rem] text-[0.96rem] font-bold uppercase tracking-[0.08em] text-[#4a3682]">
            Coming soon
          </p>
        </div>
      </section>

      <section className="border-y border-[#dfd6f7] bg-[linear-gradient(to_bottom,#f5f1ff,#f2edff,#f7f4ff)] py-10">
        <div className="mx-auto w-full max-w-container px-5">
          <div className="mb-[1.7rem] flex max-w-[34rem] flex-col gap-1.5">
            <h2 className="m-0 font-display text-2xl text-[#322247]">Past Events</h2>
          </div>
          <div className="mt-[1.2rem] border-l-2 border-[#cdbff4] pl-[1.45rem]">
            {pastEvents.map((event) => (
              <div key={event.title} className="relative pb-[1.35rem]">
                <div className="absolute left-[-1.75rem] top-[0.35rem] h-[11px] w-[11px] rounded-full border-2 border-[#f8f5ff] bg-accent shadow-timeline-dot" />
                <div className="px-[0.1rem] py-[0.15rem] pb-[0.9rem]">
                  <h3 className="mb-[0.18rem] mt-0 text-[1.12rem] font-bold uppercase tracking-[0.02em] text-[#34244d]">
                    {event.title}
                  </h3>
                  <p className="mb-[0.45rem] mt-0 text-[0.8rem] text-[#66558f]">{event.date}</p>
                  <EventCarousel
                    photos={event.photos}
                    label={`${event.title} photo gallery`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default EventsPage
