import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observabledemo1',
  templateUrl: './observabledemo1.component.html',
  styleUrls: ['./observabledemo1.component.css']
})
export class Observabledemo1Component implements OnInit{
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchComments();
    this.fetchPhotos();
  }

  fetchUsers() {
    let userPromise = fetch('https://jsonplaceholder.typicode.com/products');
    userPromise.then(
      (response) => {console.log(response);},
      (error) => {console.log(error);}
    );
  }

  //old way
  fetchComments() {
    let commentObservable = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
    commentObservable.subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('Completed...')
    )
  }

  //new way
  fetchPhotos(){
    this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)},
      complete: () => {console.log('completed...')}
    });
  }
}
