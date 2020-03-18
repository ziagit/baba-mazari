import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { DataService } from '../../data.service';
import { SocialShareComponent } from '../../social-share/social-share.component';

@Component({
  selector: 'app-detail',
  templateUrl: './biography.page.html',
  styleUrls: ['./biography.page.scss'],
})
export class BiographyPage implements OnInit {
  bioId;
  biography;
  constructor(public modalController: ModalController, public service: DataService, public popoverController: PopoverController) { }

  ngOnInit() {
    this.biography = this.service.getHeroById(this.bioId);
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
