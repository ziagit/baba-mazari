import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';
import { DataService } from '../data.service';
import { GalleryPage } from './gallery/gallery.page';
import { MenuTypeComponent } from '../menu-type/menu-type.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  gallery: any;
  status = true;
  constructor(public modalController: ModalController, public popoverController: PopoverController, public service: DataService) { }

  doRefresh(event) {
    this.gallery = this.service.getGallery();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.gallery = this.service.getGallery();
  }

  async openMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuComponent,
      event: ev,
      animated: true
    });
    return await popover.present();
  }
  async getGalleryById(id) {
    const modal = await this.modalController.create({
      component: GalleryPage,
      animated: true,
      componentProps: {
        galleryId: id
      }
    });
    return await modal.present();
  }

  async openTypeMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuTypeComponent,
      event: ev,
      animated: true,
      componentProps: {
        types: [
          { id: 1, type: 'image', title: 'عکس' },
          { id: 2, type: 'video', title: 'ودیو' },
          { id: 3, type: 'audio', title: 'صوت' }
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
      this.status = false;
      this.gallery = this.service.getGalleryByFileType(type);
    }
  }

}
