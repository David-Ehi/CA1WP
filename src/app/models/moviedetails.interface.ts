export interface MovieDetails {
    imdbID?: string;
    Title?: string;
    Year?: string;
    Director?: string;
    Poster?: string;
    Response?: string;
    Error?: string;

}

export interface SearchResult {
    Search: MovieResult[];
    totalResults: string;
    Response: string;
    Error?: string;
}

export interface  MovieResult {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}