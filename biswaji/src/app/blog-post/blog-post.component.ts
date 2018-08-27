import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from '../models/blog'
import { BlogService } from '../services/blog.service';
import { HostListener } from '@angular/core';
import { BlogCount } from '../models/blogCount';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Output() onShowBlog = new EventEmitter();

  pages: Number[] = [1];
  blogCount: BlogCount;
  showBlog: Boolean = false;
  blogs: Blog[];
  blog: Blog;
  constructor(private svc: BlogService) {
  }

  ngOnInit() {
    this.getAllBlogs();
    this.getBlogCount();
  }

  getAllBlogs() {
    let obs = this.svc.getAllBlogs();
    obs.subscribe((response) => {
      this.blogs = response;
    })
  }

  getBlogCount() {
    let obs = this.svc.getBlogCount();
    obs.subscribe((response) => {
      this.blogCount = response;
      this.pages = Array(this.blogCount.count).fill(0);
    })
  }

  showCurrentBlog(blog) {
    this.showBlog = true;
    this.blog = blog;
  }


}
