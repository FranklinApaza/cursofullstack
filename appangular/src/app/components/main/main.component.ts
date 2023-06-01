import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  visible: boolean = true;
  expresion: string = 'Esto es una prueba';
  otraVariable: string = "Esto es otro texto";
  miNombre: string = '';
  persona: any = {
    id: 1,
    nombre: "Jose Ramirez",
    ci: "2135455"
  };
  imagen: string = "../assets/img/angular.png";
  classes: string = 'text-danger font-bold resaltado';
  fechaHoy: Date = new Date();
  montoTotal: number = 45899.4;
  texto: string = "Este es un texto de prueba";
  valorBool: boolean = true;
  productos: any[] = [
    { id: 1, nombre: 'Sillón', precio: 45, cantidad: 7 },
    { id: 2, nombre: 'Mesa', precio: 754, cantidad: 10 },
    { id: 3, nombre: 'Escritorio', precio: 997, cantidad: 7 }
  ];
  operacion: string = 'multiplicar';
  valor1: number = 12;
  valor2: number = 345;

  ngOnInit() {
    registerLocaleData(es);
  }

  setVisible() {
    this.visible = !this.visible;
  }

}
