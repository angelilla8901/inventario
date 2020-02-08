import {Component, OnInit} from '@angular/core';


const ELEMENT_DATA: OrdenCompra[] = [
  {codigo: 'AS1254', nombre: 'Tornillo', cantidad: 5, unidad: 'Cajax100', entregados: 3, pendientes: 2},
  {codigo: 'ER5455', nombre: 'Cable', cantidad: 100, unidad: 'mts', entregados: 100, pendientes: 0}
];

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['Código', 'Nombre', 'Cantidad', 'Unidad', 'Entregados', 'Pendientes'];
  constructor() {
  }

  ngOnInit() {
  }

}

export interface OrdenCompra {
  codigo: string;
  nombre: string;
  cantidad: number;
  unidad: string;
  entregados: number;
  pendientes: number;
}
