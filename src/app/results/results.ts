import { Component, signal } from '@angular/core';
import { MovieapiService } from '../movieapi-service';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {

  movieService=inject(MovieapiService);
}
