import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog';

@Injectable()
export class BlogService {
 
 
  constructor(private http: HttpClient) { }

  getAllBlogs(){
    return this.http.get<Blog[]>("../assets/data/blogs.json");
  }

}
