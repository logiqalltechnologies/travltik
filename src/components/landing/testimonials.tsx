'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  name: string;
  date: string;
  quote: string;
  avatar: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Kanan Nanavati',
    date: 'June, 2025',
    quote: 'We completed our Chardham Yatra by helicopter on 6th June 2025 as a group of six. Despite initial hiccups and weather challenges, the TravlTik team ensured smooth darshan and timely return to Dehradun. A special thanks to Mr. Mandar for ensuring that my husband and I could continue the journey together after completing the first two dhams.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    role: 'Pilgrimage & VIP Mobility',
  },
  {
    name: 'Geetha Guruswamy',
    date: 'January, 2026',
    quote: 'It was a pleasure traveling with TravlTik again—first Europe, now Vietnam—both trips were fantastic! We loved the hotels, itinerary, food, and especially Tour Manager Dr. Mehak’s engaging guidance. Looking forward to more memorable trips with TravlTik.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    role: 'Global Holiday Package',
  },
  {
    name: 'Lawrence Yesudass',
    date: 'December, 2025',
    quote: 'My family and I enjoyed a wonderful Europe holiday with TravlTik last Christmas. The entire trip was well planned, seamless, and truly memorable. We also appreciate the smooth handling of our Schengen visa process, which made our journey even easier. We plan to do more such holidays with you.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    role: 'Family Tour & Schengen Visa',
  },
  {
    name: 'Sunil & Meera Kapoor',
    date: 'February, 2026',
    quote: 'Our recent tour to Japan with TravlTik was executed to perfection. From our expedited visa documentation to luxury bullet train transfers and curated ryokan stays, their knowledgeable team delivered exceptional care at every touchpoint.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    role: 'Japan Cherry Blossom Package',
  },
  {
    name: 'Priya Sharma',
    date: 'October, 2025',
    quote: 'TravlTik escrow protection gave me complete peace of mind while filing my Canada Express Entry PR petition. The lawyer provided direct milestone sign-offs at every step and I received my CoPR without a hitch!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    role: 'Canada Express Entry PR',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Max starting index so the last 3 cards sit neatly on desktop
  const maxDesktopIndex = Math.max(0, testimonials.length - 3)
  const maxMobileIndex = testimonials.length - 1

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))
  }

  return (
    <section className="w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0] rounded-3xl sm:rounded-[40px] my-6 border border-[#EFE8DD] shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Serif Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl font-serif text-[#78350F] tracking-tight font-normal">
            Why Customers Love TravlTik
          </h2>
        </div>

        {/* 4 Pillars / Stats Grid (Exact specified numbers) */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center sm:border-r border-[#E8DEC8] last:border-none px-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#78350F] tracking-tight">15+</div>
            <div className="text-xs sm:text-sm font-medium text-[#9A6B48] mt-1.5">Years of legacy</div>
          </div>
          <div className="text-center md:border-r border-[#E8DEC8] px-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#78350F] tracking-tight">200+</div>
            <div className="text-xs sm:text-sm font-medium text-[#9A6B48] mt-1.5">Tours &amp; Packages</div>
          </div>
          <div className="text-center sm:border-r border-[#E8DEC8] px-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#78350F] tracking-tight">1K+</div>
            <div className="text-xs sm:text-sm font-medium text-[#9A6B48] mt-1.5">Happy Travelers</div>
          </div>
          <div className="text-center px-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#78350F] tracking-tight">5+</div>
            <div className="text-xs sm:text-sm font-medium text-[#9A6B48] mt-1.5">Industry Awards</div>
          </div>
        </div>

        {/* Cards Carousel Area with Smooth Slide Track */}
        <div className="relative px-2 sm:px-6">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E8DEC8] text-[#78350F] shadow-lg flex items-center justify-center hover:bg-[#FDFBF7] hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E8DEC8] text-[#78350F] shadow-lg flex items-center justify-center hover:bg-[#FDFBF7] hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Overflow Hidden Viewport */}
          <div className="overflow-hidden py-3">
            {/* Sliding Track (100% on mobile, 33.333% per card on desktop) */}
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(-${currentIndex * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 33.3333)}%)`
              }}
            >
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/3 shrink-0 px-2.5 sm:px-3 box-border"
                >
                  <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#EFE8DD] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full min-h-[350px]">
                    <div>
                      {/* Peach / Terracotta Quotation Marks */}
                      <span className="text-4xl sm:text-5xl font-serif text-[#FDBA74] font-black leading-none block select-none">
                        “
                      </span>
                      <p className="mt-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
                        {item.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-3.5 pt-6 mt-4 border-t border-slate-100">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#FED7AA] shadow-xs shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-slate-900 tracking-tight truncate">
                          {item.name}
                        </h4>
                        <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i ? 'w-6 bg-[#78350F]' : 'w-1.5 bg-[#E8DEC8] hover:bg-[#9A6B48]'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
