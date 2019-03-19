import { Component, OnInit, Input } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.page.html',
  styleUrls: ['./product-modal.page.scss'],
})
export class ProductModalPage implements OnInit {
  @Input() data: any;

  constructor(public navParams: NavParams, public modalController:ModalController) { }

  ngOnInit() {
  }


  async close(){
    await this.modalController.dismiss();
  }

}
