const Searchbar = ({
  setSearchQuery,
  searchQuery,
}: {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}) => {
  return (
    <div className="flex justify-center items-center h-10 mt-14">
      <input
        type="text"
        placeholder="Search for a movie"
        className="w-full pl-5 pr-32 py-4 rounded-full max-w-xl text-white bg-gray-800/50 border-gray-700 border-2
         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-300"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
    </div>
  );
};

export default Searchbar;
