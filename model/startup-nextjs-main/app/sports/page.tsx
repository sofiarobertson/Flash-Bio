"use client";

import Image from "next/image";
import { useState } from "react";
import CarouselIndicator from "@/components/Carousel/carousel";

export default function SportsPage() {
  const trendingSports = [
    { src: "/images/AvGiants.png", name: "Giants", date: "Date Here" },
    { src: "/images/DuckVRams.png", name: "Sharks at Ducks", date: "Date Here" },
    { src: "/images/Valkiyres.png", name: "Valkiyres", date: "Date Here" },
    { src: "/images/Rams.png", name: "Rams", date: "Date Here" },
  ];


  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % trendingSports.length);
  const prev = () => setIndex((prev) => (prev - 1 + trendingSports.length) % trendingSports.length);

  return (
    <section className="relative pt-[140px] mb-16">
      {/* HERO IMAGE */}
      <div className="relative w-full">
        <Image
          src="/images/SportsBBall.png"
          alt="Sports Banner"
          width={1920}
          height={1000}
          className="w-full h-[692px] object-cover"
          priority
        />

        {/* DARK OVERLAY + TITLE */}
        <div className="absolute inset-0 flex flex-col justify-start pt-[80px] px-8 bg-black/40">
          <h1 className="text-4xl md:text-4xl font-bold text-white drop-shadow-lg">
            SPORTS TICKETS
          </h1>
        </div>

        {/* TRENDING SPORTS SECTION */}
        <div className="absolute bottom-8 left-0 right-0 mx-auto w-full px-8">
          {/* HEADER + CAROUSEL INDICATOR INLINE */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-white">
              Sports Events Near Claremont
            </h2>

            {/* Same carousel indicator reused */}
            <CarouselIndicator
                          current={index + 1}
                          total={trendingSports.length}
                          onPrev={prev}
                          onNext={next}
                        />
          </div>

          {/* CARD GROUP */}
          <div className="flex gap-6 mx-4">
            {trendingSports.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden w-[350px] bg-black/60 text-white shadow-lg"
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

      {/* TEAMS SECTION */}
      <div className="mt-8 px-8">
              <h2 className="text-2xl font-bold text-green-800 mb-6">Top Teams</h2>
      
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
                    <span className="font-semibold text-gray-700">team name here</span>
                  </div>
                ))}
              </div>
            </div>
    </section>
  );
}
