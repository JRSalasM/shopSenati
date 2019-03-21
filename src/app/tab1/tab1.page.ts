import { Component , OnInit } from '@angular/core';
import { products } from '../models';
import { ProductsService } from '../services/products.service';
import { ModalController } from '@ionic/angular';
import { ProductModalPage } from '../product-modal/product-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  products:products [] = [];

  constructor( public _productsServices: ProductsService,
               public modalController: ModalController){
 
  }

  ngOnInit() {
  }

  async detailProduct(id:number) {
    console.log(id);
    var item= this._productsServices.products.find(p=>p.id===id);
    const modal = await this.modalController.create({
      component: ProductModalPage,
      componentProps: {data:item}
    });
    return await modal.present();
  }
}
