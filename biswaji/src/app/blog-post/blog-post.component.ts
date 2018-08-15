import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog'
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
 
  blogs:Blog[];
  constructor(private svc: BlogService) { 
  }

  ngOnInit() {
    this.getAllBlogs();
  }

  getAllBlogs(){
    let obs = this.svc.getAllBlogs();
    obs.subscribe((response) => {
      this.blogs = response;
    })
  }
}
