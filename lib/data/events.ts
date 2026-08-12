export type EventPhoto = {
  src: string
  alt: string
}

export type PastEvent = {
  title: string
  date: string
  photos: EventPhoto[]
}

export const pastEvents: PastEvent[] = [
  {
    title: "UofT Blockchain Conference 2026",
    date: "February 2026",
    photos: [
      {
        src: "/assets/Conf 1.heic",
        alt: "UofT Blockchain Conference 2026 event photo 1",
      },
      {
        src: "/assets/Conf 2.jpeg",
        alt: "UofT Blockchain Conference 2026 event photo 2",
      },
    ],
  },
  {
    title: "Zentra Founder Lecture on EVM and Consensus",
    date: "January 2026",
    photos: [
      {
        src: "/assets/Zentra event.JPEG",
        alt: "Zentra Founder Lecture on EVM and Consensus event photo",
      },
    ],
  },
  {
    title: "Kiln Co-Founder Lecture on Staking",
    date: "December 2025",
    photos: [
      {
        src: "/assets/KILN 1.jpeg",
        alt: "Kiln Co-Founder Lecture on Staking event photo 1",
      },
      {
        src: "/assets/KILN 2.JPG",
        alt: "Kiln Co-Founder Lecture on Staking event photo 2",
      },
    ],
  },
  {
    title: "Wallet V Head of Ecosystem and Partnership Guest Speaker",
    date: "October 2025",
    photos: [
      {
        src: "/assets/walletvevent.JPG",
        alt: "Wallet V Head of Ecosystem and Partnership Guest Speaker event photo",
      },
    ],
  },
  {
    title: "Wallet V Trading Challenge",
    date: "October 2025",
    photos: [
      {
        src: "/assets/walletvevent2.JPG",
        alt: "Wallet V Trading Challenge event photo",
      },
    ],
  },
]
