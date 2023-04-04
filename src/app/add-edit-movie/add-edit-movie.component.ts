import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

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

  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }
    return formControl.hasError('email') ? 'Not a valid email' : '';
  }
}
