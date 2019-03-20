import { Component } from '@angular/core';
import { ListshopService } from '../services/listshop.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(public _listshopservice: ListshopService){}
}
