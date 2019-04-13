import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../layout/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.fakeapi;

  constructor(private http: HttpClient) { }
  // T is a generic type which can be any other class or type
  // check product-details for example
  getPost<T>(id: number, url: string) {
    return this.http.get<T>(this.baseUrl + url + id).pipe(
      catchError(this.errorHandler)
    );
  }

  deletePost(id: number) {
    return this.http.delete<any>(this.baseUrl + 'posts/' + id).pipe(
      catchError(this.errorHandler)
    );
  }

  insertPost(post: Post) {
    return this.http.post<Post>(this.baseUrl + 'posts', post)
      .pipe(catchError(this.errorHandler));
  }

  updatePost(post: Post) {
    return this.http.put<Post>(this.baseUrl + 'posts/' + post.id, post)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error || 'Server Error');
  }
}

