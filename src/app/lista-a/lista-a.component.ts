import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-a',
  templateUrl: './lista-a.component.html',
  styleUrl: './lista-a.component.scss'
})
export class ListaAComponent implements OnInit {
  public valor: string = '<li>Lucio</li>';
  constructor() {}
  ngOnInit() {}
}
