import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  private apiKey = 'live_wpABnsnCbKaQ1ltWe0fIXe4Q7WuvYKluKaVF8i0vw21OYdVeY5ZV3FMsr69zt2or';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = request.clone({ setHeaders: { 'x-api-key': this.apiKey } });
    return next.handle(apiReq);
  }
}