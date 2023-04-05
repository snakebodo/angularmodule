import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {MovieService} from "../movie.service";
import {MovieModel} from "../models/movie.model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, AfterContentChecked{
  movies: Array<MovieModel> = [];


  constructor(private movieService : MovieService) {
  }
  ngOnInit() {
    this.movies = this.movieService.getMoviesList();
  }
  ngAfterContentChecked() {
    this.movies = this.movieService.getMoviesList();
  }
}
