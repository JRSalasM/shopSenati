import { Component, OnInit } from '@angular/core';
import { ListshopService } from '../services/listshop.service';
import { AlertController, ToastController } from '@ionic/angular';
import { HistoryService } from '../services/history.service';
import { history } from '../models/history';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  history:history;

  constructor(public _listshopservice: ListshopService,
              public alertController: AlertController,
              public _historyservice:HistoryService,
              public toastController: ToastController){

  }
  
  ngOnInit(){
 
  }

 async deleteItem(item){
    const alert = await this.alertController.create({
      header: '¿Eliminar producto de la lista?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this._listshopservice.borrarLista(item);
          }
        }
      ]
    });

    await alert.present();
    
  }

  async comprar(){
    const alert = await this.alertController.create({
      header: '¿Realizar pago?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: async () => {
            this.history = new history(this._listshopservice.listas,this._listshopservice.totalpay)
            this._historyservice.agregarLista(this.history);
            this._listshopservice.borrarTodo();
            const toast = await this.toastController.create({
              message: 'Compra realizada con exito',
              showCloseButton: true,
              position: 'bottom',
              duration: 1500,
              closeButtonText: 'Cerrar'
            });
            toast.present();
          }
        }
      ]
    });

    await alert.present();

  }


  
}
