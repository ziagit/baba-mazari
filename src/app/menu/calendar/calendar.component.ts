import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, AlertController } from '@ionic/angular';
import { MenuComponent } from '../menu.component';
import { DataService } from "../../data.service";
import { Calendar } from '@ionic-native/calendar/ngx';
import { CalendarComponentOptions } from 'ion2-calendar';


@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  date: string;
  type: 'string';
  constructor(public modalController: ModalController, public popoverController: PopoverController,private alertCtrl: AlertController) { }

  ngOnInit() {

  }

  onChange($event) {
    console.log($event);
  }
  optionsSingle: CalendarComponentOptions = {
    color: 'danger'
  };

  async onEventSelected(event) {
    console.log("funccing event: ", event)
  }


  close() {
    this.modalController.dismiss();
    this.popoverController.dismiss();
  }
}
