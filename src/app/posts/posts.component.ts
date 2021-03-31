import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  readonly ROOT_URL ='https://jsonplaceholder.typicode.com';
  posts:any;
  
  constructor(private http:HttpClient) 
  {}
  getPosts()
    {
      this.posts=this.http.get(this.ROOT_URL+'/posts'); 
          
    }

  ngOnInit(): void {
  }

}
