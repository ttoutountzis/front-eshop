import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Photo, Post } from './model';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private baseUrl = environment.fakeapi;
  // public paramsBySearch = new HttpParams().set('order', "2")
  //   .set('search', this.searchTerms).set('batch', "1")
  //   .set('batchSize', "40");
  constructor(
    private http: HttpClient
  ) { }

  getPopularPhotos() {
    return this.http.get<Array<Post>>(this.baseUrl + 'posts').pipe(
      catchError(this.errorHandler)
    );
  }

  loadAttributesGroupBySearch(searchInput: string, orderInput: string,
                              batchInput: string, batchSizeInput: string): Observable<Array<any>> {
    const myparams = new HttpParams().set('search', searchInput)
      .set('batch', batchInput).set('batchSize', batchSizeInput).set('order', orderInput);

    return this.http.get<Array<any>>(this.baseUrl + 'gemydata/', { params: myparams })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error || 'Server Error');
  }
}
