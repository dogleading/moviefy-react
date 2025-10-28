import type { Movie } from "../movies";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{movie.title}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-400">{movie.director}</p>
        <p className="text-sm text-gray-400">{movie.year}</p>
        <p className="text-sm text-gray-400">{movie.genre}</p>
        <p className="text-sm text-gray-400">{movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
