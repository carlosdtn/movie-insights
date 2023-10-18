import { GenreEnum, Movie } from "@/utils/types";

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description:
      "A story of hope, friendship, and survival inside a maximum security prison.",
    releaseDate: 1994,
    genre: [GenreEnum.Drama],
    duration: 142,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseDate: 1972,
    genre: [GenreEnum.Crime, GenreEnum.Drama],
    duration: 175,
    image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseDate: 1994,
    genre: [GenreEnum.Crime, GenreEnum.Drama],
    duration: 154,
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
  },
  {
    id: 4,
    title: "The Dark Knight",
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    releaseDate: 2008,
    genre: [GenreEnum.Action, GenreEnum.Crime, GenreEnum.Drama],
    duration: 152,
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
  },
  {
    id: 5,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    releaseDate: 1994,
    genre: [GenreEnum.Comedy, GenreEnum.Drama, GenreEnum.Romance],
    duration: 142,
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
  },
  {
    id: 6,
    title: "Schindler's List",
    description:
      "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
    releaseDate: 1993,
    genre: [GenreEnum.Biography, GenreEnum.Drama, GenreEnum.Historical],
    duration: 195,
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
  },
  {
    id: 7,
    title: "The Lord of the Rings: The Return of the King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    releaseDate: 2003,
    genre: [GenreEnum.Action, GenreEnum.Adventure, GenreEnum.Fantasy],
    duration: 201,
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/23/The_Lord_of_the_Rings%2C_TROTK_%282003%29.jpg",
  },
  {
    id: 8,
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
    releaseDate: 1999,
    genre: [GenreEnum.Drama, GenreEnum.Thriller],
    duration: 139,
    image:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
  },
  {
    id: 9,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseDate: 2010,
    genre: [GenreEnum.Action, GenreEnum.Adventure, GenreEnum.SciFi],
    duration: 148,
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  },
  {
    id: 10,
    title: "The Matrix",
    description:
      "A computer programmer discovers that reality as he knows it is a simulation created by machines to subjugate humanity.",
    releaseDate: 1999,
    genre: [GenreEnum.Action, GenreEnum.SciFi],
    duration: 136,
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
  },
  {
    id: 11,
    title: "Goodfellas",
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    releaseDate: 1990,
    genre: [GenreEnum.Biography, GenreEnum.Crime, GenreEnum.Drama],
    duration: 146,
    image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
  },
  {
    id: 12,
    title: "The Silence of the Lambs",
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    releaseDate: 1991,
    genre: [GenreEnum.Crime, GenreEnum.Drama, GenreEnum.Thriller],
    duration: 118,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
  },
  {
    id: 13,
    title: "Gladiator",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    releaseDate: 2000,
    genre: [GenreEnum.Action, GenreEnum.Adventure, GenreEnum.Drama],
    duration: 155,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Gladiator_%282000_film_poster%29.png/220px-Gladiator_%282000_film_poster%29.png",
  },
  {
    id: 14,
    title: "The Departed",
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infish gang in South Boston.",
    releaseDate: 2006,
    genre: [GenreEnum.Crime, GenreEnum.Drama, GenreEnum.Thriller],
    duration: 151,
    image: "https://upload.wikimedia.org/wikipedia/en/5/50/Departed234.jpg",
  },
  {
    id: 15,
    title: "The Green Mile",
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    releaseDate: 1999,
    genre: [GenreEnum.Crime, GenreEnum.Drama, GenreEnum.Fantasy],
    duration: 189,
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg",
  },
  {
    id: 16,
    title: "Saving Private Ryan",
    description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    releaseDate: 1998,
    genre: [GenreEnum.Action, GenreEnum.Drama, GenreEnum.War],
    duration: 169,
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg",
  },
  {
    id: 17,
    title: "The Pianist",
    description:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto during World War II.",
    releaseDate: 2002,
    genre: [GenreEnum.Biography, GenreEnum.Drama, GenreEnum.War],
    duration: 150,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/The_Pianist_movie.jpg/220px-The_Pianist_movie.jpg",
  },
  {
    id: 18,
    title: "American History X",
    description:
      "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    releaseDate: 1998,
    genre: [GenreEnum.Drama],
    duration: 119,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/American_History_X_poster.png/220px-American_History_X_poster.png",
  },
  {
    id: 19,
    title: "The Shining",
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    releaseDate: 1980,
    genre: [GenreEnum.Drama, GenreEnum.Horror],
    duration: 144,
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg",
  },
  {
    id: 20,
    title: "Seven",
    description:
      "Two detectives, a rookie, and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    releaseDate: 1995,
    genre: [GenreEnum.Crime, GenreEnum.Drama, GenreEnum.Mystery],
    duration: 127,
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg",
  },
];
