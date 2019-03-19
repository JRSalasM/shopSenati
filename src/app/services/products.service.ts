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
      price: 800,
      created_at: new Date()
    },
    {
      id: 1552977417821,
      name: "Tablet",
      details:"Detalle del producto",
      img:"assets/img/p2.jpg",
      price: 800,
      created_at: new Date()
    },
    {
      id: 1552977417822,
      name: "Tablet",
      details:"Detalle del producto",
      img:"assets/img/p3.jpg",
      price: 800,
      created_at: new Date()
    },
    {
      id: 1552977417823,
      name: "Tablet",
      details:"Detalle del producto",
      img:"assets/img/p4.jpg",
      price: 800,
      created_at: new Date()
    },
    {
      id: 1552977417824,
      name: "Tablet",
      details:"Detalle del producto",
      img:"assets/img/p5.jpg",
      price: 800,
      created_at: new Date()
    },
    {
      id: 1552977417825,
      name: "Tablet",
      details:"Detalle del producto",
      img:"assets/img/p6.jpg",
      price: 800,
      created_at: new Date()
    },
    {
      id: 1552977417826,
      name: "Tablet",
      details:"Detalle del producto",
      img:"assets/img/p7.jpg",
      price: 800,
      created_at: new Date()
    },
    {
      id: 1552977417827,
      name: "Tablet",
      details:"Detalle del producto",
      img:"assets/img/p8.jpg",
      price: 800,
      created_at: new Date()
    }
  ]

  constructor() { }
}
