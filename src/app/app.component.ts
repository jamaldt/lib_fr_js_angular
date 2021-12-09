import { Component } from "@angular/core";

type MovieType = {
  name: String;
  available: number;
  quantity: number;
};
type MoviesType = Array<MovieType>;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  title: String = "Películas";
  movies: MoviesType = [
    {
      name: "Avengers",
      available: 3,
      quantity: 0
    },
    {
      name: "Terminator",
      available: 5,
      quantity: 0
    }
  ];

  addMovieTicket(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );

    this.movies[movieIndex].quantity += 1;
  }

  removeMovieTicket(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );

    this.movies[movieIndex].quantity -= 1;
  }
}
