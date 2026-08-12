"use client"

import Link from "next/link"
import { footerLinks } from "@/lib/data/nav"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#dfd6f7] bg-[#f9f7ff] pb-8 pt-[1.8rem]">
      <div className="mx-auto grid w-full max-w-container grid-cols-1 items-center gap-4 px-5 md:grid-cols-[minmax(0,1.4fr)_auto]">
        <div>
          <p className="mb-0.5 text-[0.9rem] font-semibold text-[#33224b]">
            UofT Blockchain Society
          </p>
          <p className="m-0 text-[0.8rem] text-text-soft">
            Student club at the University of Toronto.
          </p>
        </div>
        <div className="flex flex-wrap justify-start gap-2 text-[0.8rem] md:justify-end">
          {footerLinks.map((link) => {
            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-soft hover:text-accent-strong"
                >
                  {link.label}
                </a>
              )
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-text-soft hover:text-accent-strong"
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        <p className="col-span-full m-0 mt-2.5 text-[0.75rem] text-text-soft">
          © {year} UofT Blockchain Society · Toronto, Canada
        </p>
      </div>
    </footer>
  )
}

export default Footer
