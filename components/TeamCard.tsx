import Image from "next/image"
import type { TeamMember } from "@/lib/data/team"

type TeamCardProps = {
  member: TeamMember
}

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.62H5.68V18H8.34V10.62ZM7 6A1.54 1.54 0 0 0 5.46 7.54A1.55 1.55 0 1 0 8.56 7.54A1.54 1.54 0 0 0 7 6ZM18.32 13.8C18.32 11.54 17.12 10.48 15.5 10.48A2.84 2.84 0 0 0 13 11.84V10.62H10.34V18H13V14.36C13 13.4 13.18 12.46 14.36 12.46C15.52 12.46 15.54 13.54 15.54 14.42V18H18.2Z" />
  </svg>
)

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <article className="flex flex-col rounded-lg border border-border-subtle bg-surface p-4">
      {member.photoSrc ? (
        <div className="mb-3 flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#dfd4fa] bg-white">
          <Image
            src={member.photoSrc}
            alt={member.name}
            width={400}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
      <h3 className="mb-[0.15rem] mt-0.5 text-[0.98rem] font-bold text-[#362650]">{member.name}</h3>
      {member.linkedinUrl ? (
        <a
          href={member.linkedinUrl}
          className="mt-2 inline-flex items-center gap-1.5 text-[0.83rem] text-[#1666c5] hover:text-[#0f4f9a]"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
      ) : null}
    </article>
  )
}

export default TeamCard
