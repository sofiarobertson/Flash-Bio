import Link from "next/link";
import SearchBar from "../Searchbar/Searchbar";
import HeroBanner from "../HeroBanner/herobanner";
import TrendingEvents from "../Trending/trendingevents";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[120px] xl:pb-[120px] xl:pt-[120px] 2xl:pb-[120px] 2xl:pt-[120px]"
      >
      <div className="container">
      <SearchBar />
        </div>

        <div className="">
      <HeroBanner />
      </div>

      <div className="container">
      <TrendingEvents />
        </div>
      </section>
    </>
  );
};

export default Hero;
