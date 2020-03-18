import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { DataService } from '../data.service';
import { EventPage } from './event/event.page';
import { MenuComponent } from '../menu/menu.component';
import { MenuTypeComponent } from '../menu-type/menu-type.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  events: any;
  constructor(public modalController: ModalController, public service: DataService, public popoverController: PopoverController) { }

  doRefresh(event) {
    this.events = this.service.getEvents();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.events = this.service.getEvents();  
  }

  async getEventById(id) {
    const modal = await this.modalController.create({
      component: EventPage,
      animated: true,
      componentProps: {
        eventId: id
      }
    });
    return await modal.present();
  }

  async openMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuComponent,
      event: ev,
      animated: true
    });
    return await popover.present();
  }

  async openTypeMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuTypeComponent,
      event: ev,
      animated: true,
      componentProps: {
        types: [
          { id: 1, type: 'political_event', title: 'سیاسی' },
          { id: 2, type: 'caltural_event', title: 'فرهنگی' },
          { id: 3, type: 'art_event', title: 'هنری' }
        ]
      }
    });
    popover.onDidDismiss().then(res => {
      this.filter(res.data);
    })
    return await popover.present();
  }

  filter(type) {
    if (type != undefined) {
      this.events = this.service.getEventByType(type);
    }
  }

}
