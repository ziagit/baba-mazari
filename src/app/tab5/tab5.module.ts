import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab5Page } from './tab5.page';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BookPage } from './book/book.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab5Page }])
  ],
  declarations: [Tab5Page, BookPage],
  entryComponents: [BookPage],
  providers: [SocialSharing]
})
export class Tab5PageModule { }
