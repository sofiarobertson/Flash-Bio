import Image from "next/image";

export default function SportsPage() {
  const sports = [
    { src: "/images/AvGiants.png", title: "Giants" },
    { src: "/images/DuckVRams.png", title: "Rams" },
    { src: "/images/Valkiyres.png", title: "Valkiyres" },
    { src: "/images/Rams.png", title: "Rams" },
  ];

  return (
    <section className="relative pt-[140px] mb-12">
      {/* Hero Banner Section */}
      <div className="relative">
        <Image
          src="/images/SportsBBall.png"
          alt="Sports Page Hero"
          width={1920}
          height={600}
          className="w-full h-[612px] object-cover shadow-lg"
          priority
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex flex-col justify-center pl-10">
          <h2 className="text-white text-3xl sm:text-5xl font-bold mb-2">
            Sports Tickets
          </h2>
          <p className="text-white text-lg mb-4 max-w-md">
            Sports Events Near Claremont
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md w-fit shadow">
            Explore Highlights
          </button>
        </div>

        {/* Sports Thumbnails — side-by-side on the image bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-8">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg w-[220px] h-[140px] sm:w-[250px] sm:h-[160px]"
            >
              <Image
                src={sport.src}
                alt={sport.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  {sport.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 12 Team Name Blocks Below Hero Banner */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="w-[274px] h-[95px] bg-white text-black flex items-center justify-center font-bold rounded-[28px] shadow-lg gap-4"
            >
              {/* White Circle Image */}
              <Image
                src="/images/WhiteCircle.png"
                alt="White Circle"
                width={50}
                height={50}
              />
              {/* Text */}
              <span>Team Name Here</span>
            </div>
          ))}
        </div>
    </section>
  );
}
