export default function SearchBar() {
    return (
      <div className="flex justify-center mt-6 mb-8">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search for events here"
            className="w-full rounded-md border border-gray-300 bg-white py-3 pl-10 pr-4 text-black shadow-sm focus:border-black focus:ring-black focus:outline-none"
            />
          <svg
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>
      </div>
    );
  }
  