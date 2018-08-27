import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  constructor(private svc: BlogService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    let obs = this.svc.getProfile();
    obs.subscribe((profile) => {
      this.profile = profile;
    })
  }

}
