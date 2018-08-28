import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  constructor(private route: ActivatedRoute, private svc: BlogService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.svc.getAllBlogs().subscribe(blogs => this.blog = blogs.find(blog => blog.id === id));
  }
}
