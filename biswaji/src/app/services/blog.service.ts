import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog';

@Injectable()
export class BlogService {
 
  blogs:Blog[];
  constructor(private http: HttpClient) { }

  getAllBlogs(){
    let obs = this.http.get<Blog[]>("../assets/data/blogs.json");
    obs.subscribe((response) => {
      this.blogs = response;
    });
    console.log(this.blogs);
    return this.blogs;
    
  }

}
