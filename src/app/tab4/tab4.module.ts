import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4Page } from './tab4.page';
import { RouterModule } from '@angular/router';
import { EventPage } from './event/event.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }])
  ],
  declarations: [Tab4Page, EventPage],
  entryComponents: [EventPage],
  providers: [SocialSharing]
})
export class Tab4PageModule { }
