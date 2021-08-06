export type PaginatedData<Result> = {
  page: number;
  total_pages: number;
  total_results: number;
  dates: {
    maximum: Date;
    minimum: Date;
  };
  results: Result[];
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: boolean;
  vote_count: boolean;
};

export type PaginatedDataMovie = PaginatedData<Movie>;

export type APiError = {
  status_code: number;
  status_message: string;
  success: boolean;
};
