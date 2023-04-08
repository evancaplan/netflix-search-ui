import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable()
export class ApiGatewayInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({ headers: req.headers.append('x-api-key', environment.apiKey) });
    return next.handle(clonedRequest);
  }
}
