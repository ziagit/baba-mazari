import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { BiographyPage } from './biography/biography.page';
import { DataService } from '../data.service';
import { MenuComponent } from '../menu/menu.component';
import { MenuTypeComponent } from '../menu-type/menu-type.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  biographies;
  constructor(public modalController: ModalController, public service: DataService, public popoverController: PopoverController) {

  }

  doRefresh(event) {
    this.biographies = this.service.getHeros();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.biographies = this.service.getHeros();
  }

  async openBiographyModal(id) {
    const modal = await this.modalController.create({
      component: BiographyPage,
      animated: true,
      componentProps: {
        bioId: id
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
          { id: 1, type: 'political_person', title: 'شخصیت های سیاسی' },
          { id: 2, type: 'caltural_person', title: 'شخصیت های فرهنگی' },
          { id: 3, type: 'art_person', title: 'شخصیت های هنری' }
        ]
      },
    });
    popover.onDidDismiss().then(res => {
      this.filter(res.data);
    })
    return await popover.present();
  }


  filter(type) {
    if (type != undefined) {
      this.biographies = this.service.getHeroByType(type);
    }

  }

}
