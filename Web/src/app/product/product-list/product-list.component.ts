import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  posts: Array<any>;
  constructor(private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getPostsForComponent();

  }


  getPostsForComponent() {
    this.productService.getPosts().subscribe((res) => {
      this.posts = res.splice(0, 10);
      this.productService.postsCount = this.posts.length;
    }, error => {
      alert(error.message);
    });
  }


}
