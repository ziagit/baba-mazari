import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { GalleryPage } from './gallery/gallery.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SharedModule } from '../shared/shared.module';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page, GalleryPage],
  entryComponents: [GalleryPage],
  providers: [SocialSharing, PhotoViewer]
})
export class Tab3PageModule { }
