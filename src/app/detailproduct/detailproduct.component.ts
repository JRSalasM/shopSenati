import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.scss'],
})
export class DetailproductComponent {

  @Input() value: number;

  constructor(navParams: NavParams) { }

}
