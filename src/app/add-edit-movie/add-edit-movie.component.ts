import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MovieModel} from "../models/movie.model";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent {
  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  director = new FormControl('', [Validators.required]);
  year = new FormControl('', [Validators.required]);

  constructor(private movieService : MovieService) {
  }
  onSave() : void {
    let movie : MovieModel = {
      title : this.title.getRawValue()!,
      director : this.director.getRawValue()!,
      description : this.description.getRawValue()!,
      year : this.year.getRawValue()!
    };
    this.movieService.add(movie).then((response : any) =>{
      console.log("response add");
      console.log(response);
    })
    console.log(movie);
  }
  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }
    return "";
  }
}
