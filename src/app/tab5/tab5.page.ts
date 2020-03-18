import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { DataService } from '../data.service';
import { MenuComponent } from '../menu/menu.component';
import { MenuTypeComponent } from '../menu-type/menu-type.component';
import { BookPage } from './book/book.page';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  books;
  constructor(public modalController: ModalController, public service: DataService, public popoverController: PopoverController) {
  }
  doRefresh(event) {
    this.books = this.service.getBooks();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.books = this.service.getBooks();
  }

  async getBookById(id) {
    const modal = await this.modalController.create({
      component: BookPage,
      animated: true,
      componentProps: {
        bookId: id
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
          { id: 1, type: 'story', title: 'داستان' },
          { id: 2, type: 'poem', title: 'شعر' },
          { id: 3, type: 'art', title: 'هنر' },
          { id: 3, type: 'history', title: 'تاریخ' },
          { id: 3, type: 'language', title: 'زبان' },
          { id: 3, type: 'economy', title: 'اقتصاد' },
          { id: 3, type: 'politic', title: 'سیاست' },
          { id: 3, type: 'tech', title: 'تکنولوژی' },
          { id: 3, type: 'any', title: 'مختلط' }
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
      this.books = this.service.getBookByType(type);
    }
  }



}
