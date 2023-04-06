import {AfterContentChecked, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MovieService} from "../movie.service";
import {MovieModel} from "../models/movie.model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, AfterContentChecked{
  @Output() selectMovie : EventEmitter<MovieModel> = new EventEmitter<MovieModel>();

  movies: Array<MovieModel> = [];


  constructor(private movieService : MovieService) {
  }
  ngOnInit() {
    this.movies = this.movieService.getMoviesList();
  }
  ngAfterContentChecked() {
    this.movies = this.movieService.getMoviesList();
  }
  onDelete(movie : MovieModel) : void{
    this.movieService.delete(movie).then((response : any) =>{
      console.log(response);
      alert(`Filmul ${movie.title} a fost sters`);
    })
  }
  onSelect(movie : MovieModel) :void {
    console.log("movie-list - onSelect()");
    console.log(movie);

    this.selectMovie.emit(movie);
  }
}
