import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts;
  
  constructor(private service:PostService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
  
  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';
  
    this.service.create(post)
      .subscribe((response: { id }) => {
        post['id'] = response.id;
        this.posts.splice(0,0, post);
      });
  }
}