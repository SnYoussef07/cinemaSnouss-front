import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.scss'],
})
export class AdminMoviesComponent implements OnInit {
  public movieForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.movieForm = this.fb.group({});
  }

  public onAddMovie() {
    console.log(this.movieForm.value);
  }
}
