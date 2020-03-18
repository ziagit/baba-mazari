import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { Calendar } from '@ionic-native/calendar/ngx';

import { TabsPage } from './tabs.page';
import { MenuComponent } from '../menu/menu.component';
import { AboutComponent } from '../menu/about/about.component';
import { CalendarComponent } from '../menu/calendar/calendar.component';
import { DonateComponent } from '../menu/donate/donate.component';
import { LanguageComponent } from '../menu/language/language.component';
import { RefrenceComponent } from '../menu/refrence/refrence.component';
import { CalendarModule } from 'ion2-calendar';
import { MoreAppsComponent } from '../menu/more-apps/more-apps.component';
import { ShareAppComponent } from '../menu/share-app/share-app.component';
import { SettingsComponent } from '../menu/settings/settings.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  declarations: [
    TabsPage,
    MenuComponent,
    AboutComponent,
    CalendarComponent,
    DonateComponent,
    LanguageComponent,
    RefrenceComponent,
    MoreAppsComponent,
    ShareAppComponent,
    SettingsComponent
  ],
  entryComponents: [
    MenuComponent,
    AboutComponent,
    CalendarComponent,
    DonateComponent,
    LanguageComponent,
    RefrenceComponent,
    MoreAppsComponent,
    ShareAppComponent,
    SettingsComponent
  ],
  providers: [
    Calendar
  ]
})
export class TabsPageModule { }
