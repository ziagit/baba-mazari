import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu.component';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-share-app',
  templateUrl: 'share-app.component.html',
  styleUrls: ['share-app.component.scss']
})
export class ShareAppComponent implements OnInit {

  constructor(public modalController: ModalController,public popoverController: PopoverController, public service: DataService) { }

  ngOnInit() {
    
  }
  
  close() {
    this.modalController.dismiss();
    this.popoverController.dismiss();
  }
}
