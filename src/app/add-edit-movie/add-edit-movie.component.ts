import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MovieModel} from "../models/movie.model";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-add-edit-movie',
  templateUrl: './add-edit-movie.component.html',
  styleUrls: ['./add-edit-movie.component.css']
})
export class AddEditMovieComponent implements OnChanges{
  @Input() movieInput : MovieModel = {id :"",title : "", director : "", description : "", year : ""};

  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  director = new FormControl('', [Validators.required]);
  year = new FormControl('', [Validators.required]);

  constructor(private movieService : MovieService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("add-edit-movie - onChanges()");
    console.log(this.movieInput);
    if(this.movieInput.id != ""){
      this.title = new FormControl(this.movieInput.title, [Validators.required]);
      this.description = new FormControl(this.movieInput.description, [Validators.required]);
      this.director = new FormControl(this.movieInput.director, [Validators.required]);
      this.year = new FormControl(this.movieInput.year, [Validators.required]);
    }else{
      this.title = new FormControl('', [Validators.required]);
      this.description = new FormControl('', [Validators.required]);
      this.director = new FormControl('', [Validators.required]);
      this.year = new FormControl('', [Validators.required]);
    }
  }
  onSave() : void {
    let movie: MovieModel = {
      id : this.movieInput.id,
      title: this.title.getRawValue()!,
      director: this.director.getRawValue()!,
      description: this.description.getRawValue()!,
      year: this.year.getRawValue()!
    };
    console.log(movie);
    if (this.movieInput.id != "") {
      this.movieService.update(movie).then((response: any) => {
        console.log("response update");
        console.log(response);
      })
    } else {
      this.movieService.add(movie).then((response: any) => {
        console.log("response add");
        console.log(response);
      })
    }
  }
  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }
    return "";
  }


}
