import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu.component';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-refrence',
  templateUrl: 'refrence.component.html',
  styleUrls: ['refrence.component.scss']
})
export class RefrenceComponent implements OnInit {
  refrences: {};
  constructor(public modalController: ModalController,public popoverController: PopoverController, public service: DataService) { }

  ngOnInit() {
    this.refrences = this.service.getRefrence();
  }
  close() {
    this.modalController.dismiss();
    this.popoverController.dismiss();
  }
}
