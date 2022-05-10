import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Movie{
  constructor(
    public id: number,
    public title: string,
    public description:string,
    public release_date:string,
    public no_of_actors: number,
    public votes: number
  )
  {}
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  sortBy:string
  constructor(private httpClient:HttpClient) {
    this.sortBy = "title"
   }

  ngOnInit(): void {
    this.getMovies();
  }

  changeSortBy(event: Event){
    this.sortBy = (event.target as HTMLInputElement).value.toLowerCase();
    if(!this.sortBy.localeCompare("title")){
      this.sortBy = "title"
    }
    else{
      this.sortBy = "release"
    }
    this.getMovies()
  }

  upVote(id:number){
    this.httpClient.post<any>(`http://localhost:8000/movie/upvote`,{'id':id}).subscribe(response=>{
      this.getMovies()
    })
    
  }
  downVote(id:number){
    this.httpClient.post<any>(`http://localhost:8000/movie/downvote`,{'id':id}).subscribe(response=>{
      this.getMovies()
    })
    
  }

  getMovies(){
    this.httpClient.get<any>(`http://localhost:8000/movie/?${this.sortBy}=1`).subscribe(
      response => {
        console.log(response)
        this.movies = response["data"];
      }
    )
  }

}
