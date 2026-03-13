import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { SearchResult } from './models/moviedetails.interface';
import { MovieDetails } from './models/moviedetails.interface';
import { MovieResult } from './models/moviedetails.interface';
import { computed } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class MovieapiService {
  Searchtitle = signal('');
  private _http = inject(HttpClient);
  private _baseUrl = 'https://www.omdbapi.com/';
  private _apikey = '10787e3';
  public movie = signal<MovieDetails | null>(null);
  public movies = signal<MovieResult[]>([]);
  public totalResults = signal(0);
  public MaxPages = computed(()=>Math.ceil(this.totalResults()/10));
  public currentPage = signal<number>(1);

  NextPage( search: string) {
    if (this.currentPage() < this.MaxPages()) {
      const nextPage = this.currentPage() + 1;
      this.currentPage.set(nextPage);
      this.getMovies(search, nextPage);
    }
  }

  PreviousPage( search: string) {
    if (this.currentPage() > 1) {
      const previousPage = this.currentPage() - 1;
      this.currentPage.set(previousPage);
      this.getMovies(search, previousPage);
    }
  }

  getMovie(imdbID: string){
    const url = this._baseUrl + "?i=" + imdbID + "&apikey=" + this._apikey;

    this._http.get<MovieDetails>(url)
    .pipe(take(1))
    .subscribe(data => {
      this.movie.set(data);
    })
  }

  getMovies(title: string, page: number = 1){
    const url = this._baseUrl + "?s=" + title + "&apikey=" + this._apikey + "&page=" + page;

    this._http.get<SearchResult>(url)
    .pipe(take(1))
    .subscribe(data => {
      this.movies.set(data.Search);
      this.totalResults.set(Number(data.totalResults) || 0);
      this.currentPage.set(page);
      console.log(this.movies());
    })
  }
}

