import type { Metadata } from "next"
import TeamGroup from "@/components/TeamGroup"
import { teamGroups } from "@/lib/data/team"

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the executive team leading the UofT Blockchain Society at the University of Toronto.",
}

const TeamPage = () => {
  return (
    <main>
      <section className="px-0 pb-[2.8rem] pt-[4.6rem] text-center">
        <div className="mx-auto w-full max-w-[1160px] px-5">
          <p className="mb-[1.15rem] text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#7a6b91]">
            Leadership & associates
          </p>
          <h1 className="m-0 font-display text-[clamp(3.4rem,11.5vw,7.8rem)] uppercase leading-[0.9] tracking-[0.05em] text-[#2e1d46]">
            Meet The Team
          </h1>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto flex w-full max-w-container flex-col gap-8 px-5">
          {teamGroups.map((group) => (
            <TeamGroup key={group.title} group={group} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default TeamPage
