import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { SocialShareComponent } from '../../social-share/social-share.component';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  galleryId;
  gallery: any;
  constructor(public modalController: ModalController, public service: DataService, public popoverController: PopoverController, public viewer: PhotoViewer) { }

  ngOnInit() {
    this.gallery = this.service.getGalleryById(this.galleryId);
  }

  close() {
    this.modalController.dismiss();
  }

  async share(title, place, file) {
    const popover = await this.popoverController.create({
      component: SocialShareComponent,
      componentProps: {
        title: title,
        detail: place,
        file: file
      }
    });
    return await popover.present();
  }
  view(image) {
    this.viewer.show(image);
  }
}
