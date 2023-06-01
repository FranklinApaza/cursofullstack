import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [ProductoService]
})
export class DetalleComponent {
  producto: Producto = new Producto();

  constructor(private _productoService: ProductoService) {
    this.getProductoById(3);
  }

  getProductoById(id: number) {
    this._productoService.getProducto(id).subscribe(
      (response) => {
        this.producto = response;
        console.log(response);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
