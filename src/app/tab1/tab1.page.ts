import {Component, OnInit} from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';
import {DataService} from "../data.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  slides:any;
  constructor(public modalController: ModalController, public popoverController: PopoverController, public service: DataService) { }

  ngOnInit(){
    this.slides = this.service.getSlides();
  }
  async openMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuComponent,
      event: ev,
      animated: true
    });
    return await popover.present();
  }



}
