import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env';

import { ApiUrls } from '@core/config/api-urls';


export enum ApiMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http: HttpClient;
  constructor(private injector: Injector) { 
    this.http = this.injector.get(HttpClient);
  }

  /**
   * Executes an HTTP call based on the provided method, endpoint, and data.
   *
   * @param {ApiMethod} method - The HTTP method to use for the call. (GET, POST, PUT, DELETE)
   * @param {string} url - The endpoint for the API.
   * @param {any} [data] - Optional data to send with the request.
   * @returns {Observable<any>} An Observable of the HTTP response.
   */
  requestCall(url: string, method: ApiMethod, data?: any): Observable<any> {
    let response: Observable<any>;

    switch (method) {
      case ApiMethod.GET:
        response = this.http
          .get(`${url}`)
          .pipe(catchError((err) => this.handleError(err)));
        break;
      case ApiMethod.POST:
        response = this.http
          .post(`${url}`, data)
          .pipe(catchError((err) => this.handleError(err)));
        break;
      case ApiMethod.PUT:
        response = this.http
          .put(`${url}`, data)
          .pipe(catchError((err) => this.handleError(err)));
        break;
      case ApiMethod.DELETE:
        response = this.http
          .delete(`${url}`)
          .pipe(catchError((err) => this.handleError(err)));
        break;
      default:
        throw new Error('Method not supported');
    }

    return response;
  }

  /**
   * Handles errors encountered during HTTP requests.
   *
   * @param {any} error - The error object to handle.
   * @returns {Observable<any>} An Observable that errors with the given error.
   */
  private handleError(error: any): Observable<never> {
    // Error handling implementation here...
    console.error('An error occurred:', error);
    return throwError(() => new Error(error));
  }
}



