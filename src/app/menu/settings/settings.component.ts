import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu.component';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings: {};
  constructor(public modalController: ModalController,public popoverController: PopoverController, public service: DataService) { }

  ngOnInit() {
  }
  close() {
    this.modalController.dismiss();
    this.popoverController.dismiss();
  }
}
