import Image from "next/image"
import { partners } from "@/lib/data/partners"

const PartnersTicker = () => {
  const tickerItems = [...partners, ...partners]

  return (
    <div className="relative overflow-hidden rounded-lg border-none bg-transparent p-[1.4rem_0] shadow-none" aria-label="Partner companies">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[88px] bg-gradient-to-r from-[#f4efff] to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[88px] bg-gradient-to-l from-[#f4efff] to-transparent" aria-hidden="true" />
      <div className="animate-partners-ticker flex w-max items-center gap-[2.6rem] px-[2.2rem]">
        {tickerItems.map((partner, index) => {
          const isDuplicate = index >= partners.length
          return (
            <div
              key={`${partner.name}-${index}`}
              className="inline-flex min-w-[12rem] flex-none items-center justify-center px-3 py-1 max-md:min-w-[10rem]"
              aria-hidden={isDuplicate ? true : undefined}
            >
              <span className="inline-flex h-[clamp(58px,7vw,92px)] w-[clamp(90px,11vw,146px)] flex-none items-center justify-center overflow-hidden rounded-none border-none bg-transparent p-0">
                <Image
                  src={partner.logoSrc}
                  alt={isDuplicate ? "" : `${partner.name} logo`}
                  width={146}
                  height={92}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  unoptimized={partner.logoSrc.endsWith(".svg")}
                />
              </span>
              <span className="hidden">{partner.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PartnersTicker
