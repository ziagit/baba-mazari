import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PopoverController } from '@ionic/angular';
import { SocialShareComponent } from '../../social-share/social-share.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  eventId;
  event;
  constructor(public modalController: ModalController, public service: DataService, private socialSharing: SocialSharing, public popoverController: PopoverController) { }

  ngOnInit() {
    this.event = this.service.getEventById(this.eventId)[0];
  }
  close() {
    this.modalController.dismiss();
  }

  async share(title, detail, file) {
    const popover = await this.popoverController.create({
      component: SocialShareComponent,
      componentProps: {
        title: title,
        detail: detail,
        file: file
      }
    });
    return await popover.present();
  }

}
