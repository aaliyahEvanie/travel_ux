import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'ionic4-date-picker';
import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from '../routing/home-routing.module';
import { CalendarModule } from 'ion2-calendar';
import { FolderPage } from '../pages/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    DatePickerModule,
    CalendarModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
