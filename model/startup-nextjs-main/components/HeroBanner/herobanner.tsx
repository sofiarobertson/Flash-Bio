export default function HeroBanner() {
  return (
    <section className="relative mb-12 w-full">
      <img
        src="/images/footballhead.png"
        alt="49ers Game"
        className="w-full h-[600px] object-cover rounded-none shadow-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-none flex flex-col justify-center pl-10">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-2">
          49ers Game
        </h2>
        <p className="text-white text-lg mb-4">Tickets on sale now!</p>
        <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md w-fit shadow">
          See Tickets
        </button>
      </div>
    </section>
  );
}
