import { GlobalActions } from './../store/global.actions';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { catchError, shareReplay } from 'rxjs/operators';

import * as queryString from 'query-string';

import { environment } from 'src/environments/environment';
import { MessagesService } from '../modules/messages/messages.service';
import { Store } from '@ngxs/store';


@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient, private messages: MessagesService, private store: Store) { }

  get<payloadT>(endPointUrl: string, payload?: any): Observable<payloadT> {
    const params = payload
      ? new HttpParams({
        fromString: queryString.stringify(payload, { skipNull: true }),
      })
      : {};

    return new Observable((observer) => {
      this.http
        .get<payloadT>(`${environment.baseUrl}${endPointUrl}`, {
          params,
        })
        .pipe(shareReplay(), catchError((error) => this.handleError(error)))
        .subscribe((res: any) => {
          res?.error ? observer.error(res.error) : observer.next(res);
          observer.complete();
        });
    });
  }

  put<payloadT>(endPointUrl: string, payload: any): Observable<any> {
    return new Observable((observer) => {
      this.http
        .put<payloadT>(
          `${environment.baseUrl}/${endPointUrl}`,
          payload,
        )
        .pipe(shareReplay(), catchError((error) =>
          this.handleError(error)
        ))
        .subscribe((res: any) => {
          res?.error ? observer.error(res.error) : observer.next(res);
          observer.complete();
        });
    });
  }

  post<payloadT>(endPointUrl: string, payload: any): Observable<any> {
    return new Observable((observer) => {
      this.http
        .post<payloadT>(
          `${environment.baseUrl}/${endPointUrl}`,
          payload,
        )
        .pipe(catchError((error) =>
          this.handleError(error)
        ))
        .subscribe((res: any) => {
          res?.error ? observer.error(res.error) : observer.next(res);
          observer.complete();
        });
    });
  }

  private handleError(err: any): Observable<never> {

    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    this.messages.showErrors(errorMessage);
    this.store.dispatch(new GlobalActions.SetError(errorMessage))
    return throwError(errorMessage);
  }
}
