import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
})
export class SocialShareComponent implements OnInit {
title: string;
detail: string;
file: any;
  constructor(private router: Router, public popoverController: PopoverController, private socialSharing: SocialSharing) {

  }
  ngOnInit(){
console.log("data: ", this.title, this.detail, this.file)
  }
  whatsapp() {
    this.socialSharing.shareViaWhatsApp(this.title, this.file, 'https://www.coffeequery.com').then(res => {
      this.popoverController.dismiss();
      console.log('did: ', res)
    }).catch(err => {
      console.log("error: ", err)
    })
  }

  instagram() {
    this.socialSharing.shareViaInstagram(this.title, this.file).then(res => {
      this.popoverController.dismiss();
      console.log('did: ', res)
    }).catch(err => {
      console.log("errror: ", err)
    })
  }

  facebook() {
    this.socialSharing.shareViaFacebook(this.title, this.file, 'https://www.coffeequery.com').then(res => {
      this.popoverController.dismiss();
      console.log('did: ', res)
    }).catch(err => {
      console.log("errror: ", err)
    })
  }

  twitter() {
    this.socialSharing.shareViaTwitter(this.title, this.file, 'https://www.coffeequery.com').then(res => {
      this.popoverController.dismiss();
      console.log('did: ', res)
    }).catch(err => {
      console.log("errror: ", err)
    })
  }
}
