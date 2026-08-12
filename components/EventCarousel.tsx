"use client"

import Image from "next/image"
import { useState, type KeyboardEvent } from "react"
import type { EventPhoto } from "@/lib/data/events"

type EventCarouselProps = {
  photos: EventPhoto[]
  label: string
}

const isHeic = (src: string) => /\.heic$/i.test(src)

const EventCarousel = ({ photos, label }: EventCarouselProps) => {
  const [index, setIndex] = useState(0)

  if (!photos.length) {
    return null
  }

  if (photos.length === 1) {
    const photo = photos[0]
    return (
      <div className="w-full max-w-[34rem] overflow-hidden rounded-lg border border-[#dacff8] bg-white">
        {isHeic(photo.src) ? (
          // HEIC is not optimized by next/image; keep native img for parity
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.src}
            alt={photo.alt}
            className="block aspect-video w-full object-cover"
          />
        ) : (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={1088}
            height={612}
            className="block aspect-video w-full object-cover"
          />
        )}
      </div>
    )
  }

  const handlePrevious = () => {
    setIndex((current) => (current - 1 + photos.length) % photos.length)
  }

  const handleNext = () => {
    setIndex((current) => (current + 1) % photos.length)
  }

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    action: () => void
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      action()
    }
  }

  return (
    <div
      className="w-full max-w-[34rem] overflow-hidden rounded-lg border border-[#dacff8] bg-white shadow-subtle"
      aria-label={label}
    >
      <div
        className="flex transition-transform duration-[350ms] ease-out will-change-transform"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {photos.map((photo) =>
          isHeic(photo.src) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="block aspect-video w-full flex-[0_0_100%] object-cover"
            />
          ) : (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={1088}
              height={612}
              className="block aspect-video w-full flex-[0_0_100%] object-cover"
            />
          )
        )}
      </div>
      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-btn"
          aria-label="Previous photo"
          tabIndex={0}
          onClick={handlePrevious}
          onKeyDown={(event) => handleKeyDown(event, handlePrevious)}
        >
          ←
        </button>
        <button
          type="button"
          className="carousel-btn"
          aria-label="Next photo"
          tabIndex={0}
          onClick={handleNext}
          onKeyDown={(event) => handleKeyDown(event, handleNext)}
        >
          →
        </button>
      </div>
    </div>
  )
}

export default EventCarousel
