import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  constructor() { }

  print(arg){
    console.log(arg);
  }

}
