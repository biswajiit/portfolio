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

  fixed:boolean = false;
  showBlog:Boolean = false;
  blogs:Blog[];
  blog:Blog;
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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if(document.documentElement.scrollTop >= 420){
      this.fixed = true;
    }else{
      this.fixed = false;
    }
  }

  showCurrentBlog(){
    this.showBlog = true;
    this.onShowBlog.emit(this.showBlog);
  }


}
