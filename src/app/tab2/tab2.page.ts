import { Component, OnInit } from '@angular/core';
import { ListshopService } from '../services/listshop.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  pagototal:number = 0;
  constructor(public _listshopservice: ListshopService){

  }
  
  ngOnInit(){
    this.monto();
  }

  monto(){
    this._listshopservice.listas.forEach( async (e)=>{      
      this.pagototal = this.pagototal + e.total;
    });
  }
  
}
