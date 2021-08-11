import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    public static BASE_URL = "http://localhost:7444";

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = req.clone({url: BaseUrlInterceptor.BASE_URL + req.url});
        return next.handle(apiReq);
    }
}
