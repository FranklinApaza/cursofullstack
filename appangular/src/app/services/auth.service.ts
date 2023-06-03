import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  private header() {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return headers;
  }

  postLogin(data: any): Observable<any> {
    let body = JSON.stringify(data);
    return this.http.post(this.baseUrl + 'auth/login', body, { headers: this.header() });
  }
}
