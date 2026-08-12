export type SocialLink = {
  href: string
  label: string
  iconSrc: string
  iconAlt: string
  external?: boolean
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com/uoft_blockchain",
    label: "Instagram",
    iconSrc: "/assets/insta.avif",
    iconAlt: "Instagram logo",
    external: true,
  },
  {
    href: "https://x.com/uoft_blockchain",
    label: "X",
    iconSrc: "/assets/x.jpg",
    iconAlt: "X logo",
    external: true,
  },
  {
    href: "https://discord.com/invite/J5R8svExPz",
    label: "Discord",
    iconSrc: "/assets/discord.png",
    iconAlt: "Discord logo",
    external: true,
  },
  {
    href: "https://www.linkedin.com/company/uoftblockchain/posts/?feedView=all",
    label: "LinkedIn",
    iconSrc: "/assets/linkedin.png",
    iconAlt: "LinkedIn logo",
    external: true,
  },
  {
    href: "mailto:uoftblockchainsociety@gmail.com",
    label: "Email",
    iconSrc: "/assets/mail.png",
    iconAlt: "Mail logo",
  },
]

export const telegramCta = {
  href: "https://t.me/+IWa5xV2yi29jNjlh",
  label: "Join Telegram",
}
