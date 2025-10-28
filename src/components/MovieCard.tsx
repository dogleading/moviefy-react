import type { Movie } from "../lib/types";

const MovieCard = ({ Title, Year, Poster, Plot }: Movie) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden">
      <img src={Poster} alt={Title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{Title}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-400">{Year}</p>
        <p className="text-sm text-gray-400">
          {Plot ? Plot : "No plot available."}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
