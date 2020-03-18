import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu.component';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-more-apps',
  templateUrl: 'more-apps.component.html',
  styleUrls: ['more-apps.component.scss']
})
export class MoreAppsComponent implements OnInit {
  moreApps: {};
  constructor(public modalController: ModalController,public popoverController: PopoverController, public service: DataService) { }

  ngOnInit() {
    
  }
  close() {
    this.modalController.dismiss();
    this.popoverController.dismiss();
  }
}
