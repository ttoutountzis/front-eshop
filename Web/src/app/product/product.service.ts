import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../layout/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.fakeapi;
  // observable starting mechanism//  the zero value is optional it can be null as value
  private postsCountSubject$ = new BehaviorSubject<number>(0);
  postsCount$ = this.postsCountSubject$.asObservable();
  // get set for the value of the observable
  get postsCount(): number { return this.postsCountSubject$.getValue(); }
  set postsCount(value: number) { this.postsCountSubject$.next(value); }



  constructor(private http: HttpClient) {
  }
  // T is a generic type which can be any other class or type
  // check product-details for example
  getPost<T>(id: number, url: string) {
    return this.http.get<T>(this.baseUrl + url + id).pipe(
      catchError(this.errorHandler)
    );
  }

  getPosts() {
    return this.http.get<Array<Post>>(this.baseUrl + 'posts').pipe(
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

