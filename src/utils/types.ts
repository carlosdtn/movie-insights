export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: number;
  genre: GenreEnum[];
  duration: number;
  image: string;
}

export interface Comment {
  id: number;
  reviews: Review[];
}

export interface Review {
  author: string;
  comment: string;
  createdAt: number;
}

export interface Rating {
  id: number;
  ratings: number[];
}

export interface FavoriteMovie {
  id: number;
  title: string;
  image: string;
}

export enum GenreEnum {
  Action = "Action",
  Biography = "Biography",
  Adventure = "Adventure",
  Comedy = "Comedy",
  Crime = "Crime",
  Drama = "Drama",
  Fantasy = "Fantasy",
  Historical = "Historical",
  Horror = "Horror",
  Mystery = "Mystery",
  Romance = "Romance",
  ScienceFiction = "Science Fiction",
  SciFi = "Sci-Fi",
  Thriller = "Thriller",
  War = "War",
  Western = "Western",
}
