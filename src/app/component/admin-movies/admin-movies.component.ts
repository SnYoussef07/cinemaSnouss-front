import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminMoviesService } from 'src/app/services/admin-movies.service';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.scss'],
})
export class AdminMoviesComponent implements OnInit {
  public movieForm: FormGroup;
  public categories: any;

  constructor(
    private fb: FormBuilder,
    private adminMovieService: AdminMoviesService
  ) {
    this.movieForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      title: [],
      description: [],
      filmDirector: [],
      duration: [],
      releaseDate: [],
      trailer: [],
      category: [],
      picture: [],
      banner: [],
      fileSource: [],
      fileSourceBanner: [],
    });

    this.categories = this.adminMovieService.getCategories().subscribe(
      (data: any) => (this.categories = data),
      (err: any) => console.log(err)
    );
  }

  public onAddMovie() {
    /* get category */
    this.getCatById(this.movieForm.value.category);
    this.adminMovieService.addMovie(this.movieForm.value).subscribe(
      (data: any) => {
        this.adminMovieService
          .uploadPictures(this.movieForm.value, data.id)
          .subscribe(
            (item: any) => {
              this.adminMovieService
                .uploadBanner(this.movieForm.value, data.id)
                .subscribe((data: any) => {
                  this.movieForm.reset();
                });
            },
            (err: any) => {
              console.log(err);
            }
          );
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  public getCatById(id: any) {
    const cat = this.categories.filter((myCat: any) => myCat.id == id);
    this.movieForm.patchValue({
      category: cat[0],
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.movieForm.patchValue({
        fileSource: file,
      });
    }
  }

  onFileChangeBanner(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.movieForm.patchValue({
        fileSourceBanner: file,
      });
    }
  }
}
