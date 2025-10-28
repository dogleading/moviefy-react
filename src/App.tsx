import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";
import type { Movie } from "./lib/types";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const fetchMovies = async (searchTerm: string) => {
      if (!searchTerm) {
        fetchMovies("lord of the rings");
        return;
      }

      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&plot=full&apikey=${apiKey}`
      );
      const data = await response.json();
      setMovies((data.Search as Movie[]) || []);
    };

    fetchMovies(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Searchbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        {movies.length === 0 && debouncedSearchQuery && (
          <div className="text-center text-gray-400 mt-8">
            No movies found matching "{debouncedSearchQuery}"
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
