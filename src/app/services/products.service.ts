import { Injectable } from '@angular/core';
import { products } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: products[] = [
    {
      id: 1552977417820,
      name: "Tablet",
      details:"Detalle del producto",
      img:"assets/img/p1.jpg",
      price: 1000,
      created_at: new Date()
    },
    {
      id: 1552977417821,
      name: "Memoria SD 32GB",
      details:"Detalle del producto",
      img:"assets/img/p2.jpg",
      price: 50,
      created_at: new Date()
    },
    {
      id: 1552977417822,
      name: "USB 16GB",
      details:"Detalle del producto",
      img:"assets/img/p3.jpg",
      price: 30,
      created_at: new Date()
    },
    {
      id: 1552977417823,
      name: "Teclado Basico",
      details:"Detalle del producto",
      img:"assets/img/p4.jpg",
      price: 25,
      created_at: new Date()
    },
    {
      id: 1552977417824,
      name: "Modem",
      details:"Detalle del producto",
      img:"assets/img/p5.jpg",
      price: 90,
      created_at: new Date()
    },
    {
      id: 1552977417825,
      name: "Reloj",
      details:"Detalle del producto",
      img:"assets/img/p6.jpg",
      price: 250,
      created_at: new Date()
    },
    {
      id: 1552977417826,
      name: "Visor VR",
      details:"Detalle del producto",
      img:"assets/img/p7.jpg",
      price: 60,
      created_at: new Date()
    },
    {
      id: 1552977417827,
      name: "Selfie Stick",
      details:"Detalle del producto",
      img:"assets/img/p8.jpg",
      price: 120,
      created_at: new Date()
    }
  ]

  constructor() { }
}
