"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, type KeyboardEvent } from "react"
import { navLinks } from "@/lib/data/nav"
import { socialLinks, telegramCta } from "@/lib/data/social"

const Header = () => {
  const pathname = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const isHomePage = pathname === "/"

  const handleToggleNav = () => {
    setIsNavOpen((prev) => !prev)
  }

  const handleCloseNav = () => {
    setIsNavOpen(false)
  }

  const handleToggleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleToggleNav()
    }
  }

  return (
    <header
      className={
        isHomePage
          ? "fixed left-0 top-0 z-[120] w-full border-b-0 bg-transparent pb-3 pt-4"
          : "sticky top-0 z-[120] border-b-0 bg-transparent pb-3 pt-4"
      }
    >
      <div className="relative mx-auto flex w-full max-w-container-wide items-center justify-end px-5 md:justify-end">
        <nav
          className={
            isNavOpen
              ? "absolute right-5 top-[4.2rem] z-50 flex max-h-[calc(100vh-5rem)] w-[min(92vw,25rem)] flex-col items-stretch gap-3 overflow-y-auto rounded-md border border-[rgba(205,196,232,0.92)] bg-[rgba(244,245,249,0.96)] p-4 opacity-100 shadow-nav pointer-events-auto translate-y-0 transition-all duration-150 md:static md:right-auto md:top-auto md:max-h-none md:w-full md:flex-row md:items-center md:justify-between md:gap-[1.55rem] md:overflow-visible md:p-[0.95rem_1.2rem] md:opacity-100 md:translate-y-0"
              : "absolute right-5 top-[4.2rem] z-50 flex max-h-[calc(100vh-5rem)] w-[min(92vw,25rem)] flex-col items-stretch gap-3 overflow-y-auto rounded-md border border-[rgba(205,196,232,0.92)] bg-[rgba(244,245,249,0.96)] p-4 opacity-0 shadow-nav pointer-events-none -translate-y-1.5 transition-all duration-150 md:static md:right-auto md:top-auto md:flex md:max-h-none md:w-full md:flex-row md:items-center md:justify-between md:gap-[1.55rem] md:overflow-visible md:p-[0.95rem_1.2rem] md:opacity-100 md:pointer-events-auto md:translate-y-0"
          }
          aria-label="Main navigation"
        >
          <div className="order-1 flex w-full flex-wrap items-center gap-3 max-[520px]:flex-col max-[520px]:items-stretch md:order-none md:w-auto md:gap-3.5">
            <Link
              href="/"
              className="mr-2 inline-flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#ccc1ee] bg-[#f2f0fa] shadow-logo max-md:mr-1.5"
              aria-label="UofT Blockchain Society home"
              onClick={handleCloseNav}
            >
              <Image
                src="/assets/Logo.png"
                alt="UofT Blockchain Society logo"
                width={52}
                height={52}
                className="h-[126%] w-[126%] object-contain"
                priority
              />
            </Link>
            {navLinks.map((link) => {
              const isActive = !link.external && pathname === link.href
              const className = isActive
                ? "rounded-pill border border-[#c9beed] bg-[#f1ebff] px-[1.12rem] py-[0.62rem] text-[1.02rem] font-semibold text-accent-strong transition-all duration-[180ms] ease-out"
                : "rounded-pill border border-transparent px-[1.12rem] py-[0.62rem] text-[1.02rem] font-semibold text-[#3f3155] transition-all duration-[180ms] ease-out hover:bg-accent-soft hover:text-accent-strong"

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={className}
                    onClick={handleCloseNav}
                  >
                    {link.label}
                  </a>
                )
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={className}
                  onClick={handleCloseNav}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="order-2 ml-0 flex w-full flex-wrap items-center gap-2.5 border-t border-[#e2daf8] pt-1 md:order-none md:ml-auto md:w-auto md:gap-2.5 md:border-t-0 md:pt-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#cbc1eb] bg-[#f2f0fa] transition-all duration-150 hover:-translate-y-px hover:border-[#b9a8ef] hover:shadow-social max-[520px]:h-9 max-[520px]:w-9"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                onClick={handleCloseNav}
              >
                <Image
                  src={link.iconSrc}
                  alt={link.iconAlt}
                  width={21}
                  height={21}
                  className="h-[21px] w-[21px] object-contain"
                />
              </a>
            ))}
            <a
              href={telegramCta.href}
              className="rounded-pill border border-transparent bg-gradient-to-br from-[#8e6af7] to-[#6f4ee8] px-4 py-[0.58rem] text-[0.82rem] font-bold text-white shadow-cta transition-all duration-[160ms] ease-out hover:-translate-y-px hover:shadow-cta-hover"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCloseNav}
            >
              {telegramCta.label}
            </a>
          </div>
        </nav>

        <button
          type="button"
          className={
            isNavOpen
              ? "ml-2.5 inline-flex cursor-pointer rounded-[10px] border border-[#d6ccf7] bg-white px-[0.42rem] py-[0.3rem] md:hidden"
              : "ml-2.5 inline-flex cursor-pointer rounded-[10px] border border-[#d6ccf7] bg-white px-[0.42rem] py-[0.3rem] md:hidden"
          }
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen}
          tabIndex={0}
          onClick={handleToggleNav}
          onKeyDown={handleToggleKeyDown}
        >
          <span className="flex flex-col">
            <span
              className={
                isNavOpen
                  ? "my-1 block h-0.5 w-[18px] rounded-pill bg-[#4a3b64] transition-all duration-150 translate-y-[3px] rotate-45"
                  : "my-1 block h-0.5 w-[18px] rounded-pill bg-[#4a3b64] transition-all duration-150"
              }
            />
            <span
              className={
                isNavOpen
                  ? "my-1 block h-0.5 w-[18px] rounded-pill bg-[#4a3b64] transition-all duration-150 -translate-y-[3px] -rotate-45"
                  : "my-1 block h-0.5 w-[18px] rounded-pill bg-[#4a3b64] transition-all duration-150"
              }
            />
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
