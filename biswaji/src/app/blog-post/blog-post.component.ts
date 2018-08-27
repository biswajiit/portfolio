import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Blog } from '../models/blog'
import { BlogService } from '../services/blog.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Output() onShowBlog = new EventEmitter();
  itemsPerPage: number = 1;
  showBlog: Boolean = false;
  blogs: Blog[] = [];
  returnedBlogs: Blog[];
  blog: Blog;
  constructor(private svc: BlogService) {
  }

  ngOnInit() {
    this.getAllBlogs();
  }

  getAllBlogs() {
    let obs = this.svc.getAllBlogs();
    obs.subscribe((response) => {
      this.blogs = response;
      this.returnedBlogs = this.blogs.slice(0, this.itemsPerPage);
    })
  }

  showCurrentBlog(blog) {
    this.showBlog = true;
    this.blog = blog;
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedBlogs = this.blogs.slice(startItem, endItem);
  }

}
