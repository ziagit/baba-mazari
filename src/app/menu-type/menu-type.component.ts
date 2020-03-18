import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, NavParams } from '@ionic/angular';
import { DataService } from "../data.service";
@Component({
  selector: 'app-menu-type',
  template: `
  <ion-list>
    <ion-item *ngFor="let tp of types" (click)="filterData(tp.type)">
      <ion-label> {{tp.title}}</ion-label>
    </ion-item>
  </ion-list>
  `,
})
export class MenuTypeComponent implements OnInit {
  types;
  constructor(private router: Router, public popoverController: PopoverController, private navParam: NavParams, public service: DataService) {
    this.types = this.navParam.get('types');
  }

  ngOnInit() {
  }
  async filterData(type) {
    this.popoverController.dismiss(type)
  }

}
