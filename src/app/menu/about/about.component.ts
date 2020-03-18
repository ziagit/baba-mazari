import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu.component';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {
  about: {};
  constructor(public modalController: ModalController,public popoverController: PopoverController, public service: DataService) { }

  ngOnInit() {
    this.about = this.service.getAbout();
  }
  close() {
    this.modalController.dismiss();
    this.popoverController.dismiss();
  }
}
