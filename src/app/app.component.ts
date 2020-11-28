import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts;
  accounts;
  parsed;
  displayedColumns: string[] = ['name'];

  
  constructor(private service:PostService) {}
  
  ngOnInit() {

    this.service.getPosts()
        .subscribe(response => {
          this.accounts = JSON.stringify(response);
          this.parsed = JSON.parse(JSON.stringify(response))
          console.log(this.parsed);
        });

  }
}