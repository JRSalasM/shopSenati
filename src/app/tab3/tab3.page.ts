import { Component } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { HistoryModalPage } from '../history-modal/history-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public _historyservice: HistoryService,
              public modalController: ModalController){}

  async viewdetails(details:any){
    console.log(details);
    const modal = await this.modalController.create({
      component: HistoryModalPage,
      componentProps: {data:details}
    });
    return await modal.present();
  }

}
