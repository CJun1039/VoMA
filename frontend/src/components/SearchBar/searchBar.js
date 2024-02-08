import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <div className="flex gap-5 justify-start">
      <div className="basis-1/2">
        <div className="pt-2 relative text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white pt-7 px-6 pr-6 min-w-full rounded-sm text-sm focus:border-orange-red/80 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:outline-none"
            type="search"
            name="search"
          ></input>
          <div className="text-sm absolute top-4 left-6 font-semibold">
            Search by name
          </div>
        </div>
      </div>
      <div className="basis-1/3">
        <div className="pt-2 relative text-gray-600">
          <input
            className="border-2 min-w-full border-gray-300 bg-white pt-7 pl-6 pr-6 min-w-96 rounded-sm text-sm focus:border-orange-red/80 focus:ring-transparent focus:stroke-none focus:outline-none"
            type="date"
            name="datepicker"
          ></input>
          <div className="text-sm absolute top-4 left-7 font-semibold">
            When
          </div>
        </div>
      </div>
      <button
        className="rounded-2xl pl-4 pr-6 self-end h-10 bg-orange-red/80"
        type="submit"
      >
        <div className="text-white flex gap-2">
          <MagnifyingGlassIcon className="h-6 w-5 pt-px" aria-hidden="true" />
          <div>Search</div>
        </div>
      </button>
    </div>
  );
}
