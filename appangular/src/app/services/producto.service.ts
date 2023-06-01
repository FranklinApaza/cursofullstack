import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) {

  }

  private header() {
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'token': ''
    });
    return headers;
  }

  getListProductos(): Observable<any> {
    return this.http.get(this.baseUrl + 'productos', { headers: this.header() });
  }

  getProducto(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'productos/' + id, { headers: this.header() });
  }
}
