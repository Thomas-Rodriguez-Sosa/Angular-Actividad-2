import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular2';
  colorChange = false;
  mostrarLista = false;
  urlImagen = 'https://th.bing.com/th/id/OIP.YoEeqJjD_6RohXlsO5bhLQHaJa?rs=1&pid=ImgDetMain';
  birthday = new Date(2003, 8, 6);

  cambiarColor() {
    this.colorChange = !this.colorChange
  }
  ocultarLista() {
    this.mostrarLista = !this.mostrarLista
  }
}