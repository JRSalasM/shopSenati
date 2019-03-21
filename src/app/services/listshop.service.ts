import { Injectable } from '@angular/core';
import { listshop } from '../models/listshop';

@Injectable({
  providedIn: 'root'
})
export class ListshopService {

  listas: listshop[] = [];
  totalpay:number = 0;

  constructor() {
    this.cargarStorage();
   }

  
  agregarLista( lista: listshop) {
    this.listas.push( lista );
    this.guardarStorage();
    this.payTotal();
  }
  actualizarTodo( lista: any) {
    this.listas =  lista ;
    this.guardarStorage();
  }

  cargarStorage() {
    if(localStorage.getItem('listshop')) {

      this.listas = JSON.parse(localStorage.getItem('listshop'));
      this.payTotal();
    } else {
      this.listas = [];
    }
  }
  borrarTodo(){
    this.listas = [];
    this.guardarStorage();
    this.payTotal();
  }

  borrarLista(lista: listshop) {
    this.listas = this.listas.filter( listaData => {
      return listaData.id !== lista.id
    });
    this.guardarStorage();
    this.payTotal();
  }

  guardarStorage() {

    localStorage.setItem('listshop', JSON.stringify(this.listas));

  }
  payTotal(){
    this.totalpay = 0;
    this.listas.forEach(e=>{
      this.totalpay = this.totalpay + e.total
    })
    console.log(this.totalpay);
  }

}
