import { Injectable } from '@angular/core';
import { history } from '../models/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: history[] = [];
  totalpay:number = 0;

  constructor() {
    this.cargarStorage();
   }

  
  agregarLista(lista) {
    this.history.push(lista);
    this.guardarStorage();
  }

  cargarStorage() {
    if(localStorage.getItem('history')) {

      this.history = JSON.parse(localStorage.getItem('history'));

    } else {
      this.history = [];
    }
  }

  guardarStorage() {

    localStorage.setItem('history', JSON.stringify(this.history));

  }

}
