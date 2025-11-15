"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselIndicator from "@/components/Carousel/carousel";

export default function ConcertsPage() {
  const trending = [
    { src: "/images/2hollis.png", name: "2hollis", date: "Date Here" },
    { src: "/images/nbayoung.png", name: "NBA YoungBoy", date: "Date Here" },
    { src: "/images/Sara.png", name: "Sara Landry", date: "Date Here" },
    { src: "/images/Tate.png", name: "Tate McRae", date: "Date Here" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % trending.length);
  const prev = () => setIndex((prev) => (prev - 1 + trending.length) % trending.length);

  return (
    <section className="relative pt-[140px] mb-16">
      {/* HERO IMAGE */}
      <div className="relative w-full">
        <Image
          src="/images/concertmain.png"
          alt="Concert Banner"
          width={1920}
          height={1000}
          className="w-full h-[692px] object-cover"
          priority
        />

        {/* DARK OVERLAY + TITLE */}
        <div className="absolute inset-0 flex flex-col justify-start pt-[80px] px-8 bg-black/40">
          <h1 className="text-4xl md:text-4xl font-bold text-white drop-shadow-lg">
            CONCERT TICKETS
          </h1>
        </div>

        {/* TRENDING EVENTS */}
        <div className="absolute bottom-8 left-0 right-0 mx-auto w-full px-8">
          {/* SECTION HEADER + CAROUSEL INDICATOR INLINE */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-white">
              Trending Events Near Claremont
            </h2>

            <CarouselIndicator
              current={index + 1}
              total={trending.length}
              onPrev={prev}
              onNext={next}
            />
          </div>

          <div className="flex items-center justify-between w-full">


            {/* CARD GROUP */}
            <div className="flex gap-6 mx-4">
              {trending.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden w-[340px] bg-black/60 text-white shadow-lg"
                >
                  <div className="w-full h-[150px] relative">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-xs opacity-70">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOST POPULAR ARTISTS */}
      <div className="mt-8 px-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Most Popular Artists</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-white w-full h-[85px] rounded-2xl shadow flex items-center px-5 gap-4"
            >
              <div className="w-[55px] h-[55px] relative">
                <Image
                  src="/images/WhiteCircle.png"
                  alt="Artist Placeholder"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-gray-700">artist name here</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
