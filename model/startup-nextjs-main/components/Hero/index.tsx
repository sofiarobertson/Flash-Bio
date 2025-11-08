import Link from "next/link";
import SearchBar from "../Searchbar/Searchbar";
import HeroBanner from "../HeroBanner/herobanner";
import TrendingEvents from "../Trending/trendingevents";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
      <div className="container">
      <SearchBar />
        </div>

      <div className="container">
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
