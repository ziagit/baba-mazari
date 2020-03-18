import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu.component';
import { DataService } from "../../data.service";

@Component({
  selector: 'app-language',
  templateUrl: 'language.component.html',
  styleUrls: ['language.component.scss']
})
export class LanguageComponent implements OnInit {
  active=true;
  constructor(public modalController: ModalController, public popoverController: PopoverController, public service: DataService) { 
  }

  ngOnInit() {
  }

segmentChanged(event){
  if(event.detail.value === 'da'){
    document.documentElement.dir = "rtl";
    /*this.translate.setDefaultLang(languageId);*/

        this.modalController.dismiss();
    this.popoverController.dismiss();

  }else{
    document.documentElement.dir = "ltr";
      /*this.translate.setDefaultLang(languageId);*/

    this.modalController.dismiss();
    this.popoverController.dismiss();
  }
  console.log("lang eevent: ", event.detail.value)
}

  close() {
    this.modalController.dismiss();
    this.popoverController.dismiss();
  }
}
