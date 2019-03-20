import { Injectable } from '@angular/core';
import { listshop } from '../models/listshop';

@Injectable({
  providedIn: 'root'
})
export class ListshopService {

  listas: listshop[] = [];

  constructor() {
    this.cargarStorage();
   }

  
  agregarLista( lista: listshop) {
    this.listas.push( lista );
    this.guardarStorage();
  }
  actualizarTodo( lista: any) {
    this.listas =  lista ;
    this.guardarStorage();
  }

  cargarStorage() {
    if(localStorage.getItem('listshop')) {

      this.listas = JSON.parse(localStorage.getItem('listshop'));

    } else {
      this.listas = [];
    }
  }

  borrarLista(lista: listshop) {
    this.listas = this.listas.filter( listaData => {
      return listaData.id !== lista.id
    });
    this.guardarStorage();
  }

  guardarStorage() {

    localStorage.setItem('listshop', JSON.stringify(this.listas));

  }

}
