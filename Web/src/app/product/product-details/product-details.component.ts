import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { Post } from 'src/app/layout/model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private productservice: ProductService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id && params.id !== 'new') {
        this.getMyPost(params.id);
      } else {
        this.post = new Post();
      }
    });
  }

  getMyPost(id: number) {
    console.log('Loading the requested post!!!!!!!!!');
    this.productservice.getPost<Post>(id, 'posts/').subscribe((result) => {
      this.post = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }


  deleteMyPost() {
    this.productservice.deletePost(this.post.id).subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

  updateMyPost() {
    this.productservice.updatePost(this.post).subscribe((result) => {
      this.post = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

  insertMyPost() {
    this.productservice.insertPost(this.post).subscribe((result) => {
      this.post = result;
      this.location.go('/post/' + result.id);
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}
