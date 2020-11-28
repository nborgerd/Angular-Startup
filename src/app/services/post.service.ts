import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
     return this.httpClient.get("https://jitterbitTRIAL391201.jitterbit.net/demos_sandbox/angularAccount");
  }
  

  
}