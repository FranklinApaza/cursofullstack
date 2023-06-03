import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserToken } from '../models/userToken';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = environment.apiEndpoint;
  private ut = new UserToken();

  constructor(private http: HttpClient) {
    let ret = this.getUserTokenFromLS();
    if (ret) {
      this.ut = ret;
    }
  }

  private header() {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': this.ut.token
    });
    return headers;
  }

  getUserTokenFromLS() {
    let userToken = new UserToken();
    let ls = localStorage.getItem(environment.localStorageJwt);
    if (ls) {
      userToken = JSON.parse(ls);
      return userToken;
    }
    return false;
  }

  getListProductos(): Observable<any> {
    return this.http.get(this.baseUrl + 'productos', { headers: this.header() });
  }

  getProducto(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'productos/' + id, { headers: this.header() });
  }

  postProducto(data: any): Observable<any> {
    let body = JSON.stringify(data);
    return this.http.post(this.baseUrl + 'productos', body, { headers: this.header() });
  }

  putProducto(id: number, data: any): Observable<any> {
    let body = JSON.stringify(data);
    return this.http.put(this.baseUrl + 'productos/' + id, body, { headers: this.header() });
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'productos/' + id, { headers: this.header() });
  }
}
