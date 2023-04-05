import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MovieModel} from "./models/movie.model";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies : Array<MovieModel> = [];
  constructor(private httpClient : HttpClient) {
    this.getMovies();
  }
  public add(movie : MovieModel){
    let body : any = {
      "title": movie.title,
      "description": movie.description,
      "year": movie.year,
      "director": movie.director
    }
    return this.httpClient.post(`${environment.apiUrl}/api/movie`,body).toPromise().then((response : any) => {
      this.getMovies();
      return response;
    })
  }
  public update(movie : MovieModel){
    let body : any = {
      "id" : movie.id,
      "title": movie.title,
      "description": movie.description,
      "year": movie.year,
      "director": movie.director
    }
    console.log("address : " + `${environment.apiUrl}/api/movie/${movie.id}`);
    return this.httpClient.patch(`${environment.apiUrl}/api/movie/${movie.id}`,body).toPromise().then((response : any) => {
      return response;
    })
  }
  public delete(movie : MovieModel){

    console.log("address : " + `${environment.apiUrl}/api/movie/${movie.id}`);
    return this.httpClient.delete(`${environment.apiUrl}/api/movie/${movie.id}`).toPromise().then((response : any) => {
      return response;
    })
  }
  public getMoviesList() : Array<MovieModel> {
    return this.movies;
  }
  public getMovies(){
    return this.httpClient.get(`${environment.apiUrl}/api/movie`).toPromise().then((response : any) => {
      this.movies = response.data;
      console.log(response);
      console.log();
      return response;
    })
  }
}
