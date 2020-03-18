import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController,ToastController, Platform, AlertController } from '@ionic/angular';
import { MenuComponent } from '../menu.component';
import { DataService } from "../../data.service";

import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: 'donate.component.html',
  styleUrls: ['donate.component.scss']
})
export class DonateComponent implements OnInit {

  userForm: any;

  constructor(
    public modalController: ModalController,
    public popoverController: PopoverController, 
    public service: DataService,
    public toastController: ToastController,
    public platform: Platform, 
    public router: Router,
    public alertController: AlertController) {

      this.platform.backButton.subscribe(async () => {
        if (this.router.isActive('/tabs/tab1', true) && this.router.url === '/tabs/tab1') {
          const alert = await this.alertController.create({
            header: 'Close app?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel'
              }, {
                text: 'Close',
                handler: () => {
                  navigator['app'].exitApp();
                }
              }
            ]
          });
  
          await alert.present();
        }
      });



    /*     this.userForm = this.fb.group({
      name: ['', Validators.required],
      card_number: ['', [Validators.required, Validators.maxLength(14), Validators.minLength(14)]],
      back_code: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
      expire_date: ['', Validators.required],
      amount: ['', Validators.required],
    }); */
   }


/*   async presentToast() {
    const toast = await this.toastController.create({
      message: 'تشکر از حمایت شما!',
      duration: 2000
    });
    toast.present();
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
     console.log(this.userForm)
     this.presentToast();
    }
  } */
  ngOnInit() { }

  close() {
    this.modalController.dismiss();
    this.popoverController.dismiss();
  }
}
