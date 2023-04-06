import { Component } from '@angular/core';
import {MovieModel} from "../models/movie.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedMovie : MovieModel = {id : "",title : "", director : "", description : "", year : ""};
  constructor() {
  }
  public onReceivedMovie(movie : MovieModel) : void{
    console.log("dashboard - onReceivedMovie()");
    console.log(movie);
    this.selectedMovie = movie;
  }

}
