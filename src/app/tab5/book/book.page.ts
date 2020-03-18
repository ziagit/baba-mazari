import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { PopoverController } from '@ionic/angular';
import { SocialShareComponent } from '../../social-share/social-share.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  bookId;
  book;
  constructor(public modalController: ModalController, public service: DataService, private socialSharing: SocialSharing, public popoverController: PopoverController) { }

  ngOnInit() {
    this.book = this.service.getBookById(this.bookId);
  }
  
  close() {
    this.modalController.dismiss();
  }

  async share() {
    const popover = await this.popoverController.create({
      component: SocialShareComponent,
      componentProps: {
        data: this.book
      }
    });
    return await popover.present();
  }

}
