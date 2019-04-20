import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Product, Photo, Post } from '../model';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.css']
})
export class PopularItemComponent implements OnInit {
  products: Array<Product> = [];
  posts: Array<Post> = [];
  constructor(
    private mainService: ProductService
  ) { }

  ngOnInit() {
    this.getPopularPhotos();
  }

  getPopularPhotos() {
    this.mainService.getPosts().subscribe((res) => {
      this.posts = res.splice(0, 6);
      this.mainService.postsCount = this.posts.length;
    }, error => {
      console.log(error.message);
      alert(error.message);
    });
  }

}
