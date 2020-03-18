import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { BiographyPage } from './biography/biography.page';
import {SocialShareComponent} from '../social-share/social-share.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page, BiographyPage],
  entryComponents: [BiographyPage],
  providers:[SocialSharing]
})
export class Tab2PageModule {}
