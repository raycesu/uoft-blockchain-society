export type TeamMember = {
  name: string
  photoSrc?: string
  linkedinUrl?: string
}

export type TeamGroup = {
  title: string
  members: TeamMember[]
}

export const teamGroups: TeamGroup[] = [
  {
    title: "Co-Presidents:",
    members: [
      {
        name: "Rayce Su",
        photoSrc: "/assets/rayce.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/surayce/",
      },
      {
        name: "Weiqi Zhu",
        photoSrc: "/assets/Weiqi.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/weiqizhu899/",
      },
    ],
  },
  {
    title: "Operations Associate:",
    members: [{ name: "Marcus Leung" }, { name: "Nadine Tarigan" }],
  },
  {
    title: "Research & Investments Associate:",
    members: [
      {
        name: "Christine Liu",
        photoSrc: "/assets/Christine.JPG",
      },
      { name: "Jason Luu" },
      { name: "Alan Lee" },
      { name: "Jack Guan" },
    ],
  },
]
