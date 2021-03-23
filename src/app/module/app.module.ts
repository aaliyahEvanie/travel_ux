import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { DatePickerModule } from 'ionic4-date-picker';
import { AppComponent } from '../components/app.component';
import { AppRoutingModule } from '../routing/app-routing.module';
import { GoogleMaps } from '@ionic-native/google-maps'
import { CalendarModule } from 'ion2-calendar';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, DatePickerModule, CalendarModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, GoogleMaps],
  bootstrap: [AppComponent],
})
export class AppModule {}
