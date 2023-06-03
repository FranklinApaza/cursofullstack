import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  productoId: string = '0';
  edit: any;
  btnText: string = 'Guardar cambios';

  constructor(private activatedRoute: ActivatedRoute,
    private _productoService: ProductoService) {
    let pid = this.activatedRoute.snapshot.paramMap.get('id');
    if (pid != null) {
      if (pid != '0') {
        this.productoId = pid;
        this.getProductoById(parseInt(this.productoId));
      } else {
        this.btnText = 'Crear producto';
      }

    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.edit = params['edit'] || 'true';
      }
    );
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

  guardar() {
    if (this.producto.id == 0) {
      this._productoService.postProducto(this.producto).subscribe(
        (response) => {
          alert('Producto creado exitosamente.');
        },
        (error) => {
          console.log('Error', error);
        }
      );
    } else {
      this._productoService.putProducto(this.producto.id, this.producto).subscribe(
        (response) => {
          alert('Producto modificado exitosamente.');
          this.getProductoById(this.producto.id);
        },
        (error) => {
          console.log('Error', error);
        }
      );
    }

  }
}
