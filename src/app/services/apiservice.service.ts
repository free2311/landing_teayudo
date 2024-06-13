import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  get(path: string): Observable<any> {
    return this.http.get<any>(`${environment.API}${path}`).pipe(map((d) => d));
  }

  post(path: string, data?: any): Observable<any> {
    return this.http
      .post<any>(`${environment.API}${path}`, data)
      .pipe(map((d) => d));
  }

  put(path: string, data?: any): any {
    return this.http
      .put<any>(`${environment.API}${path}`, data)
      .pipe(map((d) => d));
  }

  delete(path: string, data?: any): any {
    return this.http
      .delete<any>(`${environment.API}${path}`, data)
      .pipe(map((d) => d));
  }
}
