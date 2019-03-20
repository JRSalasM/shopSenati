import { Component, OnInit, Input } from '@angular/core';
import { ModalController,NavParams, AlertController, ToastController } from '@ionic/angular';
import { listshop } from '../models/listshop';
import { ListshopService } from '../services/listshop.service';
@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.page.html',
  styleUrls: ['./product-modal.page.scss'],
})
export class ProductModalPage implements OnInit {
  @Input() data: any;

  item: listshop;
  quantity:number = 1;

  constructor(public navParams: NavParams,
              public modalController:ModalController,
              public alertController: AlertController,
              public _listshopservice: ListshopService,
              public toastController: ToastController) { }

  ngOnInit() {
  }


  async close(){
    await this.modalController.dismiss();
    this.quantity = 1;
  }

  async additem(){
    this.item = await new listshop(this.data.name,this.quantity,this.data.price,this.quantity * this.data.price,this.data.img);
    await this._listshopservice.agregarLista( this.item );
    await this.modalController.dismiss();
    this.quantity = 1;
    const toast = await this.toastController.create({
      message: 'producto agregado',
      showCloseButton: true,
      position: 'top',
      duration: 1000,
      closeButtonText: 'Cerrar'
    });
    toast.present();
  } 

  aumentarCantidad(){
    if(this.quantity < 10)
    this.quantity ++;
  }
  disminuirCantidad(){
    if(this.quantity > 1)
    this.quantity --;
  }
}
