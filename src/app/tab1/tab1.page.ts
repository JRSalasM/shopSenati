import { Component , OnInit } from '@angular/core';
import { products } from '../models';
import { ProductsService } from '../services/products.service';
import { ModalController } from '@ionic/angular';
import { DetailproductComponent } from '../detailproduct/detailproduct.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  products:products [] = [];

  constructor( public _productsServices: ProductsService,
               public modalController: ModalController){
    console.log(_productsServices.products);
  }

  ngOnInit() {
  }

  async detailProduct(id:number) {
    console.log(id);
    const modal = await this.modalController.create({
      component: DetailproductComponent
    });
    return await modal.present();
  }
}
