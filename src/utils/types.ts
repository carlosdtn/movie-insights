export interface Movie {
  title: string;
  description: string;
  releaseDate: number;
  rating: number;
  genre: string;
  duration: number;
  image: string;
  reviews: Review[];
}

export interface Review {
  author: string;
  comment: string;
  createdAt: number;
}
