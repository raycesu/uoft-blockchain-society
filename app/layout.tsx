import type { Metadata } from "next"
import { Fraunces, Space_Grotesk } from "next/font/google"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "UofT Blockchain Society",
    template: "%s · UofT Blockchain Society",
  },
  description:
    "UofT Blockchain Society at the University of Toronto — learn, build, and explore blockchain, crypto, and Web3.",
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fraunces.variable}`}>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
