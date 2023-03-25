import { LoadingService } from './loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private _loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this._loadingService.nextLoading(true);
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) =>{
        return throwError(() => new Error(err.message));
      }),
     finalize(() => this._loadingService.nextLoading(false))
  )}
}
