import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpMethod } from '../../constants/constants';
import { ErrorService } from '../error/error.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private _error: ErrorService) {}

  request<T>(api: string, method: HttpMethod, data?: any): Observable<T> {
    let response;

    switch (method) {
      case HttpMethod.GET:
        response = this.http
          .get<T>(`${environment.baseURL}${api}`)
          .pipe(catchError((error) => this.handleError(error)));
        break;
      case HttpMethod.POST:
        response = this.http
          .post<T>(`${environment.baseURL}${api}`, data)
          .pipe(catchError((error) => this.handleError(error)));
        break;
      case HttpMethod.PUT:
        response = this.http
          .put<T>(`${environment.baseURL}${api}`, data)
          .pipe(catchError((error) => this.handleError(error)));
        break;
      case HttpMethod.DELETE:
        response = this.http
          .delete<T>(`${environment.baseURL}${api}`)
          .pipe(catchError((error) => this.handleError(error)));
        break;
    }

    return response;
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurrred:', error.error.message);
    } else {
      this._error.whichError(error.status, error.message);
    }
    return throwError({ error: error.message, status: error.status });
  }
}
