import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { LanguageComponent } from './language/language.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RefrenceComponent } from './refrence/refrence.component';
import { ShareAppComponent } from './share-app/share-app.component';
import { MoreAppsComponent } from './more-apps/more-apps.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public popoverController: PopoverController, public modalController: ModalController) {

  }
  ngOnInit() {

  }
  async about() {
    const modal = await this.modalController.create({
      component: AboutComponent
    });
    return await modal.present();
  }
  async donate() {
    const modal = await this.modalController.create({
      component: DonateComponent
    });
    return await modal.present();
  }
  async language() {
    const modal = await this.modalController.create({
      component: LanguageComponent
    });
    return await modal.present();
  }
  
  async calendar() {
    const modal = await this.modalController.create({
      component: CalendarComponent
    });
    return await modal.present();
  }

  async refrences(){
    const modal = await this.modalController.create({
      component: RefrenceComponent
    });
    return await modal.present();
  }
  async shareApp(){
    const modal = await this.modalController.create({
      component: ShareAppComponent
    });
    return await modal.present();
  }
  async moreApps(){
    const modal = await this.modalController.create({
      component: MoreAppsComponent
    });
    return await modal.present();
  }
  async settings(){
    const modal = await this.modalController.create({
      component: SettingsComponent
    });
    return await modal.present();
  }
}
