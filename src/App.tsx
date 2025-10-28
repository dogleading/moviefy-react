import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import { movies, type Movie } from "./movies.ts";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredMovies = movies.filter((movie: Movie) =>
    movie.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Searchbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        {filteredMovies.length === 0 && debouncedSearchQuery && (
          <div className="text-center text-gray-400 mt-8">
            No movies found matching "{debouncedSearchQuery}"
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">
          {filteredMovies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
