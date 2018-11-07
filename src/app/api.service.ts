import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Photos } from './photos';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = 'https://jsonplaceholder.typicode.com/photos';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
  getPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(apiUrl).pipe(
      tap(todos => console.log('Fetch todos')),
      catchError(this.handleError('getPhotos', []))
    );
  }
}
