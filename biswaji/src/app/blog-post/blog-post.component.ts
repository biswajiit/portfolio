import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from '../models/blog'
import { BlogService } from '../services/blog.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Output() onShowBlog = new EventEmitter();

  pages: Number[] = [1];
  showBlog: Boolean = false;
  blogs: Blog[];
  returnedBlogs: Blog[];
  blog: Blog;
  constructor(private svc: BlogService) {
  }

  ngOnInit() {
    this.getAllBlogs();
    this.returnedBlogs = this.blogs.slice(0, 1);
  }

  getAllBlogs() {
    let obs = this.svc.getAllBlogs();
    obs.subscribe((response) => {
      this.blogs = response;
    })
  }

  showCurrentBlog(blog) {
    this.showBlog = true;
    this.blog = blog;
  }

  

}
