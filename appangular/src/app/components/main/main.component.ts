import { Component } from '@angular/core';

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

  setVisible() {
    this.visible = !this.visible;
  }

}
