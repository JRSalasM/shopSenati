import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.page.html',
  styleUrls: ['./history-modal.page.scss'],
})
export class HistoryModalPage implements OnInit {

  @Input() data: any;

  constructor(public navParams: NavParams,
    public modalController:ModalController) { }

  ngOnInit() {
  }

  async close(){
    await this.modalController.dismiss();
  }

}
