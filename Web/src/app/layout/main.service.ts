import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Photo } from './model';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  private baseUrl = environment.fakeapi;

  constructor(
    private http: HttpClient
  ) {}

  getPopularPhotos() {
    return this.http.get<Array<Photo>>(this.baseUrl + 'photos').pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error || 'Server Error');
  }
}
