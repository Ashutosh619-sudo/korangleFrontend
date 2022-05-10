import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Actor{
  constructor(
    public id: number,
    public name: string,
    public date_of_birth:string,
    public no_of_movies: number,
  )
  {}
}


@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {


  actors: Actor[] = [];
  constructor(private httpClient: HttpClient,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getActors()
  }

  getActors(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("id",id)
    this.httpClient.get<any>(`http://localhost:8000/movie/get-actors?id=${id}`).subscribe(
      response => {
        console.log(response)
        this.actors = response["data"];
      }
    )
  }

  

}
