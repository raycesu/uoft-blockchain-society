import TeamCard from "@/components/TeamCard"
import type { TeamGroup as TeamGroupType } from "@/lib/data/team"

type TeamGroupProps = {
  group: TeamGroupType
}

const TeamGroup = ({ group }: TeamGroupProps) => {
  return (
    <div>
      <h2 className="m-0 font-display text-2xl text-[#322247]">{group.title}</h2>
      <div className="mt-[1.2rem] grid grid-cols-1 gap-[1.1rem] sm:grid-cols-2 lg:grid-cols-4">
        {group.members.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}

export default TeamGroup
