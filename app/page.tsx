import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PartnersTicker from "@/components/PartnersTicker"

export const metadata: Metadata = {
  title: "UofT Blockchain Society",
  description:
    "UofT Blockchain Society at the University of Toronto — learn, build, and explore blockchain, crypto, and Web3.",
}

const HomePage = () => {
  return (
    <main>
      <section className="p-0" aria-label="Homepage feature image">
        <div className="relative ml-[calc(50%-50vw)] h-[calc(100svh+12px)] min-h-[calc(100svh+12px)] w-screen overflow-hidden border-b-0 bg-[#161d27]">
          <Image
            src="/assets/waterfront.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.62] [filter:saturate(0.72)_contrast(0.9)_brightness(0.82)] [transform:scale(1.06)] [transform-origin:center]"
          />
          <div
            className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(12,19,32,0.2)_0%,rgba(12,19,32,0.42)_70%,rgba(12,19,32,0.6)_100%)]"
            aria-hidden="true"
          />
          <div className="absolute left-1/2 top-[54%] z-[2] flex w-[min(94vw,860px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-4 text-center text-[#f2f6ff] [text-shadow:0_12px_35px_rgba(9,14,22,0.45)] max-md:top-[53%]">
            <h1 className="m-0 mt-[0.35rem] font-display text-[clamp(2.1rem,7.6vw,5.8rem)] font-bold leading-[0.95]">
              Bringing Blockchain to University of Toronto
            </h1>
            <p className="mx-auto mt-4 max-w-[42rem] text-center text-[clamp(0.78rem,2vw,1rem)] font-normal uppercase leading-normal tracking-[0.22em] text-[#e5ecfb]">
              A student-led club for learning, building, and connecting in blockchain.
            </p>
            <div className="mt-[1.6rem] flex flex-wrap justify-center gap-3 max-[520px]:w-full max-[520px]:flex-col max-[520px]:items-stretch">
              <a
                href="https://www.instagram.com/uoft_blockchain"
                className="inline-flex items-center justify-center gap-1.5 rounded-pill border-transparent bg-gradient-to-br from-[#8d69f6] to-[#6f4ee8] px-[1.3rem] py-[0.7rem] text-[0.88rem] font-semibold text-[#f8fbff] backdrop-blur-[4px] transition-all duration-[160ms] ease-out hover:-translate-y-px hover:shadow-subtle max-[520px]:w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Society
              </a>
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-1.5 rounded-pill border border-[rgba(227,234,249,0.58)] bg-[rgba(29,40,63,0.55)] px-[1.3rem] py-[0.7rem] text-[0.88rem] font-semibold text-[#f2f6ff] backdrop-blur-[4px] transition-all duration-[160ms] ease-out hover:-translate-y-px hover:shadow-subtle max-[520px]:w-full"
              >
                View Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(to_bottom,#f7f7f9,#f6f3fd_100%)] py-10" id="about">
        <div className="mx-auto w-full max-w-container px-5">
          <div className="mb-[1.7rem] flex max-w-[62rem] flex-col gap-[0.65rem]">
            <h2 className="m-0 font-display text-[1.75rem] text-[#322247]">Mission</h2>
            <p className="m-0 text-[1.08rem] leading-[1.75] text-text-soft">
              Our mission is to grow the blockchain community at the University of Toronto while
              building a lasting foundation for future members of the club. Through research on
              blockchain technologies and digital asset markets, treasury management, and on-campus
              events, we aim to create opportunities for learning, discussion, and long-term
              impact.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dfd6f7] bg-[linear-gradient(to_bottom,#f5f1ff,#f2edff,#f7f4ff)] py-10">
        <div className="mx-auto w-full max-w-container px-5">
          <div className="mb-8 flex max-w-none flex-col items-center gap-1.5 text-center">
            <h2 className="m-0 font-display text-[clamp(2.5rem,7vw,4.8rem)] uppercase leading-[1.05] tracking-[0.03em] text-[#322247]">
              Our Partners
            </h2>
            <p className="m-0 max-w-[36rem] text-[clamp(0.82rem,1.8vw,1rem)] text-text-soft">
              A big thank you for supporting our mission and helping the UofT community grow
            </p>
          </div>
          <PartnersTicker />
          <p className="mt-[1.6rem] text-center text-[0.82rem] text-text-soft">
            Want to work with us?{" "}
            <a href="mailto:uoftblockchainsociety@gmail.com" className="underline">
              Email us
            </a>{" "}
            about sponsoring or hosting an event.
          </p>
        </div>
      </section>
    </main>
  )
}

export default HomePage
