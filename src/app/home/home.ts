import { Component } from '@angular/core';
import { Search } from '../search/search';
import { Results } from '../results/results';
import { MovieapiService } from '../movieapi-service';
import { signal } from '@angular/core';



@Component({
  selector: 'app-home',
  imports: [Search, Results],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  movieService = MovieapiService;
}
