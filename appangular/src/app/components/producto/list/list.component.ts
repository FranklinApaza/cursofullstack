import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ProductoService]

})
export class ListComponent {
  productos: any[] = [];

  constructor(private _productoService: ProductoService) {
    this.getProductos();
  }

  getProductos() {
    this._productoService.getListProductos().subscribe(
      (response) => {
        this.productos = response;
        console.log(response);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

}
