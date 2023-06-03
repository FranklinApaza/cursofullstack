import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ProductoService]

})
export class ListComponent {
  productos: any[] = [];

  constructor(private router: Router, private _productoService: ProductoService) {
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

  verDetalle(id: string) {
    this.router.navigate(['producto/detalle/' + id], { queryParams: { edit: false } });
  }

  verEditarProducto(id: string) {
    this.router.navigate(['producto/detalle/' + id], { queryParams: { edit: true } });
  }

  eliminarProducto(id: string, nombre: string) {
    if (confirm("¿Está realmente seguro de eliminar el producto " + nombre + "?")) {
      this._productoService.deleteProducto(parseInt(id)).subscribe(
        (response) => {
          alert('Producto eliminado exitosamente.');
          this.getProductos();
        },
        (error) => {
          console.log('Error', error);
        }
      );
    }
  }

  nuevoProducto() {
    this.router.navigate(['producto/detalle/0'], { queryParams: { new: true } });
  }

}
