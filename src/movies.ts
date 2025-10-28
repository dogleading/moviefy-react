export interface Movie {
  id: number;
  title: string;
  director: string;
  year: string;
  genre: string;
  rating: string;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: "2010",
    genre: "Sci-Fi",
    rating: "8.8",
    image:
      "https://m.media-amazon.com/images/I/912AErFSBHL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: "1994",
    genre: "Drama",
    rating: "9.3",
    image: "https://i.ebayimg.com/images/g/lt4AAOSw~T9dC-24/s-l1600.jpg",
  },
  {
    id: 3,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    genre: "Crime",
    rating: "9.2",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: "2008",
    genre: "Action",
    rating: "9.0",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    genre: "Crime",
    rating: "8.9",
    image:
      "https://m.media-amazon.com/images/I/71c05lTE0GL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 6,
    title: "Fight Club",
    director: "David Fincher",
    year: "1999",
    genre: "Drama",
    rating: "8.8",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  },
];
