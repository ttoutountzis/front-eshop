import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Product, Photo, Post } from '../model';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.css']
})
export class PopularItemComponent implements OnInit {
  products: Array<Product> = [];
  posts: Array<Post> = [];
  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.getPopularPhotos();
  }

  getPopularPhotos() {
    this.mainService.getPopularPhotos().subscribe((res) => {
      this.posts = res.splice(0, 6);
      console.log(this.posts);
    }, error => {
      console.log(error.message);
      alert(error.message);
    });
  }

}
