import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jitterbittrial391201.jitterbit.net/demos_sandbox/angularAccount';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }
  
  create(post){
    return this.httpClient.post(this.url, JSON.stringify(post));
  }
  
}