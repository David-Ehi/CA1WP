import { Component, input } from '@angular/core';
import { MovieapiService } from '../movieapi-service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  movieService=inject(MovieapiService)

  protected id = input.required<string>();

  ngOnInit() {
    let movieId = this.id();
    this.movieService.getMovie(movieId);
  }
}
