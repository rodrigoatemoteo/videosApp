/* eslint-disable @typescript-eslint/naming-convention */
export interface ISeriesApi {
  backdrop_path?:        string;
  first_air_date?:       Date;
  genre_ids?:            number[];
  id?:                   number;
  name?:                 string;
  origin_country?:        string[];
  original_language?:     string;
  original_name?:         string;
  overview?:             string;
  popularity?:           number;
  poster_path?:          string;
  vote_average?:         number;
  vote_count?:           number;
}

export interface IListaSeries {
  page: number;
  results: ISeriesApi[];
  total_results: number;
  total_pages: number;
}
