export type NavLink = {
  href: string
  label: string
  external?: boolean
}

export const navLinks: NavLink[] = [
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "mailto:uoftblockchainsociety@gmail.com", label: "EMAIL US", external: true },
]

export const footerLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "mailto:uoftblockchainsociety@gmail.com", label: "Email Us", external: true },
]
