import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../common/constant';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const lang = localStorage.getItem('lang') || Constants.DEFAULT_LANG;

    request = request.clone({
      setHeaders: {
        'Accept-Language': lang,
      },
    });
    return next.handle(request);
  }
}
