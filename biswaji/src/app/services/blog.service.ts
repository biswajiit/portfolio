import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog';
import { Profile } from '../models/profile';


@Injectable()
export class BlogService {


  constructor(private http: HttpClient) { }

  getAllBlogs() {
    return this.http.get<Blog[]>("../assets/data/blogs.json");
  }

  getProfile() {
    return this.http.get<Profile>("../assets/data/profile.json");
  }
}
