import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SocialShareComponent} from '../social-share/social-share.component';
import {MenuTypeComponent} from '../menu-type/menu-type.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@NgModule({
  imports: [CommonModule,IonicModule],
  declarations: [SocialShareComponent,MenuTypeComponent],
  entryComponents: [SocialShareComponent,MenuTypeComponent],
  exports:[SocialShareComponent,MenuTypeComponent]
})
export class SharedModule {}
