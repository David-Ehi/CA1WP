import { Component, inject } from '@angular/core';
import { MovieapiService } from '../movieapi-service';
import { FormsModule } from '@angular/forms';
import { output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  
 title = '';

 movie = inject(MovieapiService);

  SearchMovie() {
    this.movie.getMovie(this.title)
}

SearchMovies() {
    this.movie.Searchtitle.set(this.title);
    this.movie.getMovies(this.title)
}
}
